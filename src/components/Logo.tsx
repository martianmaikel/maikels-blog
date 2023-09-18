import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Logo() {
    return (
        <div className="flex items-center space-x-2 cursor-pointer hover:text-orange-600">
            <Link
                href={'/'}
            >
                <Image
                    className='rounded-full'
                    src={'/maikel-ai.jpg'}
                    alt={'Logo'}
                    width={50}
                    height={50}
                />
            </Link>
            <div className="flex flex-col text-2xl font-bold items-center justify-center">
                <span>MAIKEL</span>
                <span>BLOG</span>
            </div>
            {/* <h1 className=''>MAIKELs BLOG</h1> */}
        </div>

    )
}

export default Logo