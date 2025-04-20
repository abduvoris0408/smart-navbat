import * as React from 'react'

export function Avatar({
	className,
	children,
}: {
	className?: string
	children?: React.ReactNode
}) {
	return (
		<div className={`rounded-full overflow-hidden ${className}`}>
			{children}
		</div>
	)
}

export function AvatarImage({ src, alt }: { src: string; alt: string }) {
	return (
		<img
			src={
				'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png'
			}
			alt={alt}
			className='w-full h-full object-cover'
		/>
	)
}
