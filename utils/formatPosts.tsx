import { PostsApi } from '@/app/api/posts/types'
import { PostProps } from '@/components/PostCard'

export const formatPost = (post: PostsApi): PostProps => {
	return {
		id: post.id,
		imageUrl: 'https://via.assets.so/img.jpg?w=400&h=250&tc=gray&bg=#cecece',
		title: post.title,
		body: post.body,
		likes: post.reactions.likes,
		views: post.views,
	}
}

export const formatPosts = (data: PostsApi[]): PostProps[] => {
	return data.map((post) => formatPost(post))
}
