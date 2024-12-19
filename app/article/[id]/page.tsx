import { getArticle } from '@/app/api/articles/route'
import Tags from '@/components/Tags'
import Text, { Tag } from '@/components/ui/Text'
import { Heart, Eye, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function Page({
	params,
}: {
	params: Promise<{ id: number }>
}) {
	const article = await getArticle((await params).id)

	return (
		<article className="gap-8 grid lg:grid-cols-5 items-start">
			<Link href={'/'}>
				<div className="flex items-center gap-2">
					<ArrowLeft className="h-4 w-4" /> Back
				</div>
			</Link>

			<div className="col-span-3 flex flex-col gap-6">
				<Text tag={Tag.H1} className="text-2xl">
					{article.title}
				</Text>

				<div className="flex justify-between text-sm text-secondary-light py-2 border-y border-y-neutral">
					<div className="flex items-center gap-2">
						<Heart className="h-4 w-4" /> {article.likes} likes
					</div>

					<div className="flex items-center gap-2">
						<Eye className="h-4 w-4" /> {article.views} views
					</div>
				</div>

				<Text tag={Tag.P}>{article.body}</Text>
			</div>

			<div>
				{article.tags?.length > 0 && <Tags title="Tags" tags={article.tags} />}
			</div>
		</article>
	)
}
