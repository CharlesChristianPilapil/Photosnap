import React from 'react'
import homeimages from './homeimages'
import { motion } from 'framer-motion'
import { slideIn } from '../../../motion'

const Homeslide = () => {
  return (
    <div className='home-slide'>
      <div className="home-slide-wrapper container x-padding">

        <div className="home-slide-box">
          <motion.img src={homeimages.responsive} alt="" 
            variants={slideIn('down', 'spring', 0, 1)}
            initial='hidden'
            whileInView='show'
          />
          <div>
            <motion.h4
              variants={slideIn('down', 'spring', 0.2, 1)}
              initial='hidden'
              whileInView='show'
            > 100% Responsive </motion.h4>
            <motion.p
              variants={slideIn('down', 'spring', 0.3, 1)}
              initial='hidden'
              whileInView='show'
            > No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen. </motion.p>
          </div>
        </div>

        <div className="home-slide-box">
          <motion.img src={homeimages.upload} alt="" 
              variants={slideIn('down', 'spring', 0.4, 1)}
              initial='hidden'
              whileInView='show'
          />

          <div>
            <motion.h4
              variants={slideIn('down', 'spring', 0.5, 1)}
              initial='hidden'
              whileInView='show'
            > No Photo Upload Limit </motion.h4>
            <motion.p
              variants={slideIn('down', 'spring', 0.6, 1)}
              initial='hidden'
              whileInView='show'
            > Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go. </motion.p>
          </div>
        </div>

        <div className="home-slide-box">
          <motion.img src={homeimages.embed} alt="" 
              variants={slideIn('down', 'spring', 0.7, 1)}
              initial='hidden'
              whileInView='show'
          />

          <div>
            <motion.h4
              variants={slideIn('down', 'spring', 0.8, 1)}
              initial='hidden'
              whileInView='show'
            > Available to Embed </motion.h4>
            <motion.p
              variants={slideIn('down', 'spring', 0.9, 1)}
              initial='hidden'
              whileInView='show'
            > Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </motion.p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Homeslide