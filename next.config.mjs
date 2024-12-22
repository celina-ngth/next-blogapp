/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dummyjson.com',
				pathname: '/icon/**',
			},
			{
				protocol: 'https',
				hostname: 'via.assets.so',
			},
		],
	},
}

export default nextConfig
