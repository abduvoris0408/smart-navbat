import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'
const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	title: 'Smart Navbat',
	description:
		'Smart Navbat – bu banklar, shifoxonalar va boshqa xizmat ko‘rsatish muassasalarida navbatlarni aqlli boshqarish uchun ishlab chiqilgan zamonaviy tizim. Ushbu loyiha foydalanuvchilarga real vaqtda onlayn navbatga yozilish, navbat raqamlarini kuzatish va o‘z navbatini optimallashtirish imkonini beradi.',
	icons: { icon: '/favicon.svg' },
	keywords:
		'navbat tizimi, onlayn navbat, smart navbat, elektron navbat, navbat boshqarish, shifoxona navbati, bank navbati, davlat xizmatlari navbati, navbatga yozilish, onlayn ro‘yxat, aqlli navbat, smart queue system, queue management, appointment scheduling, navbat monitoring, real-time queue, xizmat ko‘rsatish tizimi, online appointment, raqamli navbat, tezkor xizmat',
	openGraph: {
		title: 'Smart navbat',
		description:
			'Smart Navbat – bu banklar, shifoxonalar va boshqa xizmat ko‘rsatish muassasalarida navbatlarni aqlli boshqarish uchun ishlab chiqilgan zamonaviy tizim. Ushbu loyiha foydalanuvchilarga real vaqtda onlayn navbatga yozilish, navbat raqamlarini kuzatish va o‘z navbatini optimallashtirish imkonini beradi.',
		type: 'website',
		locale: 'en_EN',
		countryName: 'Uzbekistan',
		siteName: 'Smart Queue',
		emails: 'info@smartqueue.ag',
	},
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
					storageKey='blog-theme'
				>
					<NextTopLoader />
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
