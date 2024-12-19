import { UserApi, UserType } from '@/app/api/users/types'

export const formatUser = (user: UserApi): UserType => {
	return {
		id: user.id,
		firstname: user.firstName,
		lastname: user.lastName,
		email: user.email,
		username: user.username,
	}
}
