// import BgArrow from '@/components/shared/bg-arrow'

// import { getBlogs } from '@/service/blog.service'
// import StatisticsComponent from '../_components/statistic-component'

// async function HomePage() {
// 	const blogs = await getBlogs()
// 	return (
// 		<div className='container  max-w-6xl mx-auto'>
// 			<div className='relative min-h-[45vh] flex items-center justify-center'>
// 				<h1 className='text-3xl md:text-4xl lg:text-5xl font-creteRound text-center max-w-2xl'>
// 					Smart Navbat – Tez va Oson Navbat Tizimi
// 				</h1>
// 				<BgArrow />
// 			</div>
// 			<div>
// 				<StatisticsComponent />
// 			</div>
// 		</div>
// 	)
// }

// export default HomePage

import BgArrow from '@/components/shared/bg-arrow'
import { getBlogs } from '@/service/blog.service'
import AuthBanners from '../_components/authbanner'
import MobileAppPreview from '../_components/MobileAppPreview'
import StatisticsComponent from '../_components/statistic-component'

async function HomePage() {
	const blogs = await getBlogs()

	return (
		<div className='container max-w-6xl mx-auto'>
			<div className='relative min-h-[45vh] flex items-center justify-center'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-creteRound text-center max-w-2xl'>
					Smart Navbat – Tez va Oson Navbat Tizimi
				</h1>
				<BgArrow />
			</div>

			{/* Added the new AuthBanners component here */}

			<div>
				<StatisticsComponent />
				<MobileAppPreview />
				<AuthBanners />
			</div>
		</div>
	)
}

export default HomePage
