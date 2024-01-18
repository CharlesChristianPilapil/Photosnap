import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo-footer.svg'
import facebook from '../../assets/shared/desktop/facebook.svg'
import twitter from '../../assets/shared/desktop/twitter.svg'
import instagram from '../../assets/shared/desktop/instagram.svg'
import youtube from '../../assets/shared/desktop/youtube.svg'
import pinterest from '../../assets/shared/desktop/pinterest.svg'
import arrow from '../../assets/shared/desktop/arrow.svg'
import { motion } from 'framer-motion';
import { slideIn } from '../../motion';




import './footer.css'

const Footer = () => {
  return (
    <footer className='container'>
      <div className="footer-wrapper x-padding">

        <motion.div className='footer-left'
          variants={ slideIn('up', 'spring', 0, 1) }
          initial='hidden'
          whileInView='show'
        >
          <div className='footer-logo'>
            <NavLink to="/"> <img src={logo} alt="footer-logo" /> </NavLink>
          </div>

          <div className="footer-icon-wrapper mobile">
              <div className="footer-icons">
                <img src={facebook} alt="fb-icon" />
                <img src={youtube} alt="yt-icon" />
                <img src={twitter} alt="x-icon" />
                <img src={pinterest} alt="pt-icon" />
                <img src={instagram} alt="ig-icon" />
              </div>
          </div>

          <ul>
              <motion.li
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: .2,
                  }
                }}
              >
                <NavLink to="/"> Home </NavLink>
              </motion.li>

              <motion.li
                  whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <NavLink to="/Stories"> Stories </NavLink>
              </motion.li>
              <motion.li
                  whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <NavLink to="/Features"> Features </NavLink>
              </motion.li>

              <motion.li
                  whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <NavLink to="/Pricing"> Pricing </NavLink>
              </motion.li>

            </ul>


            <div className="footer-icon-wrapper tablet">
              <div className="footer-icons">
                <img src={facebook} alt="fb-icon" />
                <img src={youtube} alt="yt-icon" />
                <img src={twitter} alt="x-icon" />
                <img src={pinterest} alt="pt-icon" />
                <img src={instagram} alt="ig-icon" />
              </div>
            </div>

        </motion.div>

        <motion.div className="footer-right"
          variants={ slideIn('up', 'spring', 0.2, 1) }
          initial='hidden'
          whileInView='show'
        >
          <motion.div className="footer-arrow"
            whileHover={{ x: '5%' }}
          >
            <h4> GET AN INVITE </h4>
            <img src={arrow} alt="arrow-footer" />
          </motion.div>

          <p> Copyright 2024. All Rights Reserved </p>
        </motion.div>



      </div>
    </footer>
  );
}

export default Footer;