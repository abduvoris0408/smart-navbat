'use client'
import Image from 'next/image'

const features = [
	{
		id: 1,
		title: 'Navbat olish',
		description: 'Mijozlar oson va tez navbatga yozilishadi',
		icon: (
			<svg
				className='w-6 h-6'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M12 6v6m0 0v6m0-6h6m-6 0H6'
				/>
			</svg>
		),
	},
	{
		id: 2,
		title: 'Bildirishnomalar',
		description: 'Navbat yaqinlashganda bildirishnoma olish',
		icon: (
			<svg
				className='w-6 h-6'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M15 17h5l-1.405-1.405A2 2 0 0118 14.158V11a6 6 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
				/>
			</svg>
		),
	},
	{
		id: 3,
		title: 'Kutish vaqti',
		description: 'Aniq kutish vaqtini bilish',
		icon: (
			<svg
				className='w-6 h-6'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
				/>
			</svg>
		),
	},
	{
		id: 4,
		title: 'Tarix',
		description: "Avvalgi navbatlar tarixini ko'rish",
		icon: (
			<svg
				className='w-6 h-6'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
				/>
			</svg>
		),
	},
]

const MobileAppPreview = () => {
	return (
		<div className=' py-16 transition-colors duration-500'>
			<div className='  mx-auto '>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					{/* LEFT SIDE */}
					<div>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
							Smart Navbat mobil ilova - tez kunda
						</h2>
						<p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
							Mijozlaringiz uchun qulaylik: ilova orqali navbatga
							yozilish, xabarnomalar va boshqa imkoniyatlar.
						</p>

						<div className='grid md:grid-cols-2 gap-6'>
							{features.map(f => (
								<div key={f.id} className='flex'>
									<div className='flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white rounded-full flex items-center justify-center mr-3'>
										{f.icon}
									</div>
									<div>
										<h3 className='font-semibold text-gray-800 dark:text-white mb-1'>
											{f.title}
										</h3>
										<p className='text-sm text-gray-600 dark:text-gray-400'>
											{f.description}
										</p>
									</div>
								</div>
							))}
						</div>

						<div className=' flex items-center'>
							<a href='#' className='block w-36'>
								<Image
									src='/app-store-badge.png'
									alt='App Store'
									width={150}
									height={44}
								/>
							</a>
							<a href='#' className='block w-36'>
								<Image
									src='/google-play-badge.svg'
									alt='Google Play'
									width={150}
									height={44}
								/>
							</a>
						</div>
					</div>

					{/* RIGHT SIDE - GIF PREVIEW */}
					<div className='relative mx-auto max-w-xs'>
						<div className='bg-black dark:bg-white rounded-[3rem] p-3 shadow-2xl'>
							<div className='rounded-[2.5rem] overflow-hidden bg-black dark:bg-white'>
								<video
									autoPlay
									loop
									src='/video.mp4'
									width={320}
									height={650}
									className='rounded-b-[2.5rem] w-full h-auto'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MobileAppPreview
