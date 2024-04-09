import React from 'react'

function Cards(props) {
  return (
    <div className='cards w-32 sm:w-40 md:w-52 lg:w-64 xl:w-80 my-4'>
        <img src={props.src} alt="image" className={`h-32 sm:h-40 md:h-52 lg:h-64 xl:h-80 w-full m-auto bg-bottom {props.background} `} />
        <h1 className='sm:text-lg md:text-xl font-bold my-2 sm:my-3 md:my-5' >{props.Title}</h1>
        <p className='flex text-sm md:text-base font-normal xl:w-72'>{props.Body}</p>
      
    </div>
  )
}

export default Cards;
