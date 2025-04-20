'use client'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { useToast } from '@/components/ui/use-toast'
import { ArrowLeft, Clock, RefreshCcw } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CategoriesPage() {
	type QueueItem = {
		name: string
		id: string
		_id: string
		user: {
			_id: string
			name: string
			email: string
		}
		service: string
		timeSlot: string
		createdAt: string
		queueNumber: string // Adding queueNumber
		institution: string // Adding institution
		date: string // Adding date
		time: string // Adding time
		transport: string // Adding transport
		payment: number // Adding payment (as a number, if it's a monetary value)
	}

	const [queueItems, setQueueItems] = useState<QueueItem[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { toast } = useToast()

	// Load queue items from localStorage on component mount
	useEffect(() => {
		const loadQueueItems = () => {
			setIsLoading(true)
			try {
				const storedItems = localStorage.getItem('queueItems')
				if (storedItems) {
					const items = JSON.parse(storedItems) as QueueItem[]
					// Sort by creation time (newest first)
					items.sort(
						(a, b) =>
							new Date(b.createdAt).getTime() -
							new Date(a.createdAt).getTime()
					)
					setQueueItems(items)
				}
			} catch (error) {
				console.error('Error loading queue items:', error)
				toast({
					title: 'Error',
					description: 'Failed to load queue data',
					variant: 'destructive',
				})
			} finally {
				setIsLoading(false)
			}
		}

		loadQueueItems()
	}, [toast])

	const handleRefresh = () => {
		setIsLoading(true)
		setTimeout(() => {
			try {
				const storedItems = localStorage.getItem('queueItems')
				if (storedItems) {
					const items = JSON.parse(storedItems) as QueueItem[]
					// Sort by creation time (newest first)
					items.sort(
						(a, b) =>
							new Date(b.createdAt).getTime() -
							new Date(a.createdAt).getTime()
					)
					setQueueItems(items)
				}

				toast({
					title: 'Refreshed',
					description: 'Queue list has been updated',
				})
			} catch (error) {
				console.error('Error refreshing queue items:', error)
				toast({
					title: 'Error',
					description: 'Failed to refresh queue data',
					variant: 'destructive',
				})
			} finally {
				setIsLoading(false)
			}
		}, 500) // Small delay to show loading state
	}

	const handleClearQueue = () => {
		if (confirm('Are you sure you want to clear all queue items?')) {
			localStorage.removeItem('queueItems')
			setQueueItems([])
			toast({
				title: 'Queue cleared',
				description: 'All appointments have been removed',
			})
		}
	}

	return (
		<main className='container mx-auto py-[90px]'>
			<div className='flex items-center mb-8'>
				<Link href='/appoint'>
					<Button variant='outline' size='sm' className='mr-4'>
						<ArrowLeft className='mr-2 h-4 w-4' /> Back
					</Button>
				</Link>
				<h1 className='text-3xl font-bold'>Queue List</h1>
			</div>

			<Card>
				<CardHeader>
					<CardTitle className='flex items-center'>
						<Clock className='mr-2' /> Current Appointments
					</CardTitle>
					<CardDescription>
						View all scheduled appointments and queue positions.
					</CardDescription>
				</CardHeader>
				<CardContent>
					{isLoading ? (
						<div className='flex justify-center items-center py-10'>
							<RefreshCcw className='h-8 w-8 animate-spin text-primary' />
						</div>
					) : queueItems.length > 0 ? (
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Queue #</TableHead>
									<TableHead>Name</TableHead>
									<TableHead>Institution</TableHead>
									<TableHead>Date</TableHead>
									<TableHead>Time</TableHead>
									<TableHead>Transport</TableHead>
									<TableHead>Payment</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{queueItems.map(item => (
									<TableRow key={item.id}>
										<TableCell className='font-medium'>
											{item.queueNumber}
										</TableCell>
										<TableCell>{item.name}</TableCell>
										<TableCell>
											{item.institution}
										</TableCell>
										<TableCell>{item.date}</TableCell>
										<TableCell>{item.time}</TableCell>
										<TableCell>{item.transport}</TableCell>
										<TableCell>${item.payment}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					) : (
						<div className='text-center py-10 text-muted-foreground'>
							No appointments in the queue. Schedule an
							appointment to see it here.
						</div>
					)}
				</CardContent>
				<CardFooter className='flex justify-between'>
					<Button variant='outline' onClick={handleClearQueue}>
						Clear Queue
					</Button>
					<Button onClick={handleRefresh} disabled={isLoading}>
						{isLoading ? (
							<>
								<RefreshCcw className='mr-2 h-4 w-4 animate-spin' />
								Refreshing...
							</>
						) : (
							<>
								<RefreshCcw className='mr-2 h-4 w-4' />
								Refresh
							</>
						)}
					</Button>
				</CardFooter>
			</Card>
		</main>
	)
}
