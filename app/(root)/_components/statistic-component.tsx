'use client'

import { Award, Calendar, Star, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function StatisticsComponent() {
	const [isVisible, setIsVisible] = useState(false)
	const [counts, setCounts] = useState({
		users: 0,
		rating: 0,
		years: 0,
		awards: 0,
	})
	const containerRef = useRef<HTMLDivElement>(null)

	const targetCounts = {
		users: 25000,
		rating: 4.9,
		years: 7,
		awards: 15,
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.1 }
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (!isVisible) return

		const duration = 2500 // 2.5 seconds for the animation
		const framesPerSecond = 60
		const totalFrames = (duration / 1000) * framesPerSecond

		let frame = 0
		const interval = setInterval(() => {
			frame++
			const progress = frame / totalFrames

			if (progress >= 1) {
				setCounts(targetCounts)
				clearInterval(interval)
				return
			}

			// Easing function for smoother animation
			const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
			const easedProgress = easeOutCubic(progress)

			setCounts({
				users: Math.round(easedProgress * targetCounts.users),
				rating: Number(
					(easedProgress * targetCounts.rating).toFixed(1)
				),
				years: Math.round(easedProgress * targetCounts.years),
				awards: Math.round(easedProgress * targetCounts.awards),
			})
		}, 1000 / framesPerSecond)

		return () => clearInterval(interval)
	}, [isVisible])

	return (
		<div
			ref={containerRef}
			className='container mx-auto px-2 relative overflow-hidden'
		>
			{/* Background decorative elements */}
			<div className='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl'></div>
			<div className='absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl'></div>

			<div className='text-center mb-12 max-w-2xl mx-auto'>
			
				
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				{/* Users Stat Card */}
				<div
					className={`relative group transition-all duration-1000 ease-out ${
						isVisible
							? 'translate-y-0 opacity-100'
							: 'translate-y-10 opacity-0'
					}`}
					style={{ transitionDelay: '100ms' }}
				>
					<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-sm transform group-hover:scale-105 transition-transform duration-500'></div>
					<div className='relative bg-background dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/10 h-full transform group-hover:-translate-y-1 transition-all duration-300'>
						<div className='absolute -top-4 -right-4 bg-primary/10 w-24 h-24 rounded-full blur-xl opacity-70'></div>

						<div className='flex items-center justify-center mb-6'>
							<div className='relative'>
								<div className='absolute inset-0 bg-primary/20 rounded-full blur-sm'></div>
								<div className='relative bg-gradient-to-br from-primary to-primary/70 rounded-full p-4 shadow-lg'>
									<Users className='h-6 w-6 text-white' />
								</div>
							</div>
						</div>

						<h3 className='text-5xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70'>
							{counts.users.toLocaleString()}
						</h3>
						<p className='text-center text-lg font-medium text-gray-700 dark:text-gray-300'>
							Active Users
						</p>
						<p className='mt-2 text-sm text-center text-gray-500 dark:text-gray-400'>
							People using our app worldwide
						</p>

						<div className='w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-6 overflow-hidden'>
							<div
								className='bg-gradient-to-r from-primary to-primary/70 h-full rounded-full transition-all duration-1500 ease-out'
								style={{ width: isVisible ? '100%' : '0%' }}
							></div>
						</div>
					</div>
				</div>

				{/* Rating Stat Card */}
				<div
					className={`relative group transition-all duration-1000 ease-out ${
						isVisible
							? 'translate-y-0 opacity-100'
							: 'translate-y-10 opacity-0'
					}`}
					style={{ transitionDelay: '200ms' }}
				>
					<div className='absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 rounded-2xl blur-sm transform group-hover:scale-105 transition-transform duration-500'></div>
					<div className='relative bg-background dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-yellow-500/10 h-full transform group-hover:-translate-y-1 transition-all duration-300'>
						<div className='absolute -top-4 -right-4 bg-yellow-500/10 w-24 h-24 rounded-full blur-xl opacity-70'></div>

						<div className='flex items-center justify-center mb-6'>
							<div className='relative'>
								<div className='absolute inset-0 bg-yellow-500/20 rounded-full blur-sm'></div>
								<div className='relative bg-gradient-to-br from-yellow-500 to-yellow-500/70 rounded-full p-4 shadow-lg'>
									<Star className='h-6 w-6 text-white' />
								</div>
							</div>
						</div>

						<h3 className='text-5xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-500/70'>
							{counts.rating}
							<span className='text-3xl'>/5</span>
						</h3>
						<p className='text-center text-lg font-medium text-gray-700 dark:text-gray-300'>
							Average Rating
						</p>
						<p className='mt-2 text-sm text-center text-gray-500 dark:text-gray-400'>
							From customer reviews
						</p>

						<div className='w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-6 overflow-hidden'>
							<div
								className='bg-gradient-to-r from-yellow-500 to-yellow-500/70 h-full rounded-full transition-all duration-1500 ease-out'
								style={{
									width: isVisible
										? `${(counts.rating / 5) * 100}%`
										: '0%',
								}}
							></div>
						</div>
					</div>
				</div>

				{/* Years Stat Card */}
				<div
					className={`relative group transition-all duration-1000 ease-out ${
						isVisible
							? 'translate-y-0 opacity-100'
							: 'translate-y-10 opacity-0'
					}`}
					style={{ transitionDelay: '300ms' }}
				>
					<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-sm transform group-hover:scale-105 transition-transform duration-500'></div>
					<div className='relative bg-background dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/10 h-full transform group-hover:-translate-y-1 transition-all duration-300'>
						<div className='absolute -top-4 -right-4 bg-primary/10 w-24 h-24 rounded-full blur-xl opacity-70'></div>

						<div className='flex items-center justify-center mb-6'>
							<div className='relative'>
								<div className='absolute inset-0 bg-primary/20 rounded-full blur-sm'></div>
								<div className='relative bg-gradient-to-br from-primary to-primary/70 rounded-full p-4 shadow-lg'>
									<Calendar className='h-6 w-6 text-white' />
								</div>
							</div>
						</div>

						<h3 className='text-5xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70'>
							{counts.years}
						</h3>
						<p className='text-center text-lg font-medium text-gray-700 dark:text-gray-300'>
							Years Active
						</p>
						<p className='mt-2 text-sm text-center text-gray-500 dark:text-gray-400'>
							Years in operation
						</p>

						<div className='w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-6 overflow-hidden'>
							<div
								className='bg-gradient-to-r from-primary to-primary/70 h-full rounded-full transition-all duration-1500 ease-out'
								style={{ width: isVisible ? '100%' : '0%' }}
							></div>
						</div>
					</div>
				</div>

				{/* Awards Stat Card */}
				<div
					className={`relative group transition-all duration-1000 ease-out ${
						isVisible
							? 'translate-y-0 opacity-100'
							: 'translate-y-10 opacity-0'
					}`}
					style={{ transitionDelay: '400ms' }}
				>
					<div className='absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 rounded-2xl blur-sm transform group-hover:scale-105 transition-transform duration-500'></div>
					<div className='relative bg-background dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-yellow-500/10 h-full transform group-hover:-translate-y-1 transition-all duration-300'>
						<div className='absolute -top-4 -right-4 bg-yellow-500/10 w-24 h-24 rounded-full blur-xl opacity-70'></div>

						<div className='flex items-center justify-center mb-6'>
							<div className='relative'>
								<div className='absolute inset-0 bg-yellow-500/20 rounded-full blur-sm'></div>
								<div className='relative bg-gradient-to-br from-yellow-500 to-yellow-500/70 rounded-full p-4 shadow-lg'>
									<Award className='h-6 w-6 text-white' />
								</div>
							</div>
						</div>

						<h3 className='text-5xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-500/70'>
							{counts.awards}
						</h3>
						<p className='text-center text-lg font-medium text-gray-700 dark:text-gray-300'>
							Awards Won
						</p>
						<p className='mt-2 text-sm text-center text-gray-500 dark:text-gray-400'>
							Industry recognitions
						</p>

						<div className='w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-6 overflow-hidden'>
							<div
								className='bg-gradient-to-r from-yellow-500 to-yellow-500/70 h-full rounded-full transition-all duration-1500 ease-out'
								style={{ width: isVisible ? '100%' : '0%' }}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
