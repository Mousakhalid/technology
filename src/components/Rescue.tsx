import React from 'react'
import Button from './Button'

const Rescue = () => {
    return (
        <div className='bg-gray-300 rounded-lg w-720px text-center'>
            <div >
                <div className='flex md:justify-between p-20 md:text-justify' >
                    <div>
                        <h1 className='text-gray-800 md:text-4xl text-2xl  font-extrabold'>Rescue your company’s growth!</h1>
                        <div className='text-gray-900 md:text-2xl text-xl mt-5'>Let us know about your business
                            plans on an introductory <br /> call,  and we’ll lead the matching process.</div>
                    </div>
                    <div className='mt-7 md:block hidden'>
                        <Button />
                    </div>
                </div>
                <div className='md:hidden flex items-center ml-24 pb-20'>
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Rescue