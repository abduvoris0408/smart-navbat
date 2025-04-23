import Link from 'next/link'

const AuthBanners = () => {
	return (
		<div className='my-12 '>
			<h2 className='text-2xl md:text-3xl font-semibold text-center mb-8'>
				Hoziroq bizga qo`shiling
			</h2>

			<div className='grid md:grid-cols-2 gap-6'>
				{/* Registration Banner */}
				<div className='relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg p-6 text-white transform transition-all hover:scale-[1.02] hover:shadow-xl'>
					<div className='absolute -right-10 -top-10 w-32 h-32 bg-blue-800 opacity-20 rounded-full'></div>
					<div className='absolute -left-10 -bottom-10 w-24 h-24 bg-blue-800 opacity-20 rounded-full'></div>

					<h3 className='text-xl md:text-2xl font-bold mb-2'>
						Ro`yxatdan o`ting
					</h3>
					<p className='mb-6'>
						Ro`yxatdan o`tib navbatlarni boshqarish va
						mijozlaringizga qulaylik yarating
					</p>

					<ul className='mb-6 space-y-2'>
						<li className='flex items-center'>
							<svg
								className='w-5 h-5 mr-2'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M5 13l4 4L19 7'
								></path>
							</svg>
							Online navbat boshqaruvi
						</li>
						<li className='flex items-center'>
							<svg
								className='w-5 h-5 mr-2'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M5 13l4 4L19 7'
								></path>
							</svg>
							Mijozlar statistikasi
						</li>
						<li className='flex items-center'>
							<svg
								className='w-5 h-5 mr-2'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M5 13l4 4L19 7'
								></path>
							</svg>
							Bepul sinov muddati
						</li>
					</ul>

					<Link
						href='/register'
						className='inline-block bg-white text-blue-600 font-medium py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors'
					>
						Ro`yxatdan o`tish
					</Link>
				</div>

				{/* Login Banner */}
				<div className='relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-600 rounded-xl shadow-lg p-6 text-white transform transition-all hover:scale-[1.02] hover:shadow-xl'>
					<div className='absolute -right-10 -bottom-10 w-32 h-32 bg-gray-900 opacity-20 rounded-full'></div>

					<h3 className='text-xl md:text-2xl font-bold mb-2'>
						Kirish
					</h3>
					<p className='mb-6'>
						Hisobingizga kirib, navbatga yoziling va vaqtingizni
						tejang kutish o`rniga o`z ishlaringizni davom ettiring
					</p>

					<div className='flex items-center mb-6 space-x-2'>
						<div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center'>
							<svg
								className='w-6 h-6 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
								></path>
							</svg>
						</div>
						<span>Xavfsiz va qulay kirish</span>
					</div>

					<div className='flex space-x-4'>
						<Link
							href='/login'
							className='inline-block bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors'
						>
							Kirish
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
export default AuthBanners
