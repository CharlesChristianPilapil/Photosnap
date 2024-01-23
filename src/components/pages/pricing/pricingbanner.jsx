import React from 'react'
import { motion } from 'framer-motion'
import { opacityVariant } from '../../../motion'
import pricingConstants from './pricingConstants'

const image = pricingConstants.hero;

const Pricingbanner = () => {
  return (
    <div>
        <div className="banner-wrapper">
        <div className="image-wrapper">
            <motion.img src={image.mobile} alt="feature-banner" 
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
            <h1> PRICING </h1>
            <p> Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos. </p>
            </div>

            </motion.div>

        </div>
        </div>
  </div>
  )
}

export default Pricingbanner