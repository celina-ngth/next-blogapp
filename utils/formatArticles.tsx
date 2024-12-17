import { ArticleApi } from '@/app/api/articles/types'
import { ArticleProps } from '@/components/ArticleCard'

export const formatArticle = (article: ArticleApi): ArticleProps => {
	return {
		id: article.id,
		imageUrl: 'https://via.assets.so/img.jpg?w=200&h=120',
		title: article.title,
		body: article.body,
		likes: article.reactions.likes,
		views: article.views,
		tags: article.tags,
	}
}

export const formatArticles = (data: ArticleApi[]): ArticleProps[] => {
	return data.map((article) => formatArticle(article))
}
