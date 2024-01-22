import React from 'react'
import { motion } from 'framer-motion'
import { opacityVariant } from '../../../motion'
import featuresConstants from './featuresimages'

const slides = featuresConstants.slide;

const Featureslide = () => {

  return (
    <div className='sliders'>
        <div className="slides-wrapper container x-padding">
            {
            slides.map((entry, index) => (
                <motion.div className="slide-box" key={index}
                    variants={opacityVariant('left', '100%','spring', 0, 1)}
                    initial='hidden'
                    whileInView='show'
                >

                    <div className="slide-img-wrapper">
                        <img src={entry.img} alt={entry.title} />
                    </div>

                    <div className="slide-box-text">
                        <h3> {entry.title} </h3>
                        <p> {entry.text} </p>
                    </div> 
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Featureslide