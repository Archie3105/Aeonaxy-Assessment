import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSquareFacebook, faWix, faTwitter, faYoutube, } from "@fortawesome/free-brands-svg-icons"

function Icons(props) {
  return (
    <>
      <FontAwesomeIcon icon={props.iconName} className='md:w-12  md:h-12 my-auto text-gray-900 text-center hover:text-pink-400' />
    </>
  );
}


function SocialMedia() {
  return (
    <div className='sm:mt-12 sm:pt-10'>
      <h1 className="sm:mb-12 md:mb-16 font-bold text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-6xl mt-10">
        Social
      </h1>
      <div className="grid grid-cols-5 divide-x-2 border-b border-t-2 border-l-2 border-r border-gray-600 mt-6 md:mt-10 ">
        <Link to='https://www.wix.com/press-room/home' target='_blank' className='flex flex-wrap  lg:w-full text-black justify-center my-auto ml-2' ><i className="fab fa-wix  lg:w-12 lg:h-12 text-2xl md:text-5xl lg:text-6xl  text-gray-900 text-center hover:text-pink-400"></i><span className='md:text-2xl lg:text-4xl font-normal text-black md:py-auto md:my-2 md:mx-8  hover:text-pink-400'>Blog</span></Link>

        <Link to='https://www.facebook.com/people/Abhishek-Arya/pfbid05EczTjDmxHWxkRFXJhxrgbeX1EDYaMa3AdttrBAXGKk9KoeGWxvPXNEazi8qynZ6l/' target='_blank' className='flex align-middle justify-center border-l-1 border-gray-600' ><Icons iconName={faSquareFacebook} /></Link>

        <Link to='https://www.instagram.com/official.eternal.code/' target='_blank' className='flex align-middle justify-center border-l-1 border-gray-600' ><Icons iconName={faInstagram} /></Link>

        <Link to='https://www.youtube.com/@official.eternal.code.' target='_blank' className='flex align-middle justify-center py-2 sm:py-8  md:py-10 lg:py-14 border-l-1 border-gray-600' ><Icons iconName={faYoutube} /></Link>

        <Link to='https://twitter.com/archieabhi1' target='_blank' className='flex align-middle justify-center py-2 sm:py-8 md:py-10 lg:py-14 border-l-1 border-gray-600' ><Icons iconName={faTwitter} /></Link>



        {/*<Link to='https://twitter.com/archieabhi1' target='_blank' className='flex align-middle justify-center py-2 sm:py-8 md:py-10 lg:py-14 border-l-1 border-gray-600' ><i className="fa-brands fa-twitter  md:w-12  md:h-12 text-3xl md:text-4xl lg:text-6xl my-auto text-gray-900 text-center hover:text-pink-400"></i></Link> */}
      </div>
    </div>
  )
}

export default SocialMedia;
