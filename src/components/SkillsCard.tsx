import Image from 'next/image'
import React from 'react'

const SkillsCard = () => {
    return (
        <div>
            <div className="md:pl-20  md:pt-10 md:pb-10 pb-10 mt-10 pl-12 pt-10 grid md:grid-cols-3 grid-cols-1">
                <div className="w-72 md:mt-5 mt-10 rounded-lg overflow-hidden shadow-lg bg-white hover:bg-slate-400 duration-500 hover:text-white">
                    <Image src="/icons1.png" alt="Icon for hiring" className='pt-5 pl-5' height="50" width="70" />
                    <div className="px-4 py-4 md:mt-5 mt-10 ml-5 mr-5 mb-5">
                        <div className="font-extrabold text-left text-3xl mb-8">Hire a Web Developer</div>
                        <p className="text-gray-700 text-left  text-xl">
                            Exploring a reliable software development company? You’re at the right place. Hire a Developer now, we at Technology Solution comprise secure software solutions for any device, browser and OS.        </p>
                    </div>
                </div>
                <div className="w-72 md:mt-5 mt-10 rounded-lg overflow-hidden shadow-lg bg-white hover:bg-slate-400  hover:text-white duration-500">
                    <Image src="/icons2.png" alt="Icon for hiring" className='pt-5 pl-5' height="50" width="70" />
                    <div className="px-4 py-4 md:mt-5 mt-10 ml-5 mr-5 mb-5">
                        <div className="font-extrabold text-left text-3xl mb-8">Hire a App Developer</div>
                        <p className="text-gray-700 text-left text-xl">
                            We lead modern industry experts along with updated IT advancements to deliver custom solutions and products to fulfill your project demands and the behavior of their users.
                        </p>
                    </div>
                </div>
                <div className="w-72 md:mt-5 mt-10 rounded-lg overflow-hidden shadow-lg bg-white hover:bg-slate-400  hover:text-white duration-500">
                    <Image src="/icons3.png" alt="Icon for hiring" className='pt-5 pl-5' height="50" width="70" />
                    <div className="px-4 py-4 md:mt-5 mt-10 ml-5 mr-5 mb-5">
                        <div className="font-extrabold text-left text-3xl mb-8">Hire an AI Engineer</div>
                        <p className="text-gray-700 text-left text-xl">
                            Looking for a data science engineer? Try to hire a machine learning engineer to build AI products. Hiring an AI engineer helps to automate your business in many ways.        </p>
                    </div>
                </div>
            </div>
            <div className="md:pl-20  md:pt-10 md:pb-10 pb-10 mt-10 pl-12 pt-10 grid md:grid-cols-3 grid-cols-1">
                <div className="w-72 md:mt-5 mt-10 rounded-lg overflow-hidden shadow-lg bg-white hover:bg-slate-400 duration-500 hover:text-white">
                    <Image src="/icons4.png" alt="Icon for hiring" className='pt-5 pl-5' height="50" width="70" />
                    <div className="px-4 py-4 md:mt-5 mt-10 ml-5 mr-5 mb-5">
                        <div className="font-extrabold text-left text-3xl mb-8">Hire a Digital Marketer</div>
                        <p className="text-gray-700 text-left  text-xl">
                            Hire an expert digital marketer specializing in email, content, inbound, social media, SEO, PR and PPC. We deliver top-performing marketers to fulfill your needs. </p>
                    </div>
                </div>
                <div className="w-72 md:mt-5 mt-10 rounded-lg overflow-hidden shadow-lg bg-white hover:bg-slate-400  hover:text-white duration-500">
                    <Image src="/icons5.png" alt="Icon for hiring" className='pt-5 pl-5' height="50" width="70" />
                    <div className="px-4 py-4 md:mt-5 mt-10 ml-5 mr-5 mb-5">
                        <div className="font-extrabold text-left text-3xl mb-8">Hire a UI/UX Designer</div>
                        <p className="text-gray-700 text-left text-xl">
                            Hire UI/UX designers to develop responsive pages and select the set of interactive elements to be displayed. We comprise skilled UI/UX engineers with a thorough knowledge of HTML and CSS.                        </p>
                    </div>
                </div>
                <div className="w-72 md:mt-5 mt-10 rounded-lg overflow-hidden shadow-lg bg-white hover:bg-slate-400  hover:text-white duration-500">
                    <Image src="/icons6.png" alt="Icon for hiring" className='pt-5 pl-5' height="50" width="70" />
                    <div className="px-4 py-4 md:mt-5 mt-10 ml-5 mr-5 mb-5">
                        <div className="font-extrabold text-left text-3xl mb-8">Hire a WEB3.0 Developer</div>
                        <p className="text-gray-700 text-left text-xl">
                            Hiring a Web3.0 developer can give your company a competitive edge by integrating blockchain technology and creating decentralized applications that enhance transparency, security, and user trust.
                        </p>        </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsCard