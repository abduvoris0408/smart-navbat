import { Toaster } from '@/components/toaster'
import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navabr from './_components/navabr'

function layout({ children }: ChildProps) {
	return (
		<main>
			<Navabr />
			<div className='container'>{children}</div>
			<Toaster />
			<Footer />
		</main>
	)
}

export default layout
