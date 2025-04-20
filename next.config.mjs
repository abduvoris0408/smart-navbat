/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: ['date-fns'],
	},
	images: {
		domains: [
			'static.zarnews.uz',
			'cdn.pixabay.com',
			'www.toshvilstat.uz',
			'img.freepik.com',
			'www.love2laundry.nl',
			'www.shutterstock.com',
			'yuz.uz',
		],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'us-east-1-shared-usea1-02.graphassets.com',
			},
		],
	},
	env: {
		NEXT_PULIC_GRAPHCMS_ENDPOINT:
			'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clw6ckwe301w907uylql7xc69/master',
	},
	/* env: {
        NEXT_PUBLIC_TETELGRAM_BOT_API:
            "7407921426:AAEhxQy8mm-j38P8RSG7tLlPxF3KbhFoBLE",
    },
    env: {
        NEXT_PUBLIC_TETELGRAM_CHAT_ID: "6463141560",
    }, */
}

export default nextConfig
