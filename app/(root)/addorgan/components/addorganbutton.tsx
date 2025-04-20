'use client'

import { useRouter } from 'next/navigation'

export default function AddOrganButton() {
	const router = useRouter()

	const handleClick = () => {
		router.push('/addorgan')
	}

	return (
		<button
			onClick={handleClick}
			className='bg-green-600 w-[100px] h-10 flex justify-center text-white px-6 py-2 rounded-md hover:bg-green-700 transition'
		>
			Addorgan
		</button>
	)
}
