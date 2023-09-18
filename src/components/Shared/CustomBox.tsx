import React from 'react'

type CustomBoxProps = {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

function CustomBox({ children, title, className }: CustomBoxProps) {
    return (
        <div className={`${className} dark:border-none`}>
            {title && <h2 className='text-2xl text-orange-500 border-orange-500 
                    font-bold border-b-2 mb-4'>{title}</h2>}
            {children}
        </ div>
    )
}

export default CustomBox