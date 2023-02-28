import Image from 'next/image'
import React from 'react'

const SocialIcons = () => {
    return (
        <>
            <div className='flex -mt-4 justify-center items-center'>
                <div className='text-teal-500'>

                    <span className="p-2 cursor-pointer inline-flex items-center rounded-full 
                          bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
                        <Image src='/icon-fb.png' alt="fb" width="25" height={25} />
                    </span>

                </div>
                <div className='text-teal-500'>

                    <span className="p-2 cursor-pointer inline-flex  items-center rounded-full 
          bg-gray-700 text-xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 duration-300">
                        <Image src='/icon-ld.png' alt="fb" width="25" height={25} />
                    </span>

                </div>
                <div className='text-teal-500'>

                    <span className="p-2 cursor-pointer inline-flex  items-center rounded-full 
bg-gray-700 text-xl hover:text-gray-100 mx-1.5 hover:bg-teal-500 duration-300">
                        <Image src='/icon-gt.png' alt="fb" width="25" height={25} />
                    </span>

                </div>
                <div className='text-teal-500'>

                    <span className="p-2 cursor-pointer inline-flex  items-center rounded-full 
bg-gray-700 text-xl hover:text-gray-100 mx-1.5 hover:bg-teal-500 duration-300">
                        <Image src='/icon-ig.png' alt="fb" width="25" height={25} />
                    </span>

                </div>
            </div>
        </>
    )
}

export default SocialIcons