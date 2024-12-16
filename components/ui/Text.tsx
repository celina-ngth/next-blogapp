import React from 'react'

export enum Tag {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	P = 'p',
}

interface TextProps {
	children: string | React.ReactNode
	className?: string
	tag?: Tag
}

const Text: React.FC<TextProps> = ({ tag: Tag = 'p', className, children }) => {
	return (
		<>
			{React.createElement(
				Tag,
				{
					className: {
						h1: `text-xl font-bold font-serif ${className}`,
						h2: `text-lg font-bold ${className}`,
						h3: `text-lg font-bold uppercase ${className}`,
						p: `text-base ${className}`,
					}[Tag],
				},
				[children]
			)}
		</>
	)
}

export default Text
