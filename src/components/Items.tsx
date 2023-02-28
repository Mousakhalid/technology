import React from 'react'

const Items = ({ Links, title }) => {
    return (
        <ul>
            <h1 className='mb-1 font-semibold'>{title}</h1>
            {
                Links.map((link:any) => (
                    <li key={link.name}>
                        <a className='text-gray-400
                         hover:text-teal-300 duration-300 
                         cursor-pointer leading-6' href={link.link}>{link.name}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Items