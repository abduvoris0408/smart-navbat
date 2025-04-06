'use client'

import type React from 'react'

import { Button } from '@/components/ui/button'
import {
	Card,
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'
import { Building2, Hospital } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// Define the QueueItem type
export type QueueItem = {
	id: string
	name: string
	institution: string
	time: string
	date: string
	transport: string
	payment: string
	queueNumber: number
	createdAt: number
}

export default function Home() {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedInstitution, setSelectedInstitution] = useState('')
	const [formData, setFormData] = useState({
		name: '',
		time: '',
		date: '',
		transport: '',
		payment: '',
	})
	const router = useRouter()
	const { toast } = useToast()

	const institutions = {
		banks: ['National Bank', 'City Bank', 'Community Credit Union'],
		hospitals: ['General Hospital', 'Medical Center', 'Community Clinic'],
	}

	const handleInstitutionClick = (type: string, name: string) => {
		setSelectedInstitution(name)
		setIsOpen(true)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target
		setFormData(prev => ({ ...prev, [id]: value }))
	}

	const handleSelectChange = (value: string) => {
		setFormData(prev => ({ ...prev, transport: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		// Generate a random queue number between 1 and 100
		const queueNumber = Math.floor(Math.random() * 100) + 1

		// Create a new queue item
		const newQueueItem: QueueItem = {
			id: Date.now().toString(),
			name: formData.name,
			institution: selectedInstitution,
			time: formData.time,
			date: formData.date,
			transport: formData.transport,
			payment: formData.payment,
			queueNumber,
			createdAt: Date.now(),
		}

		// Get existing queue items from localStorage or initialize empty array
		let queueItems: QueueItem[] = []
		if (typeof window !== 'undefined') {
			const storedItems = localStorage.getItem('queueItems')
			if (storedItems) {
				queueItems = JSON.parse(storedItems)
			}

			// Add new item to the queue
			queueItems.push(newQueueItem)

			// Save updated queue back to localStorage
			localStorage.setItem('queueItems', JSON.stringify(queueItems))
		}

		toast({
			title: 'Appointment scheduled',
			description: `You have been assigned queue number ${queueNumber}`,
		})

		// Reset form and close dialog
		setFormData({
			name: '',
			time: '',
			date: '',
			transport: '',
			payment: '',
		})
		setIsOpen(false)

		// Navigate to the categories page
		router.push('/categories')
	}

	return (
		<main className='container mx-auto py-[90px]'>
			<h1 className='text-3xl font-bold text-center mb-10'>
				Appointment Scheduling System
			</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div>
					<h2 className='text-2xl font-semibold mb-4 flex items-center'>
						<Building2 className='mr-2' /> Banks
					</h2>
					<div className='grid grid-cols-1 gap-4'>
						{institutions.banks.map(bank => (
							<Card
								key={bank}
								className='cursor-pointer hover:bg-muted/50 transition-colors'
								onClick={() =>
									handleInstitutionClick('bank', bank)
								}
							>
								<CardHeader>
									<CardTitle>{bank}</CardTitle>
									<CardDescription>
										Click to schedule an appointment
									</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>

				<div>
					<h2 className='text-2xl font-semibold mb-4 flex items-center'>
						<Hospital className='mr-2' /> Hospitals
					</h2>
					<div className='grid grid-cols-1 gap-4'>
						{institutions.hospitals.map(hospital => (
							<Card
								key={hospital}
								className='cursor-pointer hover:bg-muted/50 transition-colors'
								onClick={() =>
									handleInstitutionClick('hospital', hospital)
								}
							>
								<CardHeader>
									<CardTitle>{hospital}</CardTitle>
									<CardDescription>
										Click to schedule an appointment
									</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</div>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className='sm:max-w-[500px]'>
					<DialogHeader>
						<DialogTitle>
							Schedule an appointment at {selectedInstitution}
						</DialogTitle>
						<DialogDescription>
							Fill in the details below to register for an
							appointment.
						</DialogDescription>
					</DialogHeader>
					<form onSubmit={handleSubmit}>
						<div className='grid gap-4 py-4'>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='name' className='text-right'>
									Full Name
								</Label>
								<Input
									id='name'
									className='col-span-3'
									value={formData.name}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='time' className='text-right'>
									Time
								</Label>
								<Input
									id='time'
									type='time'
									className='col-span-3'
									value={formData.time}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='date' className='text-right'>
									Date
								</Label>
								<Input
									id='date'
									type='date'
									className='col-span-3'
									value={formData.date}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label
									htmlFor='transport'
									className='text-right'
								>
									Transport
								</Label>
								<Select
									required
									value={formData.transport}
									onValueChange={handleSelectChange}
								>
									<SelectTrigger className='col-span-3'>
										<SelectValue placeholder='How will you arrive?' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='car'>
											By Car
										</SelectItem>
										<SelectItem value='public'>
											Public Transport
										</SelectItem>
										<SelectItem value='walking'>
											Walking
										</SelectItem>
										<SelectItem value='other'>
											Other
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='payment' className='text-right'>
									Payment
								</Label>
								<Input
									id='payment'
									type='number'
									min='0'
									step='0.01'
									placeholder='Amount to pay'
									className='col-span-3'
									value={formData.payment}
									onChange={handleInputChange}
									required
								/>
							</div>
						</div>
						<DialogFooter>
							<Button type='submit'>Send</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</main>
	)
}
