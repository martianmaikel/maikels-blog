import urlFor from "@/utils/urlFor"
import Image from "next/image"
import PostHint from "./PostHint"

type PostListProps = {
    posts: Post[]
}

function PostList({ posts }: PostListProps) {
    const postCount = posts.length;
    return (
        <div className="flex flex-col space-y-8">
            {posts.map((post, index) => (
                <div key={post._id} className={`${(postCount > 1 && postCount - 1 != index) && 'border-b-2 pb-6'}`}>
                    <PostHint post={post} />
                </div>
            ))}
        </div>
    )
}

export default PostList