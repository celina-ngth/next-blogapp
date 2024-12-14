import { PostProps } from '@/components/PostCard'
import { formatPosts, formatPost } from '@/utils/formatPosts'
import { notFound } from 'next/navigation'

export async function getPosts(): Promise<PostProps[]> {
	const response = await fetch(`${process.env.API_POSTS_URL}/posts`)

	const data = await response.json()
	if (!data) notFound()

	return formatPosts(data?.posts)
}

export async function getPost(id: number): Promise<PostProps> {
	const response = await fetch(`${process.env.API_POSTS_URL}/posts/${id}`)

	const data = await response.json()
	if (!data) notFound()

	return formatPost(data)
}
