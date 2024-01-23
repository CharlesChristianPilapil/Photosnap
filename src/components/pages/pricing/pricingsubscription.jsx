import React, { useState } from 'react';
import pricingConstants from './pricingConstants';
import { motion } from 'framer-motion'; 


const subs = pricingConstants.subscription;

console.log(subs)

const Pricingsubscription = () => {
    const [isToggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!isToggled);
    };

    return (
        <div className='subscription'>
            <div className="price-toggle-wrapper">
                <h4 className={!isToggled ? 'active' : ''} onClick={handleToggle}> Monthly </h4>
                <div className='toggle-div' onClick={handleToggle}>
                    <div className={`toggle-box ${isToggled ? 'active' : ''}`}></div>
                </div>
                <h4 className={isToggled ? 'active' : ''} onClick={handleToggle}> Yearly </h4>
            </div>

            <div className="offer-wrapper container x-padding">
                {
                    subs.map((entry, index) => {
                        return (
                            <motion.div className="offer-boxes" key={index}
                                whileHover={{ scale: 1.1 }}
                            >
                                <motion.div className="offer-boxes-wrapper"
                                    initial={{
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        transition: {
                                            delay: index / 10,
                                            duration: 1
                                        }
                                    }}
                                >
                                    <div className='info'>
                                        <h2> {entry.offer} </h2>
                                        <p> {entry.description} </p>
                                    </div>
            
                                    <div className='price'>
                                        <h1> {!isToggled ? entry.monthly : entry.yearly} </h1>
                                        <p> Per { !isToggled ? 'Month' : 'Year' } </p>
                                    </div>
            
                                    <button> PICK PLAN </button>
                                </motion.div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Pricingsubscription;