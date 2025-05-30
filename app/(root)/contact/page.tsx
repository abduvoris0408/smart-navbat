import ContactForm from '@/components/forms/contact'
import { Dot, Home, Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Contact us',
}

function ContactPage() {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>Bog`laning</span>
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
					<p className='text-muted-foreground'>Aloqa</p>
				</div>
			</div>

			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6'>
				<div className='flex flex-col'>
					<h1 className='text-4xl font-creteRound'>
						Smart Navbat bilan bog`laning{' '}
					</h1>
					<p className='mt-2 text-muted-foreground'>
						Biznesingiz yoki shaxsiy ehtiyojlaringiz uchun samarali
						navbat boshqaruv tizimi.
					</p>

					<div className='mt-12 flex items-center gap-3'>
						<Mail className='w-4 h-4' />
						<p className='text-sm'>
							asliddinkhodjamovoff@gmail.com
						</p>
					</div>
					<div className='flex items-center gap-3 mt-2'>
						<Phone className='w-4 h-4' />
						<p className='text-sm'>+998 938959070 </p>
					</div>
				</div>

				<div>
					<h1 className='text-4xl font-creteRound mb-2'>
						Contact form
					</h1>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default ContactPage
