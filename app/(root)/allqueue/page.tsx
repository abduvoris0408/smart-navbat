// 'use client'

// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardHeader,
// 	CardTitle,
// } from '@/components/ui/card'
// import {
// 	Command,
// 	CommandEmpty,
// 	CommandGroup,
// 	CommandInput,
// 	CommandItem,
// 	CommandList,
// } from '@/components/ui/command'
// import {
// 	Popover,
// 	PopoverContent,
// 	PopoverTrigger,
// } from '@/components/ui/popover'
// import { Skeleton } from '@/components/ui/skeleton'
// import { cn } from '@/lib/utils'
// import {
// 	AlertCircle,
// 	Check,
// 	CheckCircle,
// 	ChevronsUpDown,
// 	Clock,
// 	User,
// } from 'lucide-react'
// import { useEffect, useState } from 'react'

// interface QueueUser {
// 	_id: string
// 	name: string
// 	email: string
// }

// interface Queue {
// 	_id: string
// 	user: QueueUser
// 	service: string
// 	status: string
// 	createdAt: string
// 	updatedAt: string
// }

// interface QueuesResponse {
// 	message: string
// 	queues: Queue[]
// }

// const services = [
// 	{ value: 'haircut', label: 'Haircut' },
// 	{ value: 'business', label: 'Business' },
// 	{ value: 'cafe', label: 'Cafe' },
// 	{ value: 'taxi', label: 'Taxi' },
// 	{ value: 'cleaning', label: 'Cleaning' },
// ]

// export default function ServiceQueuesList() {
// 	const [queues, setQueues] = useState<Queue[]>([])
// 	const [loading, setLoading] = useState(true)
// 	const [error, setError] = useState<string | null>(null)
// 	const [selectedService, setSelectedService] = useState('Haircut')
// 	const [open, setOpen] = useState(false)

// 	useEffect(() => {
// 		const fetchQueues = async () => {
// 			try {
// 				setLoading(true)

// 				// Tokenni localStorage dan olish
// 				const token = localStorage.getItem('auth_token')

// 				if (!token) {
// 					throw new Error('Token topilmadi. Iltimos, tizimga kiring.')
// 				}

// 				// API so‘rov yuborish
// 				const apiResponse = await fetch(
// 					`https://snavbatbackend.onrender.com/api/queues/service?service=${selectedService}`,
// 					{
// 						headers: {
// 							Authorization: `Bearer ${token}`,
// 						},
// 					}
// 				)

// 				if (!apiResponse.ok) {
// 					throw new Error(`API xatosi: ${apiResponse.status}`)
// 				}

// 				const data: QueuesResponse = await apiResponse.json()
// 				setQueues(data.queues)
// 				setError(null)
// 			} catch (err) {
// 				console.error('Navbatlarni olishda xatolik:', err)
// 				setError(
// 					`Navbatlarni olishda xatolik yuz berdi: ${
// 						err instanceof Error ? err.message : "Noma'lum xato"
// 					}`
// 				)
// 			} finally {
// 				setLoading(false)
// 			}
// 		}

// 		fetchQueues()
// 	}, [selectedService])

// 	const formatDate = (dateString: string) => {
// 		const date = new Date(dateString)
// 		return new Intl.DateTimeFormat('uz-UZ', {
// 			day: '2-digit',
// 			month: '2-digit',
// 			year: 'numeric',
// 			hour: '2-digit',
// 			minute: '2-digit',
// 		}).format(date)
// 	}

// 	const getStatusBadge = (status: string) => {
// 		switch (status) {
// 			case 'waiting':
// 				return (
// 					<Badge
// 						variant='outline'
// 						className='bg-yellow-100 text-yellow-800 border-yellow-300'
// 					>
// 						Kutilmoqda
// 					</Badge>
// 				)
// 			case 'completed':
// 				return (
// 					<Badge
// 						variant='outline'
// 						className='bg-green-100 text-green-800 border-green-300'
// 					>
// 						Yakunlandi
// 					</Badge>
// 				)
// 			case 'cancelled':
// 				return (
// 					<Badge
// 						variant='outline'
// 						className='bg-red-100 text-red-800 border-red-300'
// 					>
// 						Bekor qilindi
// 					</Badge>
// 				)
// 			default:
// 				return <Badge variant='outline'>{status}</Badge>
// 		}
// 	}

// 	return (
// 		<div className='space-y-6 py-[80px]'>
// 			<div className='flex flex-col sm:flex-row sm:items-center gap-4'>
// 				<h1 className='text-2xl font-bold'>Navbatlar Tizimi</h1>
// 				<div className='ml-auto'>
// 					<Popover open={open} onOpenChange={setOpen}>
// 						<PopoverTrigger asChild>
// 							<Button
// 								variant='outline'
// 								role='combobox'
// 								aria-expanded={open}
// 								className='w-full justify-between sm:w-[200px]'
// 							>
// 								{selectedService || 'Xizmatni tanlang...'}
// 								<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
// 							</Button>
// 						</PopoverTrigger>
// 						<PopoverContent className='w-full p-0 sm:w-[200px]'>
// 							<Command>
// 								<CommandInput placeholder='Xizmatni qidirish...' />
// 								<CommandList>
// 									<CommandEmpty>
// 										Xizmat topilmadi.
// 									</CommandEmpty>
// 									<CommandGroup>
// 										{services.map(service => (
// 											<CommandItem
// 												key={service.value}
// 												value={service.value}
// 												onSelect={() => {
// 													setSelectedService(
// 														service.label
// 													)
// 													setOpen(false)
// 												}}
// 											>
// 												<Check
// 													className={cn(
// 														'mr-2 h-4 w-4',
// 														selectedService ===
// 															service.label
// 															? 'opacity-100'
// 															: 'opacity-0'
// 													)}
// 												/>
// 												{service.label}
// 											</CommandItem>
// 										))}
// 									</CommandGroup>
// 								</CommandList>
// 							</Command>
// 						</PopoverContent>
// 					</Popover>
// 				</div>
// 			</div>

// 			{loading ? (
// 				<div className='space-y-4'>
// 					<Card>
// 						<CardHeader>
// 							<Skeleton className='h-8 w-3/4' />
// 							<Skeleton className='h-4 w-1/2' />
// 						</CardHeader>
// 						<CardContent>
// 							<div className='space-y-2'>
// 								<Skeleton className='h-4 w-full' />
// 								<Skeleton className='h-4 w-full' />
// 								<Skeleton className='h-4 w-3/4' />
// 							</div>
// 						</CardContent>
// 					</Card>
// 					<Card>
// 						<CardHeader>
// 							<Skeleton className='h-8 w-3/4' />
// 							<Skeleton className='h-4 w-1/2' />
// 						</CardHeader>
// 						<CardContent>
// 							<div className='space-y-2'>
// 								<Skeleton className='h-4 w-full' />
// 								<Skeleton className='h-4 w-full' />
// 								<Skeleton className='h-4 w-3/4' />
// 							</div>
// 						</CardContent>
// 					</Card>
// 				</div>
// 			) : error ? (
// 				<Alert variant='destructive'>
// 					<AlertCircle className='h-4 w-4' />
// 					<AlertTitle>Xatolik</AlertTitle>
// 					<AlertDescription>{error}</AlertDescription>
// 				</Alert>
// 			) : queues.length === 0 ? (
// 				<Alert>
// 					<AlertCircle className='h-4 w-4' />
// 					<AlertTitle>Ma'lumot topilmadi</AlertTitle>
// 					<AlertDescription>{`"${selectedService}" xizmati uchun hech qanday navbat yo'q.`}</AlertDescription>
// 				</Alert>
// 			) : (
// 				<div>
// 					<h2 className='text-xl font-semibold mb-4'>{`"${selectedService}" xizmati uchun navbatlar`}</h2>
// 					<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
// 						{queues.map(queue => (
// 							<Card key={queue._id} className='overflow-hidden'>
// 								<CardHeader className='pb-2'>
// 									<div className='flex justify-between items-start'>
// 										<CardTitle className='text-lg'>
// 											{queue.user.name}
// 										</CardTitle>
// 										{getStatusBadge(queue.status)}
// 									</div>
// 									<CardDescription>
// 										{queue.user.email}
// 									</CardDescription>
// 								</CardHeader>
// 								<CardContent>
// 									<div className='space-y-2 text-sm'>
// 										<div className='flex items-center gap-2'>
// 											<User className='h-4 w-4 text-muted-foreground' />
// 											<span>
// 												ID: {queue._id.substring(0, 8)}
// 												...
// 											</span>
// 										</div>
// 										<div className='flex items-center gap-2'>
// 											<Clock className='h-4 w-4 text-muted-foreground' />
// 											<span>
// 												Yaratilgan vaqt:{' '}
// 												{formatDate(queue.createdAt)}
// 											</span>
// 										</div>
// 										{queue.status === 'completed' && (
// 											<div className='flex items-center gap-2 text-green-600'>
// 												<CheckCircle className='h-4 w-4' />
// 												<span>
// 													Yakunlangan vaqt:{' '}
// 													{formatDate(
// 														queue.updatedAt
// 													)}
// 												</span>
// 											</div>
// 										)}
// 									</div>
// 								</CardContent>
// 							</Card>
// 						))}
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	)
// }
'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import {
	AlertCircle,
	Check,
	CheckCircle,
	ChevronsUpDown,
	Clock,
	User,
} from 'lucide-react'
import { useEffect, useState } from 'react'

interface QueueUser {
	_id: string
	name: string
	email: string
}

interface Queue {
	_id: string
	user: QueueUser
	service: string
	status: string
	createdAt: string
	updatedAt: string
}

interface QueuesResponse {
	message: string
	queues: Queue[]
}

interface Organization {
	_id: string
	name: string
	services: string[]
}

export default function ServiceQueuesList() {
	const [queues, setQueues] = useState<Queue[]>([])
	const [organizations, setOrganizations] = useState<Organization[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [selectedService, setSelectedService] = useState<string | null>(null)
	const [open, setOpen] = useState(false)

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

	const allServices = organizations.flatMap(org => org.services)
	const uniqueServices = [...new Set(allServices)]

	useEffect(() => {
		const fetchQueues = async () => {
			if (!selectedService) return

			try {
				setLoading(true)
				const token = localStorage.getItem('auth_token')
				if (!token) {
					throw new Error('Token topilmadi. Iltimos, tizimga kiring.')
				}

				const apiResponse = await fetch(
					`https://snavbatbackend.onrender.com/api/queues/service?service=${selectedService}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)

				if (!apiResponse.ok) {
					throw new Error(`API xatosi: ${apiResponse.status}`)
				}

				const data: QueuesResponse = await apiResponse.json()
				setQueues(data.queues)
				setError(null)
			} catch (err) {
				console.error('Navbatlarni olishda xatolik:', err)
				setError(
					`Navbatlarni olishda xatolik yuz berdi: ${
						err instanceof Error ? err.message : "Noma'lum xato"
					}`
				)
			} finally {
				setLoading(false)
			}
		}

		fetchQueues()
	}, [selectedService])

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		return new Intl.DateTimeFormat('uz-UZ', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		}).format(date)
	}

	const getStatusBadge = (status: string) => {
		switch (status) {
			case 'waiting':
				return (
					<Badge
						variant='outline'
						className='bg-yellow-100 text-yellow-800 border-yellow-300'
					>
						Kutilmoqda
					</Badge>
				)
			case 'completed':
				return (
					<Badge
						variant='outline'
						className='bg-green-100 text-green-800 border-green-300'
					>
						Yakunlandi
					</Badge>
				)
			case 'cancelled':
				return (
					<Badge
						variant='outline'
						className='bg-red-100 text-red-800 border-red-300'
					>
						Bekor qilindi
					</Badge>
				)
			default:
				return <Badge variant='outline'>{status}</Badge>
		}
	}

	return (
		<div className='space-y-6 py-[80px]'>
			<div className='flex flex-col sm:flex-row sm:items-center gap-4'>
				<h1 className='text-2xl font-bold'>Navbatlar Tizimi</h1>
				<div className='ml-auto'>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant='outline'
								role='combobox'
								aria-expanded={open}
								className='w-full justify-between sm:w-[200px]'
							>
								{selectedService || 'Xizmatni tanlang...'}
								<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-full p-0 sm:w-[200px]'>
							<Command>
								<CommandInput placeholder='Xizmatni qidirish...' />
								<CommandList>
									<CommandEmpty>
										Xizmat topilmadi.
									</CommandEmpty>
									<CommandGroup>
										{uniqueServices.map(service => (
											<CommandItem
												key={service}
												value={service}
												onSelect={() => {
													setSelectedService(service)
													setOpen(false)
												}}
											>
												<Check
													className={cn(
														'mr-2 h-4 w-4',
														selectedService ===
															service
															? 'opacity-100'
															: 'opacity-0'
													)}
												/>
												{service}
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>
				</div>
			</div>

			{loading ? (
				<div className='space-y-4'>
					<Card>
						<CardHeader>
							<Skeleton className='h-8 w-3/4' />
							<Skeleton className='h-4 w-1/2' />
						</CardHeader>
						<CardContent>
							<div className='space-y-2'>
								<Skeleton className='h-4 w-full' />
								<Skeleton className='h-4 w-full' />
								<Skeleton className='h-4 w-3/4' />
							</div>
						</CardContent>
					</Card>
				</div>
			) : error ? (
				<Alert variant='destructive'>
					<AlertCircle className='h-4 w-4' />
					<AlertTitle>Xatolik</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			) : queues.length === 0 ? (
				<Alert>
					<AlertCircle className='h-4 w-4' />
					<AlertTitle>Ma`lumot topilmadi</AlertTitle>
					<AlertDescription>{`"${selectedService}" xizmati uchun hech qanday navbat yo'q.`}</AlertDescription>
				</Alert>
			) : (
				<div>
					<h2 className='text-xl font-semibold mb-4'>{`"${selectedService}" xizmati uchun navbatlar`}</h2>
					<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
						{queues.map(queue => (
							<Card
								key={queue._id}
								className='overflow-hidden shadow-md rounded-lg'
							>
								<CardHeader className='pb-2'>
									<div className='flex justify-between items-start'>
										<CardTitle className='text-lg font-semibold text-gray-800'>
											Band
										</CardTitle>
										{getStatusBadge(queue.status)}{' '}
										{/* Status uchun badge */}
									</div>
									{/* <CardDescription className='text-sm text-gray-500 italic'>
										Band
									</CardDescription> */}
								</CardHeader>
								<CardContent>
									<div className='space-y-2 text-sm text-gray-600'>
										<div className='flex items-center gap-2'>
											<User className='h-4 w-4 text-muted-foreground' />
											<span>
												ID: {queue._id.substring(0, 8)}
												...
											</span>
										</div>
										<div className='flex items-center gap-2'>
											<Clock className='h-4 w-4 text-muted-foreground' />
											<span>
												Yaratilgan vaqt:{' '}
												{formatDate(queue.createdAt)}
											</span>
										</div>
										{queue.status === 'completed' && (
											<div className='flex items-center gap-2 text-green-600'>
												<CheckCircle className='h-4 w-4' />
												<span>
													Yakunlangan vaqt:{' '}
													{formatDate(
														queue.updatedAt
													)}
												</span>
											</div>
										)}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
