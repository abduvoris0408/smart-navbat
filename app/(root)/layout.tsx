// 'use client'

// import { Toaster } from '@/components/toaster'
// import { ChildProps } from '@/types'
// import { usePathname, useRouter } from 'next/navigation'
// import { useEffect } from 'react'
// import Footer from './_components/footer'
// import Navabr from './_components/navabr'

// function Layout({ children }: ChildProps) {
// 	const router = useRouter()
// 	const pathname = usePathname()

// 	const isAuthPage = pathname === '/login' || pathname === '/register'

// 	useEffect(() => {
// 		const isLoggedIn = localStorage.getItem('auth_token')

// 		if (isLoggedIn && !isAuthPage) {
// 			router.push('/')
// 		}

// 		if (!isLoggedIn && !isAuthPage) {
// 			router.push('/register')
// 		}
// 	}, [pathname, isAuthPage, router])

// 	if (isAuthPage) {
// 		return (
// 			<main>
// 				<div className='container'>{children}</div>
// 				<Toaster />
// 			</main>
// 		)
// 	}

// 	return (
// 		<main>
// 			<Navabr />
// 			<div className='container'>{children}</div>
// 			<Toaster />
// 			<Footer />
// 		</main>
// 	)
// }

// export default Layout

'use client'

import { Toaster } from '@/components/toaster'
import { ChildProps } from '@/types'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Footer from './_components/footer'
import Navabr from './_components/navabr'

function Layout({ children }: ChildProps) {
	const router = useRouter()
	const pathname = usePathname()

	const isAuthPage = pathname === '/login' || pathname === '/register'

	useEffect(() => {
		const isLoggedIn = localStorage.getItem('auth_token')

		// Agar foydalanuvchi login qilgan bo'lsa va auth sahifasida bo'lmasa
		if (isLoggedIn) {
			// Agar foydalanuvchi /login yoki /register sahifasida bo'lsa, ularni /ga yo'naltirish
			if (isAuthPage) {
				router.push('/')
			}
		} else {
			// Agar foydalanuvchi login qilmagan bo'lsa, uni /register sahifasiga yo'naltiramiz
			if (!isAuthPage) {
				router.push('/register')
			}
		}
	}, [pathname, isAuthPage, router])

	// Agar auth sahifasida bo'lsak (login/register)
	if (isAuthPage) {
		return (
			<main>
				<div className='container'>{children}</div>
				<Toaster />
			</main>
		)
	}

	// Login bo'lgan foydalanuvchilar uchun to'liq layout
	return (
		<main>
			<Navabr />
			<div className='container'>{children}</div>
			<Toaster />
			<Footer />
		</main>
	)
}

export default Layout
