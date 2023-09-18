import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from './Shared/Avatar'
import { MdAdsClick } from 'react-icons/md'

function AboutMeBox() {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col space-y-6'>
                <p>
                    Hey ✌️, ich bin Maikel, Full Stack Software Entwickler
                    und Student im (Fern)Studium Software Entwickler (B.Sc.)
                    an der <Link href="https://www.iu.de/" target='_blank' className='href'>Internationalen Hochschule (kurz: IU)</Link>.
                </p>
                <p>
                    In diesem Blog findest du Erfahrungsberichten von meinem Studium,
                    Sachthemen bzgl. Software Entwicklung erklärt und Projektdokumentationen.
                </p>

                <p>
                    Dieser Blog ist mit <Link href="https://nextjs.org/" target='_blank' className='href'>Next.js</Link> und <Link href="https://www.sanity.io/" target='_blank' className='href'>Sanity.io</Link> erstellt.
                    Du kannst den Source Code  <Link href="https://github.com/martianmaikel/maikels-blog" target='_blank' className='href text-orange-500'>hier auf GitHub</Link> finden.
                    <br></br>Benutze es gern auch als Template für dein eigenes Projekt 🙂
                </p>
                <Link href='https://martianmaikel.dev/' target='_blank' className='href text-blue-500 flex flex-row space-x-2 items-center'>
                    <span>Zu meiner Portfolio Website</span>
                    <span className='text-2xl'>
                        <MdAdsClick />
                    </span>

                </Link>
            </div>
            {/* <div className="flex-1">
                <Image
                    src={'/maikel-ai.jpg'}
                    alt={'Maikel Szymanski'}
                    width={200}
                    height={200}
                />
            </div> */}
        </div>
    )
}

export default AboutMeBox