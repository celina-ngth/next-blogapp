import { getArticle } from '@/app/api/articles/route'
import { getUser } from '@/app/api/users/route'
import Tags from '@/components/Tags'
import Text, { Tag } from '@/components/ui/Text'
import { Heart, Eye, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Page({
	params,
}: {
	params: Promise<{ id: number }>
}) {
	const article = await getArticle((await params).id)
	const author = await getUser(article.authorId)

	return (
		<article className="gap-8 grid lg:grid-cols-5 items-start">
			<Link href={'/'}>
				<div className="flex items-center gap-2">
					<ArrowLeft className="size-4" /> Back
				</div>
			</Link>

			<div className="col-span-3 flex flex-col gap-6">
				<Text tag={Tag.H1} className="text-2xl">
					{article.title}
				</Text>

				<div className="flex items-center gap-4">
					<Image
						className="inline-block size-6 rounded-full ring-2 ring-white"
						width={32}
						height={32}
						src={author.image}
						alt={author.username}
					/>

					<Text tag={Tag.P}>by {author.username}</Text>
				</div>

				<div className="flex justify-between text-sm text-secondary-light py-2 border-y border-y-neutral">
					<div className="flex items-center gap-2">
						<Heart className="size-4" /> {article.likes} likes
					</div>

					<div className="flex items-center gap-2">
						<Eye className="size-4" /> {article.views} views
					</div>
				</div>

				<Text tag={Tag.P}>{article.body}</Text>
			</div>

			<div>
				{article.tags && article.tags?.length > 0 && (
					<Tags title="Tags" tags={article.tags} />
				)}
			</div>
		</article>
	)
}
