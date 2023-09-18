import Image from 'next/image'
import Head from './head'
import { draftMode } from 'next/headers'
import { client } from '@/utils/sanity.client'
import { groq } from 'next-sanity'
import { allPosts, postsLimited } from '@/utils/sanity.queries'
import PostList from '@/components/PostList'
import AboutMeBox from '@/components/AboutMeBox'
import CustomBox from '@/components/Shared/CustomBox'

export default async function Home() {
  const posts = await client.fetch(postsLimited(3));

  return (

    <div className='flex flex-col'>
      <div className="flex flex-col md:flex-row md:space-x-12">
        <CustomBox className='flex-1' title='Latest Posts'>
          <PostList posts={posts} />
        </CustomBox>
        <CustomBox className='flex-1' title='Über mich'>
          <AboutMeBox />
        </CustomBox>
      </div>
    </div>
  )
}
