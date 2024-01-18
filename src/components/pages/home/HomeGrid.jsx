import React, { useState, useEffect } from 'react';
import './home.css';
import { motion } from 'framer-motion';

import arrow from '../../../assets/shared/desktop/arrow.svg';
import homeimages from './homeimages';
import { slideIn } from '../../../motion';
import { Link, NavLink } from 'react-router-dom';

const HomeGrid = () => {
  const arrowVariants = {
    default: { color: '#FFFFFF' },
    hover: { color: '#808080', x: '10px' },
};

  const [selectedImage1, setSelectedImage1] = useState('');
  const [selectedImage2, setSelectedImage2] = useState('');
  const [selectedImage3, setSelectedImage3] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 600) {
        setSelectedImage1(homeimages.mobile1);
        setSelectedImage2(homeimages.mobile2);
        setSelectedImage3(homeimages.mobile3);
      } else if (screenWidth >= 724 && screenWidth < 924) {
        setSelectedImage1(homeimages.desktop1);
        setSelectedImage2(homeimages.desktop2);
        setSelectedImage3(homeimages.desktop3);
      } else {
        setSelectedImage1(homeimages.desktop1);
        setSelectedImage2(homeimages.desktop2);
        setSelectedImage3(homeimages.desktop3);
      }
    };

    // Initial call to set the images based on the window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className='home-boxes'>
        <div className='img-div'>
          <motion.img
            src={selectedImage1}
            alt=""
            variants={slideIn('right', 'spring', 0, 1)}
            initial='hidden'
            whileInView="show"
            viewport={{ once: false }}
            className='index'
          />
        </div>

        <div className='boxes-text home-bg-black'>
          <motion.h1
            variants={slideIn('left', 'spring', 0, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            CREATE AND SHARE YOUR PHOTO STORIES.
          </motion.h1>
          <motion.p
            variants={slideIn('left', 'spring', 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
          </motion.p>

          <motion.div
            variants={arrowVariants}
            className='arrow'
            initial="default"
            whileHover="hover"
          >
            <motion.h4
              variants={slideIn('left', 'spring', 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            >
              GET AN INVITE
            </motion.h4>
            <motion.img
              src={arrow}
              alt=""
              variants={slideIn('left', 'spring', 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            />
          </motion.div>
        </div>
      </div>

      {/* Second Image */}
      <div className='home-boxes'>
        <div className='img-div order-1'>
          <motion.img
            src={selectedImage2}
            alt=""
            variants={slideIn('left', 'spring', 0, 1)}
            initial='hidden'
            whileInView="show"
            viewport={{ once: false }}
            className='not-index'
          />
        </div>

        <div className='boxes-text order-2  home-bg-white'>
          <motion.h1
            variants={slideIn('right', 'spring', 0, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            BEAUTIFUL STORIES EVERY TIME
          </motion.h1>
          <motion.p
            variants={slideIn('right', 'spring', 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.
          </motion.p>

          <motion.div
            variants={arrowVariants}
            className='arrow'
            initial="default"
            whileHover="hover"
          >
            <motion.h4
              variants={slideIn('right', 'spring', 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            >
              GET AN INVITE
            </motion.h4>
            <motion.img
              src={arrow}
              alt=""
              variants={slideIn('right', 'spring', 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            />
          </motion.div>
        </div>
      </div>

      {/* Third Image */}
      <div className='home-boxes'>
        <div className='img-div'>
          <motion.img
            src={selectedImage3}
            alt=""
            variants={slideIn('right', 'spring', 0, 1)}
            initial='hidden'
            whileInView="show"
            viewport={{ once: false }}
            className='not-index'
          />
        </div>

        <div className='boxes-text home-bg-white'>
          <motion.h1
            variants={slideIn('left', 'spring', 0, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            DESIGNED FOR EVERYONE
          </motion.h1>
          <motion.p
            variants={slideIn('left', 'spring', 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.
          </motion.p>

          <NavLink to="/Stories"> 
          <motion.div
            variants={arrowVariants}
            className='arrow'
            initial="default"
            whileHover="hover"
          >
            <motion.h4
              variants={slideIn('left', 'spring', 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            >
              VIEW THE STORIES
            </motion.h4>
            <motion.img
              src={arrow}
              alt=""
              variants={slideIn('left', 'spring', 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            />
          </motion.div>
          
          </NavLink>

        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
