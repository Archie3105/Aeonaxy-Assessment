import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

function Room(props) {

  const images = [
    'https://static.wixstatic.com/media/311dce_5f7b473e73604c359af3492903deac41~mv2.png/v1/fill/w_1116,h_395,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/311dce_5f7b473e73604c359af3492903deac41~mv2.png',

    'https://static.wixstatic.com/media/311dce_64e7f025fbf147258029294eb482e3c3~mv2.png/v1/fill/w_1116,h_395,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/311dce_64e7f025fbf147258029294eb482e3c3~mv2.png',

    'https://static.wixstatic.com/media/311dce_91d7ce8323da4b3f88d9027fc837dd0a~mv2.png/v1/fill/w_1116,h_395,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/311dce_91d7ce8323da4b3f88d9027fc837dd0a~mv2.png',

    'https://static.wixstatic.com/media/311dce_447a17f9e2cd4fe7ad662d64c34cf301~mv2.png/v1/fill/w_1116,h_395,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/311dce_447a17f9e2cd4fe7ad662d64c34cf301~mv2.png',

    'https://static.wixstatic.com/media/aabc0d_51104e5c97f543dab90632bb8f4b33f0~mv2.png/v1/fill/w_1116,h_395,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/aabc0d_51104e5c97f543dab90632bb8f4b33f0~mv2.png',
  ];

  return (
    <div className="mb-5 md:mb-10" id={props.id}>
      <h1 className=" font-bold text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-6xl">
        Press Room
      </h1>
      <p className="text-xs sm:text-base mt-2 font-normal mb-10">
        All the News You a href Know about Wix
      </p>
      {/* <hr className=' bg-dark-600 border-4 dark:bg-gray-700' /> */}
      <hr className=" border-t-2 border-gray-400 " />

      {/* ***********Navbar Section********** */}

      <ul className="inline-flex text-wrap text-sm sm:text-xl lg:text-lg  font-semibold mt-4 mb-4 sm:mt-6 sm:mb-6 cursor-pointer">
        <li>
          <a href={props.clickOnRoom} aria-current="true" className="">
            Press Room
          </a>
        </li>{" "}
        <span className="mx-2 sm:mx-6 ">|</span>
        <li>
          <a href={props.clickOnRelsease} className="text-black">
            Press Releases
          </a>
        </li>{" "}
        <span className="mx-2 sm:mx-6">|</span>
        <li>
          <a href={props.clickOnNews} className="text-black">
            In The News
          </a>
        </li>
      </ul>
      <hr className=" border-t-2 border-gray-400 " />

      <p className="mt-10 text-sm md:text-xl font-normal sm:w-9/12 ">
        Wix is leading the way with a cloud-based development platform for users
        worldwide. Wix was founded on the belief that the Internet should be
        a href a href develop, create and contribute. Through free
        and premium subscriptions, Wix empowers millions of businesses,
        organizations, artists, and a href take their businesses, brands
        and workflow online.
      </p>

      {/* ************************Carousel Slider************************* */}


      
        <div className="container mx-auto mt-10 md:mt-20 mb-5 md:mb-10">
          <Carousel images={images} />
        </div>
      

    </div>
  );
}

export default Room;
