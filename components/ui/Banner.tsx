import React from 'react'
import Text, { Tag } from '@/components/ui/Text'

interface BannerProps {
	title: string
	children: React.ReactNode
}

const Banner: React.FC<BannerProps> = ({ children, title }) => {
	return (
		<div className="bg-info-light px-6 py-4 rounded-xl text-center mb-6">
			<div className="uppercase">
				<Text tag={Tag.H2}>{title}</Text>
			</div>

			{children}
		</div>
	)
}

export default Banner
