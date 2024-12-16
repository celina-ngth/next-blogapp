import { getArticles } from '@/app/api/posts/route'
import Article from '@/components/Article'

export default async function Home() {
	const articles = await getArticles()

	return (
		<div className="grid lg:grid-cols-3 lg:divide-x divide-neutral gap-8">
			{articles && (
				<div className="lg:col-span-2 flex flex-col divide-y divide-neutral">
					{articles.map((post) => (
						<Article
							id={post.id}
							key={post.id}
							imageUrl={post.imageUrl}
							title={post.title}
							body={post.body}
							likes={post.likes}
							views={post.views}
						/>
					))}
				</div>
			)}
			<div className="w-full h-full lg:pl-8"></div>
		</div>
	)
}
