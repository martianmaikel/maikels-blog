import React from 'react'
import Avatar from './Shared/Avatar'

type AuthorProps = {
    author: Author
    showImage?: boolean
}

function Author({ author, showImage = false }: AuthorProps) {
    return (
        <>
            {showImage && <Avatar src='/maikel-ai.jpg' size={30} alt='Autor Maikel Szymanski' />}
            <span className='text-sm font-medium'>
                von {author.name}
            </span>
        </>

    )
}

export default Author