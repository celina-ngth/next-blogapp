import { getArticle } from '@/app/api/posts/route'
import Text, { Tag } from '@/components/ui/Text'
import React from 'react'

export default async function Page({
	params,
}: {
	params: Promise<{ id: number }>
}) {
	const post = await getArticle((await params).id)

	return (
		<>
			<Text tag={Tag.H1}>{post.title}</Text>
			<Text tag={Tag.P}>{post.body}</Text>
		</>
	)
}
