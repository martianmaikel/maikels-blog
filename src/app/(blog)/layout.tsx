import Navbar from '@/components/Navbar'
import '../../assets/globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'

import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { token } from '@/utils/sanity.fetch'
import { client } from '@/utils/sanity.client'
import { allCategories } from '@/utils/sanity.queries'
import { PacmanLoader } from "react-spinners"
import Link from 'next/link'

const PreviewProvider = dynamic(() => import('@/providers/PreviewProvider'))

export const metadata: Metadata = {
  title: 'Maikels Blog - Tech, Studium und Programmierung',
  description: 'Maikels Blog - Tech, Studium und Programmierung',

}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const categories: Category[] = await client.fetch(allCategories);
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex flex-col h-screen">
            <Navbar categories={categories} />
            <main className='container mx-auto max-w-[1200px] flex-1 p-8 md:mt-32'>
              {draftMode().isEnabled ? (
                <PreviewProvider token={token}>{children}</PreviewProvider>
              ) : (
                children
              )}
            </main>
            <footer className='bg-slate-100 dark:bg-slate-800 p-4'>
              <div className="container mx-auto flex justify-center items-center">
                <Link href='/impressum'>Impressum</Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
