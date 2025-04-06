'use client'
import { cn } from '@/lib/utils'
import { IBlog } from '@/types'
import { CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Props extends IBlog {
	isVertical?: boolean
}

function BlogCard(blog: Props) {
	const [currentTime, setCurrentTime] = useState<string | null>(null)

	useEffect(() => {
		const updateClock = () => {
			setCurrentTime(
				new Date().toLocaleTimeString('uz-UZ', {
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
				})
			)
		}

		updateClock() // Dastlabki vaqtni to‘g‘ri chiqarish
		const interval = setInterval(updateClock, 1000)

		return () => clearInterval(interval)
	}, [])

	if (!currentTime) return null

	return (
		<div
			className={cn(
				'grid gap-10 group',
				blog.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
			)}
		>
			<Link href={`/appoint`}>
				<div className='relative bg-secondary rounded-md'>
					<Image
						width={650}
						height={335}
						src='https://static.zarnews.uz/crop/6/4/720__80_6418ce851d440494173d8d05b691ed38.jpg?img=self&v=1632201400'
						alt={'Blog rasmi'}
						className='px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
					/>
				</div>
			</Link>
			<div className='flex flex-col space-y-4'>
				<Link href={`/blogs`} className='flex flex-col space-y-4'>
					{/* Time info */}
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='w-5 h-5' />
							<p>{currentTime}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<Clock className='w-5 h-5' />
							<p>vaqtni belgilang</p>
						</div>
					</div>

					{/* Title */}
					<h2 className='text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors'>
						Shifokor qabuliga yoziling
					</h2>
					<p className='text-muted-foreground line-clamp-3'>
						Har bir mijozni ham vaqt ham sog`lik taraflama hursand
						qilamiz.Fursatni boy bermang o`zingiz haqingizda
						qayg`uring`
					</p>
				</Link>
			</div>
			<Link href={`/appoint`}>
				<div className='relative bg-secondary rounded-md'>
					<Image
						width={650}
						height={335}
						src='https://static.zarnews.uz/crop/8/d/720__80_8d2a1090533a2507f48448979438beea.jpeg?img=self&v=1737613228'
						alt={'Blog rasmi'}
						className='px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
					/>
				</div>
			</Link>
			<div className='flex flex-col space-y-4'>
				<Link href={`/blogs`} className='flex flex-col space-y-4'>
					{/* Time info */}
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='w-5 h-5' />
							<p>{currentTime}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<Clock className='w-5 h-5' />
							<p>vaqtni belgilang</p>
						</div>
					</div>

					{/* Title */}
					<h2 className='text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors'>
						Bankda qulay hizmatdan foydalaning
					</h2>
					<p className='text-muted-foreground line-clamp-3'>
						Har bir mijozni ham vaqt ham moliyaviya taraflama
						hursand qilamiz.Fursatni boy bermang o`zingiz haqingizda
						qayg`uring
					</p>
				</Link>
			</div>
		</div>
	)
}

export default BlogCard
