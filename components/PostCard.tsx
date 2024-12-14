import React from 'react'
import Button, { Variant } from '@/components/ui/Button'
import Text, { Tag } from '@/components/ui/Text'

export interface PostCardProps {
	id: number
	imageUrl: string
	title: string
	body: string
	likes: number
	views: number
	onClick?: () => void
}

const PostCard: React.FC<PostCardProps> = ({
	title,
	body,
	imageUrl,
	onClick,
}) => {
	return (
		<div className="w-full text-center flex flex-col gap-4">
			<div
				className="w-full flex items-center bg-cover bg-center aspect-4/3 bg-medium-contrast text-white"
				style={{ backgroundImage: `url('${imageUrl}')` }}
			>
				<div className="w-full font-serif">
					<Text tag={Tag.H2} className="text-secondary">
						{title}
					</Text>
				</div>
			</div>

			<div className="grow">
				<Text className="line-clamp-2">{body}</Text>
			</div>

			<div>
				<Button variant={Variant.SECONDARY} onClick={onClick}>
					Lire l&apos;article
				</Button>
			</div>
		</div>
	)
}

export default PostCard
