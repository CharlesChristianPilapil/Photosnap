import React from 'react';
import check from '../../../assets/pricing/desktop/check.svg';
import pricingConstants from './pricingConstants';
import { motion } from 'framer-motion';

const tableData = pricingConstants.table;
console.log(tableData);

const Pricingtable = () => {
  return (
    <div className='table x-padding'>
      <div className="table-wrapper">

        <motion.h1
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{
                x: 0, opacity: 1,
                transition: {
                    delay: 0,
                    duration: 1,
                    type: 'spring'
                }
            }}
        > COMPARE  </motion.h1>
        <motion.table className='mobile-table'
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{
                x: 0, opacity: 1,
                transition: {
                    delay: 0,
                    duration: 1,
                    type: 'spring'
                }
            }}
        >
          <thead>
            <tr className='header'>
              <th colSpan={3}> THE FEATURES </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((entry, index) => (
              <React.Fragment key={index}>
                <tr className='mobile-th'>
                  <th colSpan={3}> {entry.title} </th>
                </tr>
                <tr className='mobile-table-grid'>
                  <td className='td'>
                    <table>
                      <tbody>
                        <tr>
                          <td className='mobile-th'> BASIC </td>
                        </tr>
                        <tr>
                          <td>{entry.basic ? <img src={check} alt="check" /> : ''}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className='td'>
                    <table>
                      <tbody>
                        <tr>
                          <td className='mobile-th'> PRO </td>
                        </tr>
                        <tr>
                          <td>{entry.pro ? <img src={check} alt="" /> : ''}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className='td'>
                    <table>
                      <tbody>
                        <tr>
                          <td className='mobile-th'> BUSINESS </td>
                        </tr>
                        <tr>
                          <td>{entry.business ? <img src={check} alt="" /> : ''}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </motion.table>

        <div className="tablet-table-wrapper">
            <motion.table className='tablet-table'
                initial={{ x: '-100%', opacity: 0 }}
                whileInView={{
                    x: 0, opacity: 1,
                    transition: {
                        delay: 0,
                        duration: 1,
                        type: 'spring'
                    }
                }}
            >
                <thead> 
                    <tr className='tablet-table-botder-bottom'>
                        <th className='tablet-table-header'> THE FEATURES </th>
                        <th> Basic </th>    
                        <th> Pro </th>    
                        <th> Business </th>  
                    </tr>  

                </thead>

                <tbody>

                    {
                        tableData.map((entry, index) => {
                            return (
                                <tr key={index}> 
                                    <td className='tablet-table-header'> {entry.title} </td>
                                    <td> {entry.basic ? <img src={check} alt="" /> : ''} </td>
                                    <td> {entry.pro ? <img src={check} alt="" /> : ''} </td>
                                    <td> {entry.business ? <img src={check} alt="" /> : ''} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </motion.table>
        </div>

      </div>
    </div>
  );
};

export default Pricingtable;
