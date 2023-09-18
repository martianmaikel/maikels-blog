import urlFor from '@/utils/urlFor'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomCodeBlock from './Shared/CustomCodeBlock'

export const RichTextComponents: any = {

    types: {
        image: (node: any) => {
            return (
                <div className='relative w-full h-96 m-10 mx-auto'>
                    <Image
                        alt={node.value.alt || 'blog image'}
                        src={urlFor(node.value.asset).url()}
                        className='object-contain'
                        fill={true}
                    />
                </div>
            );
        },
        code: (node: any) => {
            return (
                <CustomCodeBlock code={node.value} dark={true} />
            );
        }
    },
    marks: {
        link: ({ children, mark }: any) => {
            const { blank, href } = mark;
            return (
                <Link
                    href={href}
                    target={blank ? '_blank' : '_self'}
                    rel={blank ? 'noopener noreferrer' : ''}
                    className='text-orange-500 hover:text-orange-600'
                >
                    {children}
                </Link>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => {
            return <ul className='list-disc list-inside'>{children}</ul>;
        },
        number: ({ children }: any) => {
            return <ol className='list-decimal list-inside'>{children}</ol>;
        },
    },
    block: {
        h1: ({ children }: any) => {
            return <h1 className='text-3xl font-bold'>{children}</h1>;
        },
        h2: ({ children }: any) => {
            return <h2 className='text-2xl font-bold'>{children}</h2>;
        },
        h3: ({ children }: any) => {
            return <h3 className='text-xl font-bold'>{children}</h3>;
        },
        h4: ({ children }: any) => {
            return <h4 className='text-lg font-bold'>{children}</h4>;
        },
        h5: ({ children }: any) => {
            return <h5 className='text-base font-bold'>{children}</h5>;
        },
        blockquote: ({ children }: any) => {
            return (
                <blockquote className='border-l-4 border-orange-600 pl-4 opacity-80'>
                    {children}
                </blockquote>
            );
        },
    },

};
