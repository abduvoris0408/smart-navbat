// import { Button } from '@/components/ui/button'
// import { Separator } from '@/components/ui/separator'
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
// import { navLinks } from '@/constants'
// import { cn } from '@/lib/utils'
// import { Menu } from 'lucide-react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// function Mobile() {
// 	const pathname = usePathname()
// 	return (
// 		<Sheet>
// 			<SheetTrigger asChild className='flex md:hidden'>
// 				<Button size={'icon'} variant={'ghost'}>
// 					<Menu />
// 				</Button>
// 			</SheetTrigger>
// 			<SheetContent side={'left'}>
// 				<Link href={'/'}>
// 					<div>
// 						<svg
// 							width='260'
// 							height='30'
// 							viewBox='0 0 260 40'
// 							xmlns='http://www.w3.org/2000/svg'
// 						>
// 							<g transform='translate(0,5)'>
// 								{/* Icon Elements */}
// 								<rect
// 									x='10'
// 									y='10'
// 									width='10'
// 									height='25'
// 									rx='3'
// 									fill='#007bff'
// 									opacity='0.6'
// 								/>
// 								<rect
// 									x='25'
// 									y='5'
// 									width='10'
// 									height='30'
// 									rx='3'
// 									fill='#007bff'
// 									opacity='0.8'
// 								/>
// 								<rect
// 									x='40'
// 									y='0'
// 									width='10'
// 									height='35'
// 									rx='3'
// 									fill='#007bff'
// 								/>

// 								{/* Text */}
// 								<text
// 									x='60'
// 									y='28'
// 									fontFamily='Arial, sans-serif'
// 									fontSize='28'
// 									fill='#007bff'
// 									fontWeight='bold'
// 								>
// 									Smart Navbat
// 								</text>
// 							</g>
// 						</svg>
// 					</div>
// 				</Link>
// 				<Separator className='my-3' />
// 				<div className='gap-2 md:hidden flex flex-col'>
// 					{navLinks.map(nav => (
// 						<Link
// 							key={nav.route}
// 							href={nav.route}
// 							className={cn(
// 								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors flex items-center gap-2',
// 								pathname === nav.route &&
// 									'text-blue-400 bg-blue-400/20'
// 							)}
// 						>
// 							<nav.icon className='w-5 h-5' />
// 							{nav.name}
// 						</Link>
// 					))}
// 				</div>
// 			</SheetContent>
// 		</Sheet>
// 	)
// }

// export default Mobile
'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

function Mobile() {
	const [open, setOpen] = useState(false)
	const pathname = usePathname()

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild className='flex md:hidden'>
				<Button size={'icon'} variant={'ghost'}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<Link href='/' onClick={() => setOpen(false)}>
					<div>
						<svg
							width='260'
							height='30'
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
									fontSize='28'
									fill='#007bff'
									fontWeight='bold'
								>
									Smart Navbat
								</text>
							</g>
						</svg>
					</div>
				</Link>

				<Separator className='my-3' />

				<div className='gap-2 md:hidden flex flex-col'>
					{navLinks.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							onClick={() => setOpen(false)} // menyuni yopadi
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors flex items-center gap-2',
								pathname === nav.route &&
									'text-blue-400 bg-blue-400/20'
							)}
						>
							<nav.icon className='w-5 h-5' />
							{nav.name}
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
