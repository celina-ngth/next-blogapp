import Banner from '@/components/ui/Banner'
import Text from '@/components/ui/Text'
import { getPosts } from '@/app/api/posts/route'
import PostCard from '@/components/PostCard'

export default async function Home() {
	const posts = await getPosts()

	return (
		<>
			<Banner title="Bienvenue sur MonBlog.">
				<Text>
					Dans cette page, vous retrouverez l&apos;ensemble des posts
					disponibles.
				</Text>
			</Banner>

			{posts && (
				<div className="grid grid-cols-3 gap-6">
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
