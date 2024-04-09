import React, { useState } from 'react'
import TextLine from './TextLine';

function Releases(props) {

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='mt-5 md:mt-20' id={props.id}>
      <h1 className="inline align-middle text-wrap font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl ">
        Press Releases  <span onClick={toggleVisibility} className="text-xs md:text-xl mb-2 font-semibold mx-2 align-middle border-b border-black cursor-pointer hover:text-red-500 hover:border-red-500" >
          View All
        </span></h1>

        {isVisible && (
                <div className='pt-4 sm:pt-10 md:pt-20'>
                <TextLine Date="June 14, 2022" weight='font-bold' Body="Wix Wins Google Cloud Expansion Partner of the Year Award" />
                <TextLine Date="June 7, 2022" weight='font-bold' Body="Wix Relaunches its Solution for Hotels-Now Powered by HotelRunner, Providing a Comp..." />
                <TextLine Date="April 27, 2022" weight='font-bold' Body="Wix and LegalZoom Join Forces to Offer Personalized Solution for Small Businessed to..." />
                <TextLine Date="April 18, 2022" weight='font-bold' Body="Wix Events Launches Seating Map Builder" />
              </div>
            )}
      

    </div>
  )
}

export default Releases;
