'use client'

import React from 'react'
import { CodeBlock, github, atomOneDark } from 'react-code-blocks';
import { BsFileBinary } from 'react-icons/bs';


type CodeBlockProps = {
    code: Code
    dark?: boolean

}

export default function CustomCodeBlock({ code, dark = true }: CodeBlockProps) {
    return (
        <div>
            {code.filename && (
                <div className='flex items-center gap-x-2 mb-1 opacity-70'>
                    <BsFileBinary className="text-xl" />
                    <span className='text-sm italic'>{code.filename}</span>
                </div>
            )}

            <div className='dark:border border-orange-500  text-sm shadow-md'>
                <CodeBlock
                    text={code.code}
                    language={code.language}
                    theme={dark ? atomOneDark : github}
                    showLineNumbers={false}
                />
            </div>
        </div>



    )
}
