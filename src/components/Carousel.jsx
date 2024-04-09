import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    
    <div className="relative pb-10 md:pb-20">
      <Transition
        show={true}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="w-full h-2/4"
        />
      </Transition>

        
      {/* <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md transition duration-300"
        onClick={prevImage}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md transition duration-300"
        onClick={nextImage}
      >
        Next
      </button> */}

      


      <div className="absolute mt-2 sm:mt-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
             {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-1 sm:w-2 h-1 sm:h-2 rounded-full ${index === currentImageIndex ? 'bg-gray-800' : 'bg-gray-400'
                            } cursor-pointer`}
                    ></div>
                ))}
            </div>
    </div>
  );
};


export default Carousel;




