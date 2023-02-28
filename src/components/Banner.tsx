import Image from 'next/image'
import React from 'react'
import styles from '../styles/Banner.module.css'
import Button from './Button'
const Banner = (prop: any) => {
    return (
        <>
            <div className={styles.bg}>
                <div className='md:grid md:grid-cols-2 hidden'>
                    <div className='pl-20 pt-10 pb-12 md:ml-12'>
                        <h1 className=' font-extrabold text-5xl'>{prop.titleHome}</h1>
                        <h1 className='pt-10 pb-10 text-gray-600 text-2xl'>{prop.descriptionHome}</h1>
                        <Button />
                    </div>
                    <div className='ml-60 mb-10'>
                        <Image src="/mousa.png" alt='Mousa Developer' width="300" height="400" />
                    </div>
                </div>
                <div className='md:hidden grid grid-cols-1'>
                    <div className='mb-10'>
                        <Image src="/mousa.png" alt='Mousa Developer' width="300" height="400" />
                    </div>
                    <div className='p-5 mb-8'>
                        <h1 className=' font-extrabold text-3xl text-center'>{prop.titleHome}</h1>
                        <h1 className='pt-10 pb-10 text-gray-600 text-2xl text-justify'>{prop.descriptionHome}</h1>
                        <Button />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner