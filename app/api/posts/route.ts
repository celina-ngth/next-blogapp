import { PostProps } from '@/components/PostCard'
import { formatPosts, formatPost } from '@/utils/formatPosts'
import { notFound } from 'next/navigation'

export async function getPosts(): Promise<PostProps[]> {
	try {
		const response = await fetch(`${process.env.API_POSTS_URL}/posts`)
		const data = await response.json()

		if (!data || !data.posts) {
			notFound()
		}

		return formatPosts(data.posts)
	} catch (error) {
		console.error('Failed to fetch posts', error)
		throw new Error('Failed to fetch posts')
	}
}

export async function getPost(id: number): Promise<PostProps> {
	try {
		const response = await fetch(`${process.env.API_POSTS_URL}/posts/${id}`)

		if (!response.ok) {
			throw new Error(`Failed to fetch post with id: ${id}`)
		}

		const data = await response.json()
		if (!data) {
			notFound()
		}

		return formatPost(data)
	} catch (error) {
		console.error('Error fetching post:', error)
		throw error
	}
}
