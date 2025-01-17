import {
	ArticleApi,
	ArticleType,
	TagApi,
	TagType,
} from '@/app/api/articles/types'

export const formatArticle = (article: ArticleApi): ArticleType => {
	return {
		id: article.id,
		imageUrl: 'https://dummyjson.com/image/200x120',
		title: article.title,
		body: article.body,
		likes: article.reactions.likes,
		views: article.views,
		authorId: article.userId,
	}
}

export const formatArticles = (data: ArticleApi[]): ArticleType[] => {
	return data.map((article) => formatArticle(article))
}

export const formatTags = (data: TagApi[]): TagType[] => {
	return data.map((article) => ({
		slug: article.slug,
		name: article.name,
		url: article.url,
	}))
}
