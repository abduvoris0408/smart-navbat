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

export default function RegisterPage() {
	const [isLoading, setIsLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const router = useRouter()

	const [formData, setFormData] = useState({
		name: '',
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
				'https://snavbatbackend.onrender.com/api/users/register',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						name: formData.name,
						email: formData.email,
						password: formData.password,
					}),
				}
			)

			const data = await res.json()
			console.log('Server response:', data)

			if (res.status !== 201) {
				console.error('Xatolik tafsilotlari:', data)
				throw new Error(
					data.message ||
						data.errors?.map((e: any) => e.msg).join(', ') ||
						'Registration failed'
				)
			}

			toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!")

			setTimeout(() => {
				router.push('/login')
			}, 1500)
		} catch (error) {
			console.error('Registration error:', error)
			toast.error(
				error instanceof Error
					? error.message
					: "Ro'yxatdan o'tishda xatolik yuz berdi"
			)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 px-4'>
			<Card className='w-full max-w-md'>
				<CardHeader className='space-y-1 text-center'>
					<CardTitle className='text-2xl font-bold'>
						Ro`yxatdan o`tish
					</CardTitle>
					<CardDescription>
						Smart Navbat tizimidan foydalanish uchun ro`yxatdan
						o`ting
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='space-y-2'>
							<label
								htmlFor='name'
								className='block text-sm font-medium'
							>
								To‘liq ismingiz
							</label>
							<input
								id='name'
								name='name'
								type='text'
								placeholder='Ismingizni kiriting'
								required
								value={formData.name}
								onChange={handleChange}
								className='w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>

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
							{isLoading ? 'Yuklanmoqda...' : "Ro'yxatdan o'tish"}
						</Button>
					</form>
				</CardContent>
				<CardFooter className='flex justify-center'>
					<p className='text-sm text-center'>
						Akkauntingiz bormi?{' '}
						<Link
							href='/login'
							className='font-medium text-blue-600 hover:underline dark:text-blue-500'
						>
							Kirish
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	)
}
