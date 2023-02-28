import Link from 'next/link'
import React from 'react'

const Button = () => {
    return (
        <Link href="/contact-us" className=''>
            <button className='bg-slate-700 text-white px-10 py-4 hover:bg-blue-600 duration-500 rounded-full'>
                Hire a PRO
            </button>
        </Link>
    )
}

export default Button