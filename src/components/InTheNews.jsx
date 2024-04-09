import React, { useState } from 'react'
import TextLine from './TextLine';

function InTheNews(props) {

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id={props.id} className='mt-20 mb-20 md:pt-20 w-full'>
      <h1 className="inline align-middle text-wrap font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl ">
        In The News  <span onClick={toggleVisibility} className="text-xs md:text-xl mb-2 font-semibold  mx-2 align-middle border-b border-black cursor-pointer hover:text-red-500 hover:border-red-500" >
          View All
        </span></h1>

        {isVisible && (
                <div className='pt-4 sm:pt-10 md:pt-20'>
                <TextLine Date="April 28, 2022" weight='font-normal' Title="Bloomberg" Body="How E-Scooters Are Transforming Tel Aviv" />
                <TextLine Date="April 27, 2022" weight='font-normal' Title="Benzinga" Body="Wix, LegalZoom Collaborate To Boost Online Presence Of Small Businesses" />
                <TextLine Date="April 26, 2022" weight='font-normal' Title="HostingAdvice.com" Body="Wix Partners with Agencies to Build High-Performance Websites for Scalable Growth" />
                <TextLine Date="April 18, 2022" weight='font-normal' Title="DevOps.com" Body="Naturing a Developer-Centric Culture" />
              </div>
            )}
      

    </div>
  )
}

export default InTheNews;
