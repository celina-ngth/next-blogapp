import { formatArticles, formatArticle, formatTags } from '@/utils/formatArticles'
import { notFound } from 'next/navigation'
import { ArticleType, TagType } from './types'

export async function getArticles(): Promise<ArticleType[]> {
	try {
		const response = await fetch(`${process.env.API_POSTS_URL}/posts`)
		const data = await response.json()

		if (!data || !data.posts) {
			notFound()
		}

		return formatArticles(data.posts)
	} catch (error) {
		console.error('Failed to fetch articles', error)
		throw new Error('Failed to fetch articles')
	}
}

export async function getArticle(id: number): Promise<ArticleType> {
	try {
		const response = await fetch(`${process.env.API_POSTS_URL}/posts/${id}`)

		if (!response.ok) {
			throw new Error(`Failed to fetch article with id: ${id}`)
		}

		const data = await response.json()
		if (!data) {
			notFound()
		}

		return formatArticle(data)
	} catch (error) {
		console.error('Error fetching article:', error)
		throw error
	}
}

export async function getTags(): Promise<TagType[]> {
	try {
		const response = await fetch(`${process.env.API_POSTS_URL}/posts/tags`)
		const data = await response.json()

		if (!data) {
			notFound()
		}

		return formatTags(data)
	} catch (error) {
		console.error('Failed to fetch tags', error)
		throw new Error('Failed to fetch tags')
	}
}
