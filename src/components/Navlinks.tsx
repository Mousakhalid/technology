import Link from 'next/link'
import React, { useState } from 'react'
import { links } from './Mylinks'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Navlinks = () => {
    const [heading, setHeading] = useState("")
    const [subHeading, setSubHeading] = useState("")
    return (
        <>
            {
                links.map(link => (
                    <div>
                        <div className='px-3 text-left md:cursor-pointer group'>
                            <h1 className='py-7 flex justify-between 
                            items-center md:pr-0 pr-5 group' onClick={() => {
                                    heading !== link.name ? setHeading(link.name) : setHeading("");
                                    setSubHeading("")
                                }}>
                                {link.name}
                                <span className='text-xl md:hidden inline'>
                                    {heading === link.name ? <BsFillArrowUpCircleFill /> : <MdOutlineArrowDropDownCircle />}
                                </span>
                                <span className='text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                                    <MdOutlineArrowDropDownCircle />
                                </span>
                            </h1>
                            {link.submenu && (
                                <div>
                                    <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                                        <div className='py-3'>
                                            <div className='w-4 h-4 letf-3 
                                            absolute mt-2 bg-white rotate-45'></div>
                                        </div>
                                        <div className='bg-white p-5 grid grid-cols-4 gap-10'>
                                            {
                                                link.sublinks.map((mysublinks) => (
                                                    <div>
                                                        <h1 className='text-lg font-semibold'>{mysublinks.Head}</h1>
                                                        {mysublinks.sublink.map((slink) => (
                                                            <li className='text-sm text-gray-600 my-2.5'>
                                                                <Link href={slink.link} className="hover:text-blue-500">{slink.name}</Link>
                                                            </li>
                                                        ))}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                            )}
                        </div>
                        {/* Mobile menus */}
                        <div className={`${heading === link.name ? 'md:hidden' : "hidden"}`}>
                            {
                                link.sublinks.map((slinks: any) => (
                                    <div>
                                        <div>
                                            <h1 className='py-4 pl-7 
                                            font-semibold md:pr-0 pr-5 flex justify-between 
                                            items-center' onClick={() => {
                                                    subHeading !== slinks.Head ?
                                                        setSubHeading(slinks.Head) : setSubHeading("")
                                                }}>{slinks.Head}
                                                <span className='text-xl md:mt-1 md:ml-2 inline'>
                                                    {subHeading === slinks.Head ? <BsFillArrowUpCircleFill /> : <MdOutlineArrowDropDownCircle />}
                                                </span>
                                            </h1>
                                            <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                                                {
                                                    slinks.sublink.map((slink: any) => (
                                                        <li className='py-3 pl-14'>
                                                            <Link href={slink.link} className="hover:text-blue-500">
                                                                {slink.name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Navlinks