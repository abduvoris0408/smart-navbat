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
			<Link href={`/appoint/med`}>
				<div className='relative bg-secondary rounded-md'>
					<Image
						width={650}
						height={335}
						src='https://www.toshvilstat.uz/images/yangiliklar2023/14022023.jpg'
						alt={'Blog rasmi'}
						className='px-2 md:px-7 rounded-md '
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
						Har bir mijozni ham vaqt ham sog`lik taraflama xursand
						qilamiz.Fursatni boy bermang o`zingiz haqingizda
						qayg`uring`
					</p>
				</Link>
			</div>
			<Link href={`/appoint/banks`}>
				<div className='relative bg-secondary rounded-md'>
					<Image
						width={650}
						height={335}
						src='https://img.freepik.com/free-vector/bank-finance-infographic-template_23-2149732179.jpg'
						alt={'Blog rasmi'}
						className='px-2 md:px-7 rounded-md '
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
						Bankda qulay xizmatdan foydalaning
					</h2>
					<p className='text-muted-foreground line-clamp-3'>
						Har bir mijozni ham vaqt ham moliyaviya taraflama
						xursand qilamiz.Ham vaqtingizni ham naqdingizni tejang
					</p>
				</Link>
			</div>
			<Link href={`/appoint/barbershops`}>
				<div className='relative bg-secondary rounded-md'>
					<Image
						width={650}
						height={335}
						src='https://www.love2laundry.nl/blog/wp-content/uploads/2024/07/Barbershops-1-1024x683.jpg'
						alt={'Blog rasmi'}
						className='px-2 md:px-7 rounded-md '
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
						Chiroyli ko‘rinish — tartibli navbatdan boshlanadi
					</h2>
					<p className='text-muted-foreground line-clamp-3'>
						Smartnavbat bilan sartaroshga borish yanada oson!
						Qayerda bo‘lishingizdan qat’i nazar, navbatni oldindan
						band qiling va vaqtingizni tejang.
					</p>
				</Link>
			</div>
			<Link href={`/appoint/autoservice`}>
				<div className='relative bg-secondary rounded-md'>
					<Image
						width={650}
						height={335}
						src='https://www.shutterstock.com/image-photo/mechanic-using-wrench-while-working-600nw-2184125681.jpg'
						alt={'Blog rasmi'}
						className='px-2 md:px-7 rounded-md '
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
						Avtotexnikxizmat endi siz xohlagan vaqtda
					</h2>
					<p className='text-muted-foreground line-clamp-3'>
						Smartnavbat bilan o‘zingizga qulay vaqtni belgilang.
						Mashinangizga texnik xizmat — samarali, tez va tartibli!
					</p>
				</Link>
			</div>
			<Link href={`/appoint/yagonadarcha`}>
				<div className='relative bg-secondary rounded-md'>
					<Image
						width={650}
						height={335}
						src='https://yuz.uz/file/news/66c16c1ce3da1576f8c141d6fad23662.jpg'
						alt={'Blog rasmi'}
						className='px-2 md:px-7 rounded-md '
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
						Davlat xizmatlari — Smartnavbat bilan yanada yaqin{' '}
					</h2>
					<p className='text-muted-foreground line-clamp-3'>
						Yaqin DXM filialini tanlang, xizmat turini belgilang va
						qulay vaqtni tanlab navbatga yoziling. Sizga mos vaqtda
						xizmat ko‘rsatiladi.
					</p>
				</Link>
			</div>
		</div>
	)
}

export default BlogCard
