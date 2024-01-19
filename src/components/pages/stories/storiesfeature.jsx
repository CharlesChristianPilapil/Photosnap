import React, { useState, useEffect } from 'react'
import image from '../../../assets/stories/mobile/moon-of-appalacia.jpg';
import arrow from '../../../assets/shared/desktop/arrow.svg';
import { blueVariant } from '../../../motion';
import { motion } from 'framer-motion';
import featureJSON from './stories.json'
import storiesimages from './storiesImages';

const mobilebackground = Object.values(storiesimages.mobile);
const desktopbackground = Object.values(storiesimages.desktop);

const Storiesfeature = () => {

    const [isBelow724, setIsBelow724] = useState(window.innerWidth < 724);
    const [isSmall, setIsSmall] = useState(true);
  
    useEffect(() => {
      const handleResize = () => {
        const newIsBelow724 = window.innerWidth < 724;
        setIsBelow724(newIsBelow724);
        setIsSmall(newIsBelow724);
      };
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


  return (
    <div className='stories-feature'>

        <div className="stories-feature-wrapper">


            {
                featureJSON.map((data, index) => {
                    return (
                        <motion.div className="stories-feature-box"
                            variants={blueVariant('down', 0,'spring', 0.2, 1)}
                            initial='hidden'
                            whileInView='show'
                            key={data.id}
                        >
            
                            <motion.div className="stories-box-wrapper" style={{ backgroundImage: `url(${isSmall ? mobilebackground[index] : desktopbackground[index]})` }}
                                whileHover={{
                                    y: '-5%'
                                }}
                            >
                
                                <div className="overlay"> 
                                </div>
            
                                <div className="feature-info">
                                    <div>
                                        <p> {data.date} </p>
                                        <h3> {data.title} </h3>
                                        <p> {data.author} </p>
                                    </div>
            
                                    <div className="line"> 
                                    </div>
            
                                    <div className="stories-feature-arrow">
                                        <h5> READ STORY </h5>
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                </div>
            
                            </motion.div>
            
                        </motion.div>
                    )
                })
            }


        </div>

    </div>
  )
}

export default Storiesfeature