import React from 'react'
import Text, { Tag } from '@/components/ui/Text'
import Link from 'next/link'
import { Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import { ArticleType } from '@/app/api/articles/types'

const Article: React.FC<ArticleType> = ({
	id,
	title,
	body,
	likes,
	views,
	imageUrl,
}) => {
	return (
		<Link href={`/article/${id}`}>
			<div className="w-full flex gap-6 py-6">
				<div className="flex-1 flex flex-col gap-2">
					<Text tag={Tag.H2}>{title}</Text>

					<Text className="line-clamp-2">{body}</Text>

					<div className="flex justify-between text-sm text-secondary-light">
						<div className="flex items-center gap-2">
							<Heart className="h-4 w-4" /> {likes} likes
						</div>

						<div className="flex items-center gap-2">
							<Eye className="h-4 w-4" /> {views} views
						</div>
					</div>
				</div>

				<div className="max-w-[120px] lg:max-w-full">
					<Image
						src={imageUrl}
						alt={title}
						width={200}
						height={120}
						sizes="(max-width: 768px) 120px, (max-width: 1200px) 200px"
						className="rounded-sm"
					/>
				</div>
			</div>
		</Link>
	)
}

export default Article
