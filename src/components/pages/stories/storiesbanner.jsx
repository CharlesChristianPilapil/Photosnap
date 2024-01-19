import React from 'react'
import arrow from '../../../assets/shared/desktop/arrow.svg';
import image from '../../../assets/stories/mobile/moon-of-appalacia.jpg';
import { motion } from 'framer-motion';
import { slideIn } from '../../../motion';

const Storiesbanner = () => {
  return (
    <div className='stories-banner'>

  
            <div className="stories-banner-wrapper container">
                <div className="stories-banner-right">
                    <motion.img src={image} alt="moon of appalachia" 
                        variants={slideIn('right', 'spring', 0, 1)}
                        initial='hidden'
                        whileInView='show'
                    />
                </div>

                <div className="stories-banner-left">
                    <motion.h5
                        variants={slideIn('left', 'spring', 0, 1)}
                        initial='hidden'
                        whileInView='show'
                        
                    > LAST MONTH'S FEATURED STORY </motion.h5>

                    <motion.h1
                        variants={slideIn('left', 'spring', 0.2, 1)}
                        initial='hidden'
                        whileInView='show'
                    > HAZY FULL MOON OF APPALACHIA </motion.h1>

                    <motion.p
                        variants={slideIn('left', 'spring', 0.4, 1)}
                        initial='hidden'
                        whileInView='show'
                    > <span> March 2nd 2020 </span> by John Appleseed </motion.p>

                    <motion.span
                        variants={slideIn('left', 'spring', 0.6, 1)}
                        initial='hidden'
                        whileInView='show'
                    > The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged. </motion.span>

                    <motion.div className="banner-arrow"
                        whileHover={{
                            x: '10%'
                        }}
                    >
                        <div className="banner-arrow-wrapper">
                            <motion.h5
                                variants={slideIn('left', 'spring', 0.8, 1)}
                                initial='hidden'
                                whileInView='show'
                            > READ THE STORY </motion.h5>

                            <motion.img src={arrow} alt="banner-arrow" 
                                variants={slideIn('left', 'spring', 1, 1)}
                                initial='hidden'
                                whileInView='show'
                            />
                        </div>
                    </motion.div>
                </div>
            </div>


    </div>
  )
}

export default Storiesbanner