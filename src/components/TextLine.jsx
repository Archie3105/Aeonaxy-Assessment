import React, { useState } from 'react'
import Hr from './Hr'
function TextLine(props) {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='mt-5 sm:mt-10'>
            <p className={`${props.weight} text-sm sm:text-base  `}>{props.Date}</p>
            <p className='text-sm sm:text-base font-bold my-3 sm:my-4'>{props.Title}</p>
            <div className='flex align-middle justify-between'>
                <p className='flex align-middle justify-between text-wrap text-sm sm:text-base font-normal w-44 sm:w-80 md:w-auto'>{props.Body}</p><span onClick={toggleVisibility} id='read-more' className="text-sm sm:text-base justify-end font-medium my-auto underline decoration-2 underline-offset-4 cursor-pointer hover:text-red-500 hover:border-red-500">
                    Read More
                </span>
            </div>
            {/* *********************Hidden/Unhidden Page************************** */}
            {isVisible && (
                <div>
                    <p className='mt-5 border-2 p-4 text-center rounded-md bg-red-50 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa impedit quasi qui nulla ipsum nihil quam architecto, deserunt beatae, illum, eius libero a. Ducimus cumque suscipit necessitatibus, inventore consequatur architecto sint atque, quo enim consequuntur eos blanditiis voluptatem magnam beatae, explicabo vero quae accusamus amet repellat? Dolores, eos ipsa?</p>
                </div>
            )}

            <Hr />
        </div>
    )
}

export default TextLine;
