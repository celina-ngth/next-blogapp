import { getPosts } from '@/app/api/posts/route'
import PostCard from '@/components/PostCard'

export default async function Home() {
	const posts = await getPosts()

	return (
		<>
			{posts && (
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{posts.map((post) => (
						<PostCard
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
