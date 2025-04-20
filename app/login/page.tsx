// 'use client'

// import { Button } from '@/components/ui/button'
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardFooter,
// 	CardHeader,
// 	CardTitle,
// } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Eye, EyeOff } from 'lucide-react'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'
// import { toast } from 'sonner'

// export default function LoginPage() {
// 	const [isLoading, setIsLoading] = useState(false)
// 	const [showPassword, setShowPassword] = useState(false)
// 	const router = useRouter()

// 	const [formData, setFormData] = useState({
// 		email: '',
// 		password: '',
// 	})

// 	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		const { name, value } = e.target
// 		setFormData(prev => ({ ...prev, [name]: value }))
// 	}

// 	const handleSubmit = async (e: React.FormEvent) => {
// 		e.preventDefault()
// 		setIsLoading(true)

// 		try {
// 			const res = await fetch(
// 				'https://snavbatbackend.onrender.com/api/users/login',
// 				{
// 					method: 'POST',
// 					headers: { 'Content-Type': 'application/json' },
// 					body: JSON.stringify(formData),
// 				}
// 			)

// 			const data = await res.json()

// 			if (!res.ok) {
// 				throw new Error(data.message || 'Login failed')
// 			}

// 			localStorage.setItem('auth_token', data.token)

// 			toast.success('Muvaffaqiyatli kirdingiz!')
// 			router.push('/')
// 		} catch (error) {
// 			console.error('Login error:', error)
// 			toast.error(
// 				error instanceof Error
// 					? error.message
// 					: 'Kirishda xatolik yuz berdi'
// 			)
// 		} finally {
// 			setIsLoading(false)
// 		}
// 	}

// 	return (
// 		<div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 px-4'>
// 			<Card className='w-full max-w-md'>
// 				<CardHeader className='space-y-1 text-center'>
// 					<CardTitle className='text-2xl font-bold'>Kirish</CardTitle>
// 					<CardDescription>
// 						Smart Navbat tizimiga kirish
// 					</CardDescription>
// 				</CardHeader>
// 				<CardContent>
// 					<form onSubmit={handleSubmit} className='space-y-4'>
// 						<div className='space-y-2'>
// 							<Label htmlFor='email'>Email</Label>
// 							<Input
// 								id='email'
// 								name='email'
// 								type='email'
// 								placeholder='example@mail.com'
// 								required
// 								value={formData.email}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className='space-y-2'>
// 							<Label htmlFor='password'>Parol</Label>
// 							<div className='relative'>
// 								<Input
// 									id='password'
// 									name='password'
// 									type={showPassword ? 'text' : 'password'}
// 									placeholder='••••••••'
// 									required
// 									value={formData.password}
// 									onChange={handleChange}
// 								/>
// 								<button
// 									type='button'
// 									className='absolute right-3 top-1/2 -translate-y-1/2'
// 									onClick={() =>
// 										setShowPassword(!showPassword)
// 									}
// 								>
// 									{showPassword ? (
// 										<EyeOff size={18} />
// 									) : (
// 										<Eye size={18} />
// 									)}
// 								</button>
// 							</div>
// 						</div>
// 						<Button
// 							type='submit'
// 							className='w-full'
// 							disabled={isLoading}
// 						>
// 							{isLoading ? 'Yuklanmoqda...' : 'Kirish'}
// 						</Button>
// 					</form>
// 				</CardContent>
// 				<CardFooter className='flex flex-col space-y-2'>
// 					<p className='text-sm text-center'>
// 						Akkountingiz yo`qmi?{' '}
// 						<Link
// 							href='/register'
// 							className='font-medium text-blue-600 hover:underline dark:text-blue-500'
// 						>
// 							Ro`yxatdan o`tish
// 						</Link>
// 					</p>
// 					<Link
// 						href='/forgot-password'
// 						className='text-sm text-blue-600 hover:underline dark:text-blue-500'
// 					>
// 						Parolni unutdingizmi?
// 					</Link>
// 				</CardFooter>
// 			</Card>
// 		</div>
// 	)
// }

'use client'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function LoginPage() {
	const [isLoading, setIsLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const router = useRouter()

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			const res = await fetch(
				'https://snavbatbackend.onrender.com/api/users/login',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData),
				}
			)

			const data = await res.json()

			if (!res.ok) {
				throw new Error(data.message || 'Login failed')
			}

			localStorage.setItem('auth_token', data.token)

			toast.success('Muvaffaqiyatli kirdingiz!')
			router.push('/')
		} catch (error) {
			console.error('Login error:', error)
			toast.error(
				error instanceof Error
					? error.message
					: 'Kirishda xatolik yuz berdi'
			)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 px-4'>
			<Card className='w-full max-w-md'>
				<CardHeader className='space-y-1 text-center'>
					<CardTitle className='text-2xl font-bold'>Kirish</CardTitle>
					<CardDescription>
						Smart Navbat tizimiga kirish
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='space-y-2'>
							<label
								htmlFor='email'
								className='block text-sm font-medium'
							>
								Email
							</label>
							<input
								id='email'
								name='email'
								type='email'
								placeholder='example@mail.com'
								required
								value={formData.email}
								onChange={handleChange}
								className='w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
						<div className='space-y-2'>
							<label
								htmlFor='password'
								className='block text-sm font-medium'
							>
								Parol
							</label>
							<div className='relative'>
								<input
									id='password'
									name='password'
									type={showPassword ? 'text' : 'password'}
									placeholder='••••••••'
									required
									value={formData.password}
									onChange={handleChange}
									className='w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10'
								/>
								<button
									type='button'
									className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'
									onClick={() =>
										setShowPassword(!showPassword)
									}
								>
									{showPassword ? (
										<EyeOff size={18} />
									) : (
										<Eye size={18} />
									)}
								</button>
							</div>
						</div>
						<Button
							type='submit'
							className='w-full'
							disabled={isLoading}
						>
							{isLoading ? 'Yuklanmoqda...' : 'Kirish'}
						</Button>
					</form>
				</CardContent>
				<CardFooter className='flex flex-col space-y-2'>
					<p className='text-sm text-center'>
						Akkountingiz yo`qmi?{' '}
						<Link
							href='/register'
							className='font-medium text-blue-600 hover:underline dark:text-blue-500'
						>
							Ro`yxatdan o‘tish
						</Link>
					</p>
					<Link
						href='/forgot-password'
						className='text-sm text-blue-600 hover:underline dark:text-blue-500'
					>
						Parolni unutdingizmi?
					</Link>
				</CardFooter>
			</Card>
		</div>
	)
}
