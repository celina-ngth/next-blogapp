import { getArticles } from '@/app/api/articles/route'
import Article from '@/components/ArticleCard'

export default async function Home() {
	const articles = await getArticles()

	return (
		<div className="grid lg:grid-cols-3 lg:divide-x divide-neutral gap-8">
			{articles && (
				<div className="lg:col-span-2 flex flex-col divide-y divide-neutral">
					{articles.map((article) => (
						<Article
							id={article.id}
							key={article.id}
							imageUrl={article.imageUrl}
							title={article.title}
							body={article.body}
							likes={article.likes}
							views={article.views}
						/>
					))}
				</div>
			)}

			<div className="w-full h-full lg:pl-8"></div>
		</div>
	)
}
