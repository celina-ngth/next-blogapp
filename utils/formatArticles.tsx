import { ArticlesApi } from '@/app/api/posts/types'
import { ArticleProps } from '@/components/Article'

export const formatArticle = (post: ArticlesApi): ArticleProps => {
	return {
		id: post.id,
		imageUrl: 'https://via.assets.so/img.jpg?w=200&h=120',
		title: post.title,
		body: post.body,
		likes: post.reactions.likes,
		views: post.views,
	}
}

export const formatArticles = (data: ArticlesApi[]): ArticleProps[] => {
	return data.map((post) => formatArticle(post))
}
