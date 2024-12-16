import { getArticle } from '@/app/api/articles/route'
import Text, { Tag } from '@/components/ui/Text'
import React from 'react'

export default async function Page({
	params,
}: {
	params: Promise<{ id: number }>
}) {
	const article = await getArticle((await params).id)

	return (
		<>
			<Text tag={Tag.H1}>{article.title}</Text>
			<Text tag={Tag.P}>{article.body}</Text>
		</>
	)
}
