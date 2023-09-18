import PostList from '@/components/PostList';
import CustomBox from '@/components/Shared/CustomBox';
import NoResults from '@/components/Shared/NoResults';
import { client } from '@/utils/sanity.client';
import { postsByCategory } from '@/utils/sanity.queries';
import React from 'react'

type PageProps = {
    params: {
        category: string;
    }
}

async function Page({ params }: PageProps) {
    params.category = params.category.charAt(0).toUpperCase() + params.category.slice(1);

    const posts = await client.fetch(postsByCategory(params.category));
    if (posts.length === 0) {
        return <NoResults />
    }
    return (
        <CustomBox className='flex-1' title={`Posts der Kategorie ${params.category}`}>
            <PostList posts={posts} />
        </CustomBox>
    )
}

export default Page