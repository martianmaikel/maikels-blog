import { toLocalDEString } from '@/utils/date'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import Avatar from './Shared/Avatar'
import Author from './Author'

type PostProps = {
    post: Post
}

function PostHint({ post }: PostProps) {
    const datePublished = toLocalDEString(post._createdAt);
    const dateUpdated = toLocalDEString(post._updatedAt);
    const postLink = `/posts/${post.category.title.toLocaleLowerCase()}/${post.slug.current}`
    return (
        <div className='flex flex-col'>
            <h2 className='href text-xl'>
                <Link href={postLink} >
                    {post.title}
                </Link>
            </h2>
            <div className='text-slate-600 dark:text-slate-300 flex flex-col mt-2 space-y-2'>
                <div className='flex flex-row space-x-2 items-center'>
                    <Author author={post.author} showImage={false} />
                </div>
                <div className='text-xs flex flex-col'>
                    <span>Erstellt am: <span className='font-medium'>{datePublished}</span></span>
                    <span>Zuletzt bearbeitet: <span className='font-medium'>{dateUpdated}</span></span>
                </div>
            </div>
            <div className='my-2'>
                <span className='p-1 bg-orange-300 text-orange-700 rounded-sm text-xs cursor-default'>{post.category.title}</span>
            </div>
            <div className='text-md'>
                <p className='mb-2 text-justify'>
                    {post.description}
                </p>
                <Link href={postLink} className='href text-sm text-orange-500'>Mehr anzeigen</Link>
            </div>
        </div>
    )
}

export default PostHint