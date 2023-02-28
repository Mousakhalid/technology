"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import Navlinks from './Navlinks'
import { HiMenuAlt3 } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-white shadow-2xl z-50 md:sticky'>
            <div className='flex items-center font-medium justify-around'>
                <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
                    <div className='inline-flex'>
                        <Link href={'/'}>  <Image src='/tech-logo.png' alt='logo' width="70" height="100"
                            className='md:cursor-pointer h-10' /></Link>
                        <h1 className='mt-2 ml-2 text-slate-600 
                            font-sans md:text-2xl text-xl md:block hidden cursor-pointer'>Technology Solution</h1>

                    </div>
                    <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
                        {open ? <GrClose /> : <HiMenuAlt3 />}
                    </div>
                </div>
                <ul className='md:flex hidden uppercase items-center gap-8'>
                    <li>
                        <div  className='py-7 px-3 inline-block'></div>
                    </li>
                    <Navlinks />
                </ul>
                <div className='md:block hidden'>
                    <Button />
                </div>
                {/* Mobile */}
                <ul className={`
                md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 
                duration-500 ${open ? 'left-0' : "left-[-100%]"}
                `}>
                    <li>
                        <div  className='py-7 px-3 inline-block'></div>
                    </li>
                    <Navlinks />
                    <div className='py-5'>
                        <Button />
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar