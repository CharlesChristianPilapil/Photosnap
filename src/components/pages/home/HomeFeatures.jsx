import React from 'react'
import { opacityVariant } from '../../../motion'
import { motion } from 'framer-motion';
import arrow from '../../../assets/shared/desktop/arrow.svg';

const HomeFeatures = () => {
  return (
    <div className='homefeature-container'>
        <div className='homefeature-wrapper'>
            <motion.div className="homefeature-box"
                variants={opacityVariant('left', '10%', 'tween', 0, .5)}
                initial='hidden'
                whileInView='show'
                whileHover={{ y: '-5%' ,
                transition: {
                    delay: 0,
                    duration: .2,
                    type: 'spring',
                }
            }}
            >
                <div className='feature-box-wrapper'>
                    <div>
                        <p> April 16th 2020 </p>
                        <h4> The Mountains </h4>
                        <p> by John Appleseed </p>
                    </div>
                    <div className="line"></div>

                    <div className="homefeature-arrow">
                        <h5> READ STORY </h5>
                        <img src={arrow} alt="" />
                    </div>
                </div>
                
            </motion.div>

            <motion.div className="homefeature-box sunset"
                variants={opacityVariant('left', '10%', 'tween', 0.25, .5)}
                initial='hidden'
                whileInView='show'
                whileHover={{ y: '-5%' ,
                transition: {
                    delay: 0,
                    duration: .2,
                    type: 'spring',
                }
            }}
            >
                <div className='feature-box-wrapper'>
                    <div>
                        <p> April 14th 2020 </p>
                        <h4> Sunset Cityscapes </h4>
                        <p> by Benjamin Cruz </p>
                    </div>
                    <div className="line"></div>

                    <div className="homefeature-arrow">
                        <h5> READ STORY </h5>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </motion.div>

            <motion.div className="homefeature-box voyage"
                variants={opacityVariant('left', '10%', 'tween', 0.5, .5)}
                initial='hidden'
                whileInView='show'
                whileHover={{ y: '-5%' ,
                transition: {
                    delay: 0,
                    duration: .2,
                    type: 'spring',
                }
            }}
            >
                <div className='feature-box-wrapper'>
                    <div>
                        <p> April 11th 2020 </p>
                        <h4> 18 Days Voyage </h4>
                        <p> by Alexei Borodin </p>
                    </div>
                    <div className="line"></div>

                    <div className="homefeature-arrow">
                        <h5> READ STORY </h5>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </motion.div>

            <motion.div className="homefeature-box architecturals"
                variants={opacityVariant('left', '10%', 'tween', 0.75, .5)}
                initial='hidden'
                whileInView='show'
                whileHover={{ y: '-5%' ,
                transition: {
                    delay: 0,
                    duration: .2,
                    type: 'spring',
                }
            }}
            >
                <div className='feature-box-wrapper'

                >
                    <div>
                        <p> April 9th 2020 </p>
                        <h4> Architecturals </h4>
                        <p> by Samantha Brooke </p>
                    </div>
                    <div className="line"></div>

                    <div className="homefeature-arrow">
                        <h5> READ STORY </h5>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

export default HomeFeatures