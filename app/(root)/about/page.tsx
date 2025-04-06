import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Biz haqimizda',
}

async function AboutPage() {

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Haqimizda</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Asosiy
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Haqimizda</p>
				</div>
			</div>
			<h1 className='text-center text-4xl font-creteRound'>
				Bizning jamoamiz, <br /> Sizga yordam berishga doimo tayyor.!
			</h1>

			<div className='grid grid-cols-4 gap-4 min-h-96 mt-6'>
				<div className='col-span-2 max-md:col-span-4 relative h-80'>
					<Image
						src={'/about/01.jpg'}
						alt='about'
						fill
						className='rounded-md object-cover'
					/>
				</div>
				<div className='h-80 self-end relative max-md:col-span-2 max-md:h-72'>
					<Image
						src={'/about/00.jpg'}
						alt='about'
						fill
						className='rounded-md object-cover'
					/>
				</div>
				<div className='relative h-80 max-md:col-span-2 max-md:mb-8 max-md:h-72'>
					<Image
						src={'/about/02.jpg'}
						alt='about'
						fill
						className='rounded-md object-cover'
					/>
				</div>
			</div>

			<div className='max-w-6xl mx-auto mt-12 flex flex-col text-center space-y-4 text-muted-foreground'>
				<p>
					Smart Navbat – bu navbatga yozilish va kuzatishning
					zamonaviy usuli. Endi uzoq navbatlarda turishingizga hojat
					yo‘q!Biznesingiz yoki shaxsiy ehtiyojlaringiz uchun samarali
					navbat boshqaruv tizimi.
				</p>
				<p>
					Tez va oson xizmat olish imkoniyati.Navbatni real vaqtda
					kuzatish. O‘z vaqtida xabar berish tizimi. Uzoq kutishlarga
					barham bering! Foydalanuvchilarga qulay interfeys.
					Navbatlarni avtomatik boshqarish. Smart Navbat bilan
					vaqtingizni tejang! 🚀 Smart Navbat platformasi tez kunda
					faoliyatini boshlaydi! 🚀
				</p>
			</div>

		
		</div>
	)
}

export default AboutPage
