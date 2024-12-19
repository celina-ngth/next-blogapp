import { formatUser } from '@/utils/formatUsers'
import { notFound } from 'next/navigation'
import { UserType } from './types'

export async function getUser(id: number): Promise<UserType> {
	try {
		const response = await fetch(`${process.env.API_POSTS_URL}/users/${id}`)

		if (!response.ok) {
			throw new Error(`Failed to fetch user with id: ${id}`)
		}

		const data = await response.json()
		if (!data) {
			notFound()
		}

		return formatUser(data)
	} catch (error) {
		console.error('Error fetching user:', error)
		throw error
	}
}
