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
import { Clock, Globe, Mail, MapPin, Phone, Wrench } from 'lucide-react'
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
	fullName: string
	phoneNumber: string
	appointmentTime: string
	appointmentDate: string
}

type PaymentData = {
	amount: string
	cardNumber: string
	expiryDate: string
	cvv: string
	cardHolderName: string
}

const OrganizationsList: React.FC = () => {
	const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
	const [paymentLoading, setPaymentLoading] = useState(false)
	const [paymentData, setPaymentData] = useState<PaymentData>({
		amount: '2000', // Default amount in UZS
		cardNumber: '',
		expiryDate: '',
		cvv: '',
		cardHolderName: '',
	})

	const [organizations, setOrganizations] = useState<Organization[]>([])
	const [filteredBarberOrgs, setFilteredBarberOrgs] = useState<
		Organization[]
	>([])
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
		appointmentDate: '',
		appointmentTime: '',
	})

	const { toast } = useToast()

	// Barber-related terms to filter by
	const barberTerms = [
		'barber',
		'sartarosh', // Barber in Uzbek
		'salon',
		'hair',
		'soch', // Hair in Uzbek
		'stilist', // Stylist
		'haircut',
	]

	// Function to check if an organization is barber-related
	const isBarberOrganization = (org: Organization): boolean => {
		// Check name for barber terms
		const nameMatches = barberTerms.some(term =>
			org.name.toLowerCase().includes(term.toLowerCase())
		)

		// Check services for barber terms
		const servicesMatch = org.services.some(service =>
			barberTerms.some(term =>
				service.toLowerCase().includes(term.toLowerCase())
			)
		)

		return nameMatches || servicesMatch
	}

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

				// Filter only barber organizations
				const barberOrgs = data.filter(isBarberOrganization)
				setFilteredBarberOrgs(barberOrgs)

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

	// Mavjud xizmatlar turlarini olish (only from barber organizations)
	const allServices = filteredBarberOrgs.flatMap(org => org.services)
	const uniqueServices = [...new Set(allServices)]

	// Tanlangan filter bo'yicha sartaroshxona tashkilotlarni filtrlash
	const displayedOrganizations =
		selectedFilter === 'all'
			? filteredBarberOrgs
			: filteredBarberOrgs.filter(org =>
					org.services.includes(selectedFilter)
			  )

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

	const handlePaymentInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target
		setPaymentData(prev => ({ ...prev, [name]: value }))
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

			// Agar foydalanuvchi avtorizatsiyadan o'tmagan bo'lsa
			if (response.status === 401) {
				throw new Error("Ro'yxatdan o'ting yoki tizimga kiring")
			}

			// Agar boshqa xatolik bo'lsa
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
				appointmentDate: '',
				appointmentTime: '',
			})
			setIsQueueModalOpen(false)

			// Open payment modal after successful queue creation
			setIsPaymentModalOpen(true)
		} catch (error: any) {
			console.error('Navbat yaratishda xatolik:', error)
			toast({
				title: 'Xatolik!',
				description:
					error.message ||
					'Navbat yaratishda xatolik yuz berdi. Qayta urinib ko`ring.',
				variant: 'destructive',
			})
		} finally {
			setQueueLoading(false)
		}
	}

	const handleSubmitPayment = async (e: React.FormEvent) => {
		e.preventDefault()
		setPaymentLoading(true)

		try {
			// Simulate payment processing
			await new Promise(resolve => setTimeout(resolve, 1500))

			// Success
			toast({
				title: "To'lov muvaffaqiyatli amalga oshirildi",
				description: "Sizning to'lovingiz qabul qilindi",
			})

			setPaymentData({
				amount: '50000',
				cardNumber: '',
				expiryDate: '',
				cvv: '',
				cardHolderName: '',
			})
			setIsPaymentModalOpen(false)
		} catch (error: any) {
			console.error("To'lov qilishda xatolik:", error)
			toast({
				title: 'Xatolik!',
				description:
					"To'lov qilishda xatolik yuz berdi. Qayta urinib ko'ring.",
				variant: 'destructive',
			})
		} finally {
			setPaymentLoading(false)
		}
	}

	const organizationsByType: Record<string, Organization[]> = {}

	if (displayedOrganizations.length > 0) {
		displayedOrganizations.forEach(org => {
			const firstService = org.services[0] || 'Boshqa'
			if (!organizationsByType[firstService]) {
				organizationsByType[firstService] = []
			}
			organizationsByType[firstService].push(org)
		})
	}

	return (
		<main className=' mx-auto py-[90px]'>
			<h1 className='text-3xl font-bold text-center mb-10'>
				Sartaroshxonalar ro`yxati
			</h1>

			{loading ? (
				<div className='flex justify-center items-center h-40'>
					<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary'></div>
				</div>
			) : error ? (
				<div className='bg-destructive/10 border border-destructive p-4 rounded-md mb-6'>
					<p className='text-destructive font-medium'>{error}</p>
				</div>
			) : displayedOrganizations.length === 0 ? (
				<div className='text-center py-10'>
					<p className='text-muted-foreground text-lg'>
						Sartaroshxonalar topilmadi
					</p>
				</div>
			) : Object.keys(organizationsByType).length > 0 ? (
				Object.entries(organizationsByType).map(([type, orgs]) => (
					<div key={type} className='mb-10'>
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
						Bu filter bo`yicha sartaroshxonalar topilmadi
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
									Tashkilot haqida batafsil ma`lumot
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
							{selectedService} xizmati uchun ma`lumotlarni
							to`ldiring
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
									htmlFor='appointmentDate'
									className='text-right'
								>
									Sana
								</Label>
								<div className='col-span-3'>
									<input
										id='appointmentDate'
										name='appointmentDate'
										type='date'
										className='w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary'
										value={formData.appointmentDate}
										onChange={handleInputChange}
										required
									/>
								</div>
							</div>

							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='appointmentTime'
									className='text-right'
								>
									Vaqt
								</Label>
								<div className='col-span-3'>
									<Select
										value={formData.appointmentTime}
										onValueChange={value =>
											setFormData(prev => ({
												...prev,
												appointmentTime: value,
											}))
										}
									>
										<SelectTrigger className='w-full'>
											<SelectValue placeholder='Vaqtni tanlang' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='09:00'>
												09:00 - 09:30
											</SelectItem>
											<SelectItem value='09:30'>
												09:30 - 10:00
											</SelectItem>
											<SelectItem value='10:00'>
												10:00 - 10:30
											</SelectItem>
											<SelectItem value='10:30'>
												10:30 - 11:00
											</SelectItem>
											<SelectItem value='11:00'>
												11:00 - 11:30
											</SelectItem>
											<SelectItem value='11:30'>
												11:30 - 12:00
											</SelectItem>
											<SelectItem value='12:00'>
												12:00 - 12:30
											</SelectItem>
											<SelectItem value='12:30'>
												12:30 - 14:00
											</SelectItem>
											<SelectItem value='14:00'>
												14:00 - 14:30
											</SelectItem>
											<SelectItem value='14:30'>
												14:30 - 15:00
											</SelectItem>
											<SelectItem value='15:00'>
												15:00 - 15:30
											</SelectItem>
											<SelectItem value='15:30'>
												15:30 - 16:00
											</SelectItem>
											<SelectItem value='16:00'>
												16:00 - 16:30
											</SelectItem>
											<SelectItem value='16:30'>
												16:30 - 17:00
											</SelectItem>
											<SelectItem value='17:00'>
												17:00 - 17:30
											</SelectItem>
											<SelectItem value='17:30'>
												17:30 - 18:00
											</SelectItem>
										</SelectContent>
									</Select>
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

			{/* Payment Modal */}
			<Dialog
				open={isPaymentModalOpen}
				onOpenChange={setIsPaymentModalOpen}
			>
				<DialogContent className='sm:max-w-[500px]'>
					<DialogHeader>
						<DialogTitle>To`lov ma`lumotlari</DialogTitle>
						<DialogDescription>
							{selectedService} xizmati uchun to`lov
							ma`lumotlarini kiriting
						</DialogDescription>
					</DialogHeader>

					<form onSubmit={handleSubmitPayment}>
						<div className='grid gap-4 py-4'>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='paymentAmount'
									className='text-right'
								>
									Summa
								</Label>
								<div className='col-span-3'>
									<input
										id='paymentAmount'
										name='paymentAmount'
										className='w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary'
										value={2000}
										readOnly
									/>
								</div>
							</div>

							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='cardNumber'
									className='text-right'
								>
									Karta raqami
								</Label>
								<div className='col-span-3'>
									<input
										id='cardNumber'
										name='cardNumber'
										type='text'
										className='w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary'
										value={paymentData.cardNumber}
										onChange={handlePaymentInputChange}
										placeholder='XXXX XXXX XXXX XXXX'
										required
									/>
								</div>
							</div>

							<div className='grid grid-cols-2 gap-4'>
								<div className='grid grid-cols-4 items-center gap-2'>
									<Label
										htmlFor='expiryDate'
										className='text-right col-span-2'
									>
										Muddati
									</Label>
									<div className='col-span-2'>
										<input
											id='expiryDate'
											name='expiryDate'
											type='text'
											className='w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary'
											value={paymentData.expiryDate}
											onChange={handlePaymentInputChange}
											placeholder='MM/YY'
											required
										/>
									</div>
								</div>
							</div>
						</div>

						<DialogFooter>
							<Button type='submit' disabled={paymentLoading}>
								{paymentLoading
									? 'Yuklanmoqda...'
									: "To'lov qilish"}
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</main>
	)
}

export default OrganizationsList
