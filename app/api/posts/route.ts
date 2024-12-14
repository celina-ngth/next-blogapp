import { PostCardProps } from '@/components/PostCard'
import formatPosts from '@/utils/formatPosts'
import { notFound } from 'next/navigation'

export async function getPosts(): Promise<PostCardProps[]> {
	const response = await fetch(`${process.env.API_POSTS_URL}/posts`)

	const data = await response.json()
	if (!data) notFound()

	return formatPosts(data?.posts)
}
