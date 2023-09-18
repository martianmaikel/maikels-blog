import React from 'react'
import { RichTextComponents } from './RichTextComponents'
import { PortableText } from '@portabletext/react'

type PostBodyProps = {
    body: BlockContent[]
}

function PostBody({ body }: PostBodyProps) {
    return (
        <>
            <PortableText value={body} components={RichTextComponents} />
        </>
    )
}

export default PostBody