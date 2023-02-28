import Image from 'next/image'
import React from 'react'
import SocialIcons from './SocialIcons'

const Contactform = () => {
    return (
        <div className="antialiased bg-gray-100">
            <div className="flex w-full min-h-screen justify-center items-center">
                <div className='flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0 bg-cyan-700 w-full overflow-hidden
                 max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white'>
                    <div className='flex flex-col space-y-8 justify-between'>
                        <div>
                            <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                            <p className='pt-2 text-cyan-100 text-sm'>Unlock the potential of your business with
                                our software development services. Contact us.</p>
                        </div>
                        <div className='flex  flex-col space-y-6'>
                            <div className='inline-flex space-x-2 items-center'>
                                <Image className='text-teal-300 text-xl' src='/icon-call.png' alt="icon" width="25" height='25' />
                                <a href="tel:03001119288">(+92) 300-1119288</a>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                                <Image className='text-teal-300 text-xl' src='/icon-email.png' alt="icon" width="25" height='25' />
                                <a href="email:technsolpk@gmail.com">technsolpk@gmail.com</a>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                                <Image className='text-teal-300 text-xl' src='/icon-location.png' alt="icon" width="25" height='25' />
                                <a href="#">ABC Street Pakistan</a>
                            </div>
                        </div>
                        <div className='text-white -ml-24 md:ml--640 '>
                            <SocialIcons />
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='absolute z-0 w-40 h-40 bg-teal-400 
                        rounded-full -right-28 -top-28'>

                        </div>
                        <div className='absolute z-0 w-40 h-40 bg-teal-400 
                        rounded-full -left-28 -bottom-16'>

                        </div>
                        <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 w-80'>
                            <form action="https://formspree.io/f/mgebyapp" method='POST' className='flex flex-col space-y-4'>
                                <div>
                                    <label className='text-sm' htmlFor="">Your Name</label>
                                    <input type="text" name='username' placeholder='Your Name' className='ring-1
                                     ring-gray-300 w-full rounded-md mt-2 px-4 py-2 
                                     outline-none focus:ring-2 focus:ring-teal-300' />
                                </div>
                                <div>
                                    <label htmlFor="">Email Address</label>
                                    <input type="email" name='email' placeholder='Your Email' className='ring-1
                                     ring-gray-300 w-full mt-2 rounded-md px-4 py-2 
                                     outline-none focus:ring-2 focus:ring-teal-300' />
                                </div>
                                <div>
                                    <label htmlFor="">Message</label>
                                    <textarea placeholder='Your Message' name='message' rows='4' className='ring-1
                                     ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none
                                      focus:ring-2 focus:ring-teal-300' ></textarea>
                                </div>
                                <button className='inline-block self-end bg-cyan-700 text-white
                                 rounded-lg px-6 py-2 uppercase font-bold '>send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactform