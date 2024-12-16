import { getArticles } from '@/app/api/posts/route'
import Article from '@/components/Article'

export default async function Home() {
	const articles = await getArticles()

	return (
		<>
			{articles && (
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{articles.map((post) => (
						<Article
							key={post.id}
							id={post.id}
							imageUrl={post.imageUrl}
							title={post.title}
							body={post.body}
							likes={post.likes}
							views={post.views}
						/>
					))}
				</div>
			)}
		</>
	)
}
