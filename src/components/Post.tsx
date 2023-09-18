import { toLocalDEString } from '@/utils/date';
import React from 'react'
import Author from './Author';
import PostBody from './PostBody';

type PostProps = {
    post: Post
}

function Post({ post }: PostProps) {
    const datePublished = toLocalDEString(post._createdAt);
    const dateUpdated = toLocalDEString(post._updatedAt);
    return (
        <article>
            <div className='container max-w-[900px] mx-auto p-4 md:p-0'>
                <div className="flex flex-col gap-y-4 border-b pb-6">
                    <h1 className='text-orange-600 text-3xl'>{post.title}</h1>
                    <Author author={post.author} showImage={false} />
                    <div className='text-xs grid grid-cols-1 md:grid-cols-2 w-full mx-auto'>
                        <span>Erstellt am: <span className='font-medium'>{datePublished}</span></span>
                        <span>Zuletzt bearbeitet: <span className='font-medium'>{dateUpdated}</span></span>
                    </div>

                </div>
                <div className="flex flex-col mt-6 gap-y-6">
                    <p className='font-bold'>
                        {post.excerpt}
                    </p>
                    <PostBody body={post.body} />
                </div>
            </div>
        </article>

    )
}

export default Post