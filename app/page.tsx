import { getArticles, getTags } from '@/app/api/articles/route'
import ArticleCard from '@/components/ArticleCard'
import Tags from '@/components/Tags'

export default async function Home() {
	const articles = await getArticles()
	const tags = await getTags()

	return (
		<div className="grid lg:grid-cols-3 lg:divide-x divide-neutral gap-8">
			{articles && (
				<div className="lg:col-span-2 flex flex-col divide-y divide-neutral">
					{articles.map((article) => (
						<ArticleCard {...article} key={article.id} />
					))}
				</div>
			)}

			<div className="w-full h-full lg:pl-8">
				{tags && <Tags title="Top topics" tags={tags.slice(0, 10)} />}
			</div>
		</div>
	)
}
