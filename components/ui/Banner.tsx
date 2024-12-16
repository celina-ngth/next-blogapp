import React from 'react'
import Text, { Tag } from '@/components/ui/Text'

interface BannerProps {
	title: string
	children?: React.ReactNode
}

const Banner: React.FC<BannerProps> = ({ children, title }) => {
	return (
		<div className=" bg-neutral px-6 py-3 text-center top-[61px] mb-6 absolute w-full">
			<Text tag={Tag.P} className="text-sm">
				{title}
			</Text>
			{children}
		</div>
	)
}

export default Banner
