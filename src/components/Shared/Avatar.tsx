import React from 'react'
import Image from 'next/image'

type AvatarProps = {
    rounded?: boolean;
    size: number;
    src: string;
    alt: string;
    className?: string;
}

function Avatar({ rounded, size, src, alt, className }: AvatarProps) {
    return (
        <div className={`${className} ${rounded && 'rounded-full'} overflow-hidden`}>
            <Image
                src={src}
                alt={alt}
                width={size}
                height={size}
            />
        </div>
    )
}

export default Avatar