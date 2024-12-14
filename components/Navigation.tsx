import React from 'react'
import Text, { Tag } from '@/components/ui/Text'

const Navigation = async () => {
	return (
		<div className="fixed bg-secondary w-full shadow-md left-0 top-0">
			<div className="container mx-auto flex items-center justify-between my-2">
				<Text tag={Tag.H1}>MyBlog.</Text>
			</div>
		</div>
	)
}

export default Navigation
