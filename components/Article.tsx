import React from 'react'
import Button, { Variant } from '@/components/ui/Button'
import Text, { Tag } from '@/components/ui/Text'
import Link from 'next/link'
import { Eye, Heart } from 'lucide-react'

export interface ArticleProps {
	id: number
	imageUrl: string
	title: string
	body: string
	likes: number
	views: number
	onClick?: () => void
}

const Article: React.FC<ArticleProps> = ({
	id,
	title,
	body,
	likes,
	views,
	imageUrl,
}) => {
	return (
		<Link href={`/article/${id}`}>
			<div className="w-full flex flex-col gap-4">
				<div
					className="w-full flex items-center bg-cover bg-center aspect-4/3 bg-medium-contrast text-white p-4 bg-opacity-20"
					style={{ backgroundImage: `url('${imageUrl}')` }}
				>
					<div className="w-full">
						<Text tag={Tag.H2} className="text-secondary">
							{title}
						</Text>
					</div>
				</div>

				<div className="grow">
					<div className="flex justify-between">
						<div className="flex items-center gap-2">
							<Heart className="h-4 w-4" /> {likes} likes
						</div>
						<div className="flex items-center gap-2">
							<Eye className="h-4 w-4" /> {views} views
						</div>
					</div>
					<Text className="line-clamp-2">{body}</Text>
				</div>

				<Button variant={Variant.SECONDARY}>Lire l&apos;article</Button>
			</div>
		</Link>
	)
}

export default Article
