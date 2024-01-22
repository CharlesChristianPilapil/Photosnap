import React from 'react'
import { motion } from 'framer-motion'
import { opacityVariant } from '../../../motion'
import arrow from '../../../assets/shared/desktop/arrow.svg';


const Pricinglowbanner = () => {
  return (
    <div className='banner2'>
        <div className="banner-wrapper2 container x-padding">
            <motion.h1
                variants={opacityVariant('left', '100%', 'spring', 0, 1)}
                initial='hidden'
                whileInView='show'
            > WE'RE IN BETA. GET YOUR INVITE TODAY! </motion.h1>
            <motion.div
              className='arrow'
              whileHover={{
                x: '10%'
              }}
            >
                <div>
                    <motion.h4
                        variants={opacityVariant('left', '100%', 'spring', 0.1, 1)}
                        initial='hidden'
                        whileInView='show'
                    >
                        GET AN INVITE
                    </motion.h4>
                    <motion.img
                        src={arrow}
                        alt="arrow"
                        variants={opacityVariant('left', '200%', 'spring', 0.2, 1)}
                        initial='hidden'
                        whileInView='show'
                    />
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Pricinglowbanner