
import React from 'react'


async function Page() {

    return (
        // write impressum here
        <div className='mx-auto lg:w-1/2'>
            <h1 className='text-2xl'>Impressum</h1>
            <ul className='no-bullets mt-4'>
                <li>Name: Maikel Szymanski</li>
                <li>Adresse: 01796 Pirna, Bahnhofstr. 24</li>
                <li>Telefon: 0152 234 234 23</li>
                <li>E-Mail: <a href='mailto:maikel.szy@gmail.com'>maikel.szy@gmail.com</a></li>
            </ul>
        </div>

    )
}

export default Page