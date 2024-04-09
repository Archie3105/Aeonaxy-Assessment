import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
    return (
        <div className='sm:mt-10 md:mt-15 lg:mt-20 flex sm:gap-6 lg:gap-24 pt-10 sm:pt-20lg:pt-32'>
            <h1 className="inline font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl">
                Contact Us
            </h1>
            <div className="px-6 border-black w-11/12 md:w-9/12 lg:w-6/12 lg:mx-20">
                <p className='text-sm sm:text-base md:text-xl font-normal'>If you're a member of the media and would like to get in touch, please send us a note. For non-press-related inquiries, please use our <Link to='https://www.wix.com/about/contact-us' className='' target='_blank'>general contact page.</Link></p>
                <div className='mt-4 md:mt-20 flex gap-8'>

                    <input type="name" placeholder='First Name' className='font-medium text-xs md:text-base w-full p-1 md:p-2 border-b  border-black text-black placeholder-black outline-none' />
                    <input type="mobile" placeholder='Phone' className='font-medium w-full  p-1 md:p-2 border-b border-black text-black  placeholder-black text-xs md:text-base outline-none' required />


                </div>
                <input type="email" placeholder='Email' className='font-medium mt-4 md:mt-20 p-1 md:p-2 md:my-10  w-full border-b border-black text-black  placeholder-black text-xs md:text-base outline-none' required />
                <textarea name="message" id="" className='mt-8 md:mt-10 w-full p-4 border border-black text-xs md:text-xl' cols={50} rows={6} placeholder="Type your massage here..."></textarea>
                <button className='rounded-3xl border border-black text-md md:text-xl mb-10 mt-6 sm:mt-10 md:mt-20 lg:mt-24 py-0 px-6 sm:py-1 sm:px-10 lg:py-2 lg:px-14 hover:bg-red-100' type='submit'>Send</button>
            </div>
        </div>
    )
}

export default ContactUs
