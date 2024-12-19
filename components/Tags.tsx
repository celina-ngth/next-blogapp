import React from 'react'
import Button, { Variant, Size } from './ui/Button'
import Text, { Tag } from '@/components/ui/Text'
import { TagType } from '@/app/api/articles/types'
import Link from 'next/link'

interface TagsProps {
	title: string
	tags: TagType[]
}

const Tags: React.FC<TagsProps> = ({ title, tags }) => {
	return (
		<>
			{tags?.length > 0 && (
				<>
					<Text tag={Tag.P} className="pb-4">
						{title}
					</Text>
					<div className="flex flex-wrap gap-2">
						{tags.map((tag) => (
							<Link href={`/`} key={tag.name}>
								<Button variant={Variant.PRIMARY_LIGHT} size={Size.SMALL}>
									{tag.name ?? tag}
								</Button>
							</Link>
						))}
					</div>
				</>
			)}
		</>
	)
}

export default Tags
