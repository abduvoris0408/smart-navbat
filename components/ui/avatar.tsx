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
				'https://images2.minutemediacdn.com/image/upload/c_crop,w_3388,h_1905,x_0,y_196/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01jpx1f79829td9ymp65.jpg'
			}
			alt={alt}
			className='w-full h-full object-cover'
		/>
	)
}
