import BlogCard from '@/components/cards/blog'

import { getBlogs } from '@/service/blog.service'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'
import AddOrganButton from '../addorgan/components/addorganbutton'

async function BlogsPage() {
	const blogs = await getBlogs()
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Muassasalar</span>
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
					<p className='text-muted-foreground'>Muassasalar</p>
				</div>
				<div className='py-2'>
					{/* <AddOrganButton /> */}
				</div>
			</div>

			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical />
				))}
			</div>
		</div>
	)
}

export default BlogsPage
