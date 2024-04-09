import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"

import './App.css'
import Footer from './components/Footer'
import Cards from './components/Cards'
import ContactUs from './components/ContactUs'
import InTheNews from './components/InTheNews'
import Releases from './components/Releases'
import Room from './components/Room'
import SocialMedia from './components/SocialMedia'
import { useState, useEffect } from 'react'

function App() {


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <section className='p-2 sm:p-9 md:p-15 lg:p-20 xl:p-24 text-black mt-10 sm:mt-4'>

        <Room id="roomSection" clickOnRoom="#roomSection" clickOnRelsease="#releasesSection" clickOnNews="#newsSection" />
        <Releases id="releasesSection" />
        <InTheNews id="newsSection" />

        {/* *****************Card Section Start******************** */}
        <div className='card-section w-auto flex flex-wrap justify-between '>
          <Cards src="https://static.wixstatic.com/media/701e00_e691edf90f52465abf7e9e14d304949d~mv2.jpg/v1/fill/w_323,h_323,al_c,lg_1,q_80,enc_auto/701e00_e691edf90f52465abf7e9e14d304949d~mv2.jpg" Title="Brand Assets" Body="All of the official design assets and guidelines used by Wix can be found here, along with all the information you need about our graphic elements and the philosophy behind them." />

          <Cards src="https://static.wixstatic.com/media/aabc0d_45c1fe679362404697560377993956de~mv2.png/v1/fill/w_323,h_323,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aabc0d_45c1fe679362404697560377993956de~mv2.png" Title="About Us" Body="Wix makes it easy for Everyone to get online with a stunning, professional and powerful web presence. learn More about our company, customers, products and people." />

          <Cards src="https://static.wixstatic.com/media/311dce_a9ba8dba96c64276af67afd024b6158f~mv2.png/v1/fill/w_323,h_323,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/311dce_a9ba8dba96c64276af67afd024b6158f~mv2.png" background="bg-left" Title="Investor Relations" Body="Information about Wix for investors and financial analysts. You can also find a company glossary, stats, and a list of IR events and presentations." />
        </div>
        {/* *****************Card Section End******************** */}

        <SocialMedia />
        <ContactUs />

      </section>

      <hr className='border-gray-400 ' />

      <section className='p-2 sm:p-9 md:p-15 lg:p-20 xl:p-24 text-black'>
        <Footer />
      </section>
      
      {/* *********************Bottom to Top Scroll button********************* */}

      <button
        className={`fixed right-4 bottom-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ${isVisible ? 'visible' : 'invisible'}`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </button>

    </>
  )
}

export default App
