'use client'

import React, { useEffect, Fragment, useState, forwardRef, Ref } from 'react'
import DarkModeToggle from './DarkModeToggle'
import Link from 'next/link'
import { BiDownArrow } from 'react-icons/bi';
import { Menu, Transition } from '@headlessui/react'
import Logo from './Logo';


type NavLinkProps = {
    href: string;
    children: React.ReactNode;
}
const NavLink = ({ href, children }: NavLinkProps) => {

    return (
        <Link className='block px-4 py-2 hover:bg-slate-200 text-center dark:hover:bg-slate-700 w-full' href={href}>
            {children}
        </Link>

    )
}

type DropdownProps = {
    id: string;
    title: string;
    links: Array<React.ReactNode>;
}



const DropdownItem = ({ id, title, links }: DropdownProps) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>

                <Menu.Button className={`block px-4 py-2 hover:bg-slate-200 dark:hover:bg-gray-600 dark:hover:text-white }`}>
                    <div className='flex flex-row items-center gap-x-2'>
                        Themen
                        <BiDownArrow />
                    </div>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-4 w-56 origin-top-right dark:bg-slate-800 bg-slate-100 focus:outline-none">
                    <div className="py-1">
                        {links.map((link, index) => (
                            <Menu.Item key={index}>
                                {link}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

type NavbarProps = {
    categories: Category[];
};

export default function Navbar({ categories }: NavbarProps) {

    const categoryLinks = categories.map((category, index) => (
        <NavLink key={index} href={`/posts/${category.title.toLowerCase()}`}>{category.title}</NavLink>
    ));

    return (
        <nav className="bg-opacity-90 bg-slate-100 dark:bg-slate-800 md:fixed w-full z-20 top-0 left-0 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Logo />
                <div className="flex md:order-3 md:hidden">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open</span>
                        <BiDownArrow />
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:space-x-10" id="navbar-sticky">
                    <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <NavLink href={'/'}>Startseite</NavLink>
                        </li>
                        <li>
                            <NavLink href={'/posts'}>Posts</NavLink>
                        </li>
                        <li>
                            <DropdownItem
                                id={'themen'}
                                title={'Themen'}
                                links={categoryLinks}
                            />
                        </li>
                    </ul>
                    <DarkModeToggle />
                </div>
            </div>
        </nav >

    )
}




