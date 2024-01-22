import React, { useState, useEffect } from 'react';
import featuresConstants from './featuresimages';
import { motion } from 'framer-motion';
import { opacityVariant } from '../../../motion';

const heroImages = featuresConstants.hero;

const Featurebanner = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [imageSource, setImageSource] = useState(heroImages.mobile);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 724) {
      setImageSource(heroImages.mobile);
    } else if (screenWidth >= 724 && screenWidth < 1024) {
      setImageSource(heroImages.tablet);
    } else {
      setImageSource(heroImages.desktop);
    }
  }, [screenWidth]);

  return (
    <div>
      <div className="banner-wrapper">
        <div className="image-wrapper">
          <motion.img src={imageSource} alt="feature-banner" 
            variants={opacityVariant('right', '100%', 'spring', 0, 1)}
            initial='hidden'
            whileInView='show'
          />
        </div>

        <div className='text'>
          <motion.div className="text-wrapper"
            variants={opacityVariant('left', '100%', 'spring', 0, 1)}
            initial='hidden'
            whileInView='show'
          > 
          <div>
            <h1> FEATURES </h1>
            <p> We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories. </p>
          </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Featurebanner;