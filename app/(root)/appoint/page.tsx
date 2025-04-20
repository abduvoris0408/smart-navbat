'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'
import {
	Building2,
	Clock,
	Globe,
	Mail,
	MapPin,
	Phone,
	Wrench,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'

type Schedule = {
	[key: string]: string
}

type Organization = {
	_id: string
	name: string
	location: string
	services: string[]
	schedule: Schedule
	phoneNumber?: string
	email?: string
	website?: string
}

type QueueForm = {
	service: string
	timeSlot: string
	// Add basic user info fields for authentication
	fullName: string
	phoneNumber: string
}

const OrganizationsList: React.FC = () => {
	const [organizations, setOrganizations] = useState<Organization[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [selectedFilter, setSelectedFilter] = useState<string>('all')

	const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null)
	const [isOrgModalOpen, setIsOrgModalOpen] = useState(false)

	const [isQueueModalOpen, setIsQueueModalOpen] = useState(false)
	const [selectedService, setSelectedService] = useState<string>('')
	const [queueLoading, setQueueLoading] = useState(false)
	const [formData, setFormData] = useState<QueueForm>({
		service: '',
		timeSlot: '',
		fullName: '',
		phoneNumber: '',
	})

	const { toast } = useToast()

	useEffect(() => {
		const fetchOrganizations = async () => {
			setLoading(true)
			try {
				const response = await fetch(
					'https://snavbatbackend.onrender.com/api/organizations'
				)
				if (!response.ok) {
					throw new Error('Server javob bermadi')
				}
				const data = await response.json()
				setOrganizations(data)
				setError(null)
			} catch (error) {
				console.error('Tashkilotlar yuklanmadi:', error)
				setError('Tashkilotlarni yuklashda xatolik yuz berdi')
			} finally {
				setLoading(false)
			}
		}

		fetchOrganizations()
	}, [])

	// Mavjud xizmatlar turlarini olish
	const allServices = organizations.flatMap(org => org.services)
	const uniqueServices = [...new Set(allServices)]

	// Tanlangan filter bo'yicha tashkilotlarni filtrlash
	const filteredOrganizations =
		selectedFilter === 'all'
			? organizations
			: organizations.filter(org => org.services.includes(selectedFilter))

	// Hafta kunlarini o'zbekchaga o'girish
	const translateDay = (day: string) => {
		const days: { [key: string]: string } = {
			monday: 'Dushanba',
			tuesday: 'Seshanba',
			wednesday: 'Chorshanba',
			thursday: 'Payshanba',
			friday: 'Juma',
			saturday: 'Shanba',
			sunday: 'Yakshanba',
		}
		return days[day.toLowerCase()] || day
	}

	const handleOrgClick = (org: Organization) => {
		setSelectedOrg(org)
		setIsOrgModalOpen(true)
	}

	const handleServiceClick = (service: string) => {
		setSelectedService(service)
		setFormData({
			...formData,
			service: service,
		})
		setIsOrgModalOpen(false)
		setIsQueueModalOpen(true)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmitQueue = async (e: React.FormEvent) => {
		e.preventDefault()
		setQueueLoading(true)

		try {
			// Tokenni localStorage'dan olish
			const token = localStorage.getItem('auth_token')

			if (!token) {
				throw new Error('Token topilmadi. Iltimos, tizimga kiring.')
			}

			const response = await fetch(
				'https://snavbatbackend.onrender.com/api/queues/add',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`, // MUHIM: Bearer so'zini unutmang
					},
					body: JSON.stringify({
						service: formData.service,
						timeSlot: formData.timeSlot,
						user: {
							fullName: formData.fullName,
							phoneNumber: formData.phoneNumber,
						},
						organizationId: selectedOrg?._id || '',
					}),
				}
			)

			// Agar foydalanuvchi avtorizatsiyadan o'tmagan bo‘lsa
			if (response.status === 401) {
				throw new Error("Ro'yxatdan o'ting yoki tizimga kiring")
			}

			// Agar boshqa xatolik bo‘lsa
			if (!response.ok) {
				const errorData = await response.json()
				throw new Error(
					errorData.message || 'Navbat yaratishda xatolik yuz berdi'
				)
			}

			const data = await response.json()

			toast({
				title: 'Muvaffaqiyatli',
				description: 'Navbat muvaffaqiyatli yaratildi',
			})

			setFormData({
				service: '',
				timeSlot: '',
				fullName: '',
				phoneNumber: '',
			})
			setIsQueueModalOpen(false)
		} catch (error: any) {
			console.error('Navbat yaratishda xatolik:', error)
			toast({
				title: 'Xatolik!',
				description:
					error.message ||
					'Navbat yaratishda xatolik yuz berdi. Qayta urinib ko‘ring.',
				variant: 'destructive',
			})
		} finally {
			setQueueLoading(false)
		}
	}

	// Tashkilotlar turini guruhlash uchun
	const organizationsByType: Record<string, Organization[]> = {}

	if (filteredOrganizations.length > 0) {
		filteredOrganizations.forEach(org => {
			const firstService = org.services[0] || 'Boshqa'
			if (!organizationsByType[firstService]) {
				organizationsByType[firstService] = []
			}
			organizationsByType[firstService].push(org)
		})
	}

	return (
		<main className='container mx-auto py-[90px]'>
			<h1 className='text-3xl font-bold text-center mb-10'>
				Tashkilotlar ro`yxati
			</h1>

			<div className='flex justify-end mb-6'>
				<div className='w-full md:w-64'>
					<Select
						value={selectedFilter}
						onValueChange={value => setSelectedFilter(value)}
					>
						<SelectTrigger>
							<SelectValue placeholder="Xizmatlar bo'yicha saralash" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='all'>
								Barcha xizmatlar
							</SelectItem>
							{uniqueServices.map((service, index) => (
								<SelectItem key={index} value={service}>
									{service}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>

			{loading ? (
				<div className='flex justify-center items-center h-40'>
					<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary'></div>
				</div>
			) : error ? (
				<div className='bg-destructive/10 border border-destructive p-4 rounded-md mb-6'>
					<p className='text-destructive font-medium'>{error}</p>
				</div>
			) : Object.keys(organizationsByType).length > 0 ? (
				Object.entries(organizationsByType).map(([type, orgs]) => (
					<div key={type} className='mb-10'>
						<h2 className='text-2xl font-semibold mb-4 flex items-center'>
							<Building2 className='mr-2' /> {type}
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{orgs.map(org => (
								<Card
									key={org._id}
									className='cursor-pointer hover:bg-muted/50 transition-colors'
									onClick={() => handleOrgClick(org)}
								>
									<CardHeader>
										<CardTitle>{org.name}</CardTitle>
										<CardDescription className='flex items-center gap-1'>
											<MapPin className='h-4 w-4' />
											{org.location}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className='flex flex-wrap gap-2 mb-2'>
											{org.services
												.slice(0, 3)
												.map((service, i) => (
													<Badge
														key={i}
														variant='secondary'
													>
														{service}
													</Badge>
												))}
											{org.services.length > 3 && (
												<Badge variant='outline'>
													+{org.services.length - 3}
												</Badge>
											)}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				))
			) : (
				<div className='text-center py-10'>
					<p className='text-muted-foreground text-lg'>
						Bu filter bo'yicha tashkilotlar topilmadi
					</p>
				</div>
			)}

			{/* Organization Details Modal */}
			<Dialog open={isOrgModalOpen} onOpenChange={setIsOrgModalOpen}>
				<DialogContent className='sm:max-w-[500px]'>
					{selectedOrg && (
						<>
							<DialogHeader>
								<DialogTitle>{selectedOrg.name}</DialogTitle>
								<DialogDescription>
									Tashkilot haqida batafsil ma'lumot
								</DialogDescription>
							</DialogHeader>

							<div className='py-4 space-y-4'>
								<div className='flex items-start gap-2'>
									<MapPin className='h-5 w-5 text-muted-foreground mt-0.5' />
									<div>
										<Label className='text-sm font-medium'>
											Manzil
										</Label>
										<p className='text-sm'>
											{selectedOrg.location}
										</p>
									</div>
								</div>

								{selectedOrg.phoneNumber && (
									<div className='flex items-start gap-2'>
										<Phone className='h-5 w-5 text-muted-foreground mt-0.5' />
										<div>
											<Label className='text-sm font-medium'>
												Telefon
											</Label>
											<p className='text-sm'>
												{selectedOrg.phoneNumber}
											</p>
										</div>
									</div>
								)}

								{selectedOrg.email && (
									<div className='flex items-start gap-2'>
										<Mail className='h-5 w-5 text-muted-foreground mt-0.5' />
										<div>
											<Label className='text-sm font-medium'>
												Email
											</Label>
											<p className='text-sm'>
												{selectedOrg.email}
											</p>
										</div>
									</div>
								)}

								{selectedOrg.website && (
									<div className='flex items-start gap-2'>
										<Globe className='h-5 w-5 text-muted-foreground mt-0.5' />
										<div>
											<Label className='text-sm font-medium'>
												Websayt
											</Label>
											<p className='text-sm'>
												<a
													href={selectedOrg.website}
													target='_blank'
													rel='noopener noreferrer'
													className='text-primary hover:underline'
												>
													{selectedOrg.website}
												</a>
											</p>
										</div>
									</div>
								)}

								<div className='flex items-start gap-2'>
									<Wrench className='h-5 w-5 text-muted-foreground mt-0.5' />
									<div>
										<Label className='text-sm font-medium'>
											Xizmatlar
										</Label>
										<div className='flex flex-wrap gap-2 mt-1'>
											{selectedOrg.services.map(
												(service, i) => (
													<Button
														key={i}
														variant='outline'
														size='sm'
														className='mt-1'
														onClick={() =>
															handleServiceClick(
																service
															)
														}
													>
														{service}
													</Button>
												)
											)}
										</div>
									</div>
								</div>

								<div className='flex items-start gap-2'>
									<Clock className='h-5 w-5 text-muted-foreground mt-0.5' />
									<div>
										<Label className='text-sm font-medium'>
											Ish vaqti
										</Label>
										<div className='grid grid-cols-2 gap-x-4 gap-y-1 mt-1'>
											{Object.entries(
												selectedOrg.schedule
											).map(([day, hours]) => (
												<div
													key={day}
													className='text-sm'
												>
													<span className='font-medium'>
														{translateDay(day)}:
													</span>{' '}
													<span className='text-muted-foreground'>
														{hours}
													</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>

							<div className='flex justify-end'>
								<Button
									onClick={() => setIsOrgModalOpen(false)}
								>
									Yopish
								</Button>
							</div>
						</>
					)}
				</DialogContent>
			</Dialog>

			{/* Queue Registration Modal */}
			<Dialog open={isQueueModalOpen} onOpenChange={setIsQueueModalOpen}>
				<DialogContent className='sm:max-w-[500px]'>
					<DialogHeader>
						<DialogTitle>Navbatga yozilish</DialogTitle>
						<DialogDescription>
							{selectedService} xizmati uchun ma'lumotlarni
							to'ldiring
						</DialogDescription>
					</DialogHeader>

					<form onSubmit={handleSubmitQueue}>
						<div className='grid gap-4 py-4'>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='service' className='text-right'>
									Xizmat
								</Label>
								<div className='col-span-3'>
									<input
										id='service'
										name='service'
										className='w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary'
										value={formData.service}
										readOnly
									/>
								</div>
							</div>

							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='fullName'
									className='text-right'
								>
									F.I.O
								</Label>
								<div className='col-span-3'>
									<input
										id='fullName'
										name='fullName'
										type='text'
										className='w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary'
										value={formData.fullName}
										onChange={handleInputChange}
										placeholder="To'liq ismingiz"
										required
									/>
								</div>
							</div>

							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='phoneNumber'
									className='text-right'
								>
									Telefon
								</Label>
								<div className='col-span-3'>
									<input
										id='phoneNumber'
										name='phoneNumber'
										type='tel'
										className='w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary'
										value={formData.phoneNumber}
										onChange={handleInputChange}
										placeholder='+998 XX XXX XX XX'
										required
									/>
								</div>
							</div>

							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='timeSlot'
									className='text-right'
								>
									Vaqt
								</Label>
								<div className='col-span-3'>
									<input
										id='timeSlot'
										name='timeSlot'
										type='datetime-local'
										className='w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary'
										value={formData.timeSlot}
										onChange={handleInputChange}
										required
									/>
								</div>
							</div>
						</div>

						<DialogFooter>
							<Button type='submit' disabled={queueLoading}>
								{queueLoading
									? 'Yuklanmoqda...'
									: 'Navbatga yozilish'}
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</main>
	)
}

export default OrganizationsList
