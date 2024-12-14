import { PostsApi } from '@/app/api/posts/types'
import { PostCardProps } from '@/components/PostCard'

const formatPosts = (data: PostsApi[]): PostCardProps[] => {
	return data.map((post) => {
		return {
			id: post.id,
			imageUrl: 'https://via.assets.so/img.jpg?w=400&h=250&tc=gray&bg=#cecece',
			title: post.title,
			body: post.body,
			likes: post.reactions.likes,
			views: post.views,
		}
	})
}

export default formatPosts
