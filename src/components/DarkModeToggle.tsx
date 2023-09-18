'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { BsSun, BsMoon, BsCircle } from "react-icons/bs";

function DarkModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return (
        <BsCircle />
    );

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <button
            onClick={toggleTheme}
            className='text-xl'>
            {theme == "dark" ? <BsSun /> : <BsMoon />}
        </button>
    )
}

export default DarkModeToggle