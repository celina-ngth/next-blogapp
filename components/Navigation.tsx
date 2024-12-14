import React from 'react'
import Text, { Tag } from '@/components/ui/Text'
import Link from 'next/link'

const Navigation = async () => {
	return (
		<div className="fixed bg-secondary w-full shadow-md left-0 top-0">
			<div className="container mx-auto flex items-center justify-between my-2">
				<Link href="/">
					<Text tag={Tag.H1}>MyBlog.</Text>
				</Link>
			</div>
		</div>
	)
}

export default Navigation
