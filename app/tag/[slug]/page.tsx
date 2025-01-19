import { getArticlesByTag } from '@/app/api/articles/route'
import ArticleCard from '@/components/ArticleCard'

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const articles = await getArticlesByTag((await params).slug)
	console.log(params)

	return (
		<div className="grid lg:grid-cols-3 lg:divide-x divide-neutral gap-8">
			{articles && (
				<div className="lg:col-span-2 flex flex-col divide-y divide-neutral">
					{articles.map((article) => (
						<ArticleCard {...article} key={article.id} />
					))}
				</div>
			)}
		</div>
	)
}
