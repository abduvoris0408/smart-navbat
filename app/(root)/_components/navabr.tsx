'use client'

import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { User2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import GlobalSearch from './global-search'
import Mobile from './mobile'

function Navabr() {
	const pathname = usePathname()
	const router = useRouter()

	return (
		<div className='h-[10vh] backdrop-blur-sm bg-white/5 border-b fixed z-40 inset-0  '>
			<div className='container  mx-auto h-[10vh] w-full flex items-center justify-between'>
				<Link href={'/'}>
					<div className='max-w-[150px]'>
						<svg
							className='w-32 h-8 md:w-52 md:h-10 lg:w-60 lg:h-12'
							viewBox='0 0 260 40'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g transform='translate(0,5)'>
								<rect
									x='10'
									y='10'
									width='10'
									height='25'
									rx='3'
									fill='#007bff'
									opacity='0.6'
								/>
								<rect
									x='25'
									y='5'
									width='10'
									height='30'
									rx='3'
									fill='#007bff'
									opacity='0.8'
								/>
								<rect
									x='40'
									y='0'
									width='10'
									height='35'
									rx='3'
									fill='#007bff'
								/>
								<text
									x='60'
									y='28'
									fontFamily='Arial, sans-serif'
									fontSize='26'
									className='md:text-lg lg:text-xl'
									fill='#007bff'
									fontWeight='bold'
								>
									Smart Navbat
								</text>
							</g>
						</svg>
					</div>
				</Link>

				<div className='gap-2 hidden md:flex'>
					{navLinks.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
								pathname === nav.route && 'text-blue-400'
							)}
						>
							{nav.name}
						</Link>
					))}
				</div>
				<div className='flex items-center gap-1'>
					<button
						onClick={() => router.push('/profile')}
						className=''
					>
						<User2 className='text-sm' />
					</button>

					<GlobalSearch />
					<ModeToggle />
					<Mobile />
				</div>
			</div>
		</div>
	)
}

export default Navabr
