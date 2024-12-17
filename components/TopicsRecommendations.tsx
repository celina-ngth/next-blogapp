import React from 'react'
import Button, { Variant, Size } from './ui/Button'
import Text, { Tag } from '@/components/ui/Text'

interface TopicsRecommendationsProps {
	title: string
	tags: string[]
}

const TopicsRecommendations: React.FC<TopicsRecommendationsProps> = ({
	title,
	tags,
}) => {
	return (
		<>
			{tags?.length > 0 && (
				<>
					<Text tag={Tag.P} className="pb-4">
						{title}
					</Text>
					<div className="flex flex-wrap gap-2">
						{tags.map((tag) => (
							<Button
								key={tag}
								variant={Variant.PRIMARY_LIGHT}
								size={Size.SMALL}
							>
								{tag}
							</Button>
						))}
					</div>
				</>
			)}
		</>
	)
}

export default TopicsRecommendations
