import { useEffect, useState } from 'react'
interface SplashScreenProps {
	finishLoading: () => void // finishLoading funksiyasining tipi
}
const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
	const [isMounted, setIsMounted] = useState(false)

	// This effect handles the mounting animation
	useEffect(() => {
		setIsMounted(true)

		const timeout = setTimeout(() => {
			finishLoading()
		}, 2500)

		return () => clearTimeout(timeout)
	}, [finishLoading])

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
				isMounted ? 'opacity-100' : 'opacity-0'
			}`}
			style={{
				visibility: isMounted ? 'visible' : 'hidden',
				transition:
					'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out',
			}}
		>
			<div className='flex flex-col items-center'>
				{/* Heart Logo with Pulsating Animation */}
				<div className='w-32 h-32  relative'>
					<svg
						viewBox='0 0 100 100'
						xmlns='http://www.w3.org/2000/svg'
						className='heart-beat'
					>
						{/* Smart Navbat text */}
						<text
							x='50'
							y='110'
							textAnchor='middle'
							fontFamily='Arial, sans-serif'
							fontSize='12'
							fontWeight='bold'
							fill='#007bff'
						>
							Smart Navbat
						</text>
					</svg>

					{/* Sound wave bars */}
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
						<div className='flex items-end justify-center space-x-1'>
							<div className='w-1 h-3 bg-blue-400 opacity-80 animate-soundwave1'></div>
							<div className='w-1 h-6 bg-blue-500 opacity-90 animate-soundwave2'></div>
							<div className='w-1 h-8 bg-blue-600 animate-soundwave3'></div>
							<div className='w-1 h-6 bg-blue-500 opacity-90 animate-soundwave2'></div>
							<div className='w-1 h-3 bg-blue-400 opacity-80 animate-soundwave1'></div>
						</div>
					</div>
				</div>

				{/* Loading text */}
				<h1 className='text-white text-2xl font-bold'>Smart Navbat</h1>

				{/* Loading spinner */}
				<div className='mt-8'>
					<div className='w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
				</div>
			</div>

			{/* Add the necessary CSS animations */}
			<style jsx>{`
				@keyframes heartbeat {
					0% {
						transform: scale(1);
					}
					14% {
						transform: scale(1.1);
					}
					28% {
						transform: scale(1);
					}
					42% {
						transform: scale(1.2);
					}
					70% {
						transform: scale(1);
					}
					100% {
						transform: scale(1);
					}
				}

				.heart-beat {
					animation: heartbeat 1.5s infinite;
					transform-origin: center;
				}

				@keyframes soundwave1 {
					0%,
					100% {
						height: 3px;
					}
					50% {
						height: 10px;
					}
				}

				@keyframes soundwave2 {
					0%,
					100% {
						height: 6px;
					}
					50% {
						height: 15px;
					}
				}

				@keyframes soundwave3 {
					0%,
					100% {
						height: 8px;
					}
					50% {
						height: 20px;
					}
				}

				.animate-soundwave1 {
					animation: soundwave1 1s ease-in-out infinite;
				}

				.animate-soundwave2 {
					animation: soundwave2 1s ease-in-out infinite;
					animation-delay: 0.2s;
				}

				.animate-soundwave3 {
					animation: soundwave3 1s ease-in-out infinite;
					animation-delay: 0.4s;
				}
			`}</style>
		</div>
	)
}

export default SplashScreen
