import React from 'react'
import Text, { Tag } from '@/components/ui/Text'
import Link from 'next/link'
import { Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import { ArticleType } from '@/app/api/articles/types'
import { getUser } from '@/app/api/users/route'

const ArticleCard: React.FC<ArticleType> = async ({ ...props }) => {
	const author = await getUser(props.authorId)

	return (
		<Link href={`/article/${props.id}`}>
			<div className="w-full flex gap-6 py-6">
				<div className="flex-1 flex flex-col gap-2">
					<Text tag={Tag.P} className="text-sm">
						by {author?.username}
					</Text>
					<Text tag={Tag.H2}>{props.title}</Text>

					<Text className="line-clamp-2">{props.body}</Text>

					<div className="flex justify-between text-sm text-secondary-light">
						<div className="flex items-center gap-2">
							<Heart className="size-4" /> {props.likes} likes
						</div>

						<div className="flex items-center gap-2">
							<Eye className="size-4" /> {props.views} views
						</div>
					</div>
				</div>

				<div className="max-w-[120px] lg:max-w-full">
					<Image
						src={props.imageUrl}
						alt={props.title}
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

export default ArticleCard
