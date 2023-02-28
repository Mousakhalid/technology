import React from 'react'
import styles from '../styles/ContactBanner.module.css'

const ContactBanner = () => {
    return (
        <div className={styles.bg}>
            <div>
                <div className='text-center'>
                    <h1 className='text-5xl m-8 font-extrabold'>Hire the Top Talent!</h1>
                    <h1 className='m-8 md:pl-60 md:pr-60 text-2xl text-gray-600 font-medium'>At Technology Solution, we make things easier for clients
                        to reach us. Get in touch with our business
                        development team; they will surely assist you
                        in hiring top remote developers. Contact us now.</h1>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner