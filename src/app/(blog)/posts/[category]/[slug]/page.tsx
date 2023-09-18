import Post from '@/components/Post';
import NoResults from '@/components/Shared/NoResults';
import { client } from '@/utils/sanity.client';
import { postBySlug } from '@/utils/sanity.queries';
import React from 'react'

type PageProps = {
    params: {
        category: string;
        slug: string;
    }
}

async function Page({ params: { category, slug } }: PageProps) {

    const post: Post = await client.fetch(postBySlug(slug));

    return (
        <Post post={post} />
    )
}

export default Page