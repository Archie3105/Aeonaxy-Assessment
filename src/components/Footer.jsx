import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram, faFacebookF, faTwitter, faYoutube, faPinterestP,
  faLinkedinIn, faTiktok, faWix, faGithub
} from "@fortawesome/free-brands-svg-icons"


function FooterWord(props) {
  return (
    <div>
      <Link to='/' className="text-xs md:text-sm text-gray-500 font-semibold" >{props.word}</Link>
    </div>
  );
}

function SocialIcon(props) {
  return (
    <Link to={props.link} target='_blank' className='text-gray-600'>
      <FontAwesomeIcon icon={props.iconName} className='text-sm sm:text-md sm:text-xl' />
    </Link>
  );
}

function Footer() {
  return (
    <div className='footer flex flex-wrap justify-between text-gray-500 mt-10'>
      <div className="product my-4">
        <h1 className="font-semibold text-md md:text-lg text-gray-600 mb-1 md:mb-4">PRODUCT</h1>
        <FooterWord word="Templates" />
        <FooterWord word="Explore" />
        <FooterWord word="Features" />
        <FooterWord word="Website Builder" />
        <FooterWord word="Web Accessibility" />
        <FooterWord word="Velo" />
        <FooterWord word="Wix Playground" />
        <FooterWord word="My Sites" />
        <FooterWord word="Premium Plans" />
        <FooterWord word="Wix SEO" />
        <FooterWord word="Logo Maker" />
        <FooterWord word="Create a Blog" />
        <FooterWord word="Online Store" />
        <FooterWord word="Wix Bookings" />
        <FooterWord word="Restaurants" />
        <FooterWord word="App Market" />
        <FooterWord word="Domains" />
        <FooterWord word="Business Email" />
        <FooterWord word="Web Hosting" />
        <FooterWord word="Developers" />
        <FooterWord word="Enterprise" />
        <FooterWord word="Email Marketing" />
        <FooterWord word="Website Design" />
        <FooterWord word="Professional Tools" />
      </div>

      <div className="company  my-4">
        <h1 className="font-semibold text-md md:text-lg text-gray-600 mb-1 md:mb-4">COMPANY</h1>
        <FooterWord word="About Wix" />
        <FooterWord word="Press Room" />
        <FooterWord word="Investor Relations" />
        <FooterWord word="Wix Jobs" />
        <FooterWord word="Design Assets" />
        <FooterWord word="Terms of Use" />
        <FooterWord word="App Market Terms" />
        <FooterWord word="Privacy Policy" />
        <FooterWord word="Privacy and Security Hub" />
        <FooterWord word="Accessibility Statement" />
        <FooterWord word="Abuse" />
        <FooterWord word="Affiliates" />
        <FooterWord word="Wix Capital" />
        <FooterWord word="Updates & Releases" />
        <FooterWord word="Contact Us" />
        <FooterWord word="Patent Notice" />
        <FooterWord word="Sitemap" />
      </div>

      <div className="community my-4">
        <h1 className="font-semibold text-md md:text-lg text-gray-600 mb-1 md:mb-4">COMMUNITY</h1>
        <FooterWord word="Wix Blog" />
        <FooterWord word="Wix Marketplace" />
        <FooterWord word="Student Website" />
        <FooterWord word="Wix Encyclopedia" />
        <FooterWord word="Partner Community" />
      </div>

      <div className="support my-4">
        <h1 className="font-semibold text-md md:text-lg text-gray-600 mb-1 md:mb-4">SUPPORT</h1>
        <FooterWord word="Support Center" />
        <FooterWord word="Getting Started Guide" />
        <FooterWord word="Wix Learn" />
        <FooterWord word="Status Page" />
      </div>

      <div className="wix w-64  border-black my-4">
        <FontAwesomeIcon icon={faWix} size='3x' className='text-black hover:text-gray-400' />
        <p className='text-xs sm:text-sm lg:text-md font-semibold'>The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools-enabling anyone to create and grow online.</p>
        <p className='my-2'>© 2006-2022 Wix.com, Inc</p>

        <div className="social flex gap-3 mt-2 sm:mt-5">
          <SocialIcon link="https://www.facebook.com/people/Abhishek-Arya/pfbid05EczTjDmxHWxkRFXJhxrgbeX1EDYaMa3AdttrBAXGKk9KoeGWxvPXNEazi8qynZ6l/" iconName={faFacebookF} />
          <SocialIcon link="https://twitter.com/archieabhi1" iconName={faTwitter} />
          <SocialIcon link="https://www.youtube.com/@official.eternal.code." iconName={faYoutube} />
          <SocialIcon link="https://www.instagram.com/official.eternal.code/" iconName={faPinterestP} />
          <SocialIcon link="https://www.instagram.com/official.eternal.code/" iconName={faInstagram} />
          <SocialIcon link="www.linkedin.com/in/abhishek-kumar-466962218" iconName={faLinkedinIn} />
          <SocialIcon link="https://github.com/Archie3105" iconName={faTiktok} />
          <SocialIcon link="https://github.com/Archie3105" iconName={faGithub} />

        </div>
      </div>
    </div>
  )
}


export default Footer
