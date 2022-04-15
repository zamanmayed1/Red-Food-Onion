import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
          return (
                    <div className='footer w-full px-6 md:px-32 bg-gray-900 h-auto text-white py-11'>
                              <div className=' md:grid md:grid-cols-4   '>
                                        <div className='md:col-span-2	'>
                                                  <img className='w-1/4 block mx-auto md:mx-0' src="https://i.ibb.co/QHZFQ2C/logo.png" alt="" />
                                        </div>
                                        <div className=' my-4 '>
                                                  <Link to={'/'}>Explore All Food</Link>
                                                  <Link to={'/'}>Sign up</Link>
                                                  <Link to={'/'}>Login</Link>
                                                  <Link to={'/'}>Api</Link>
                                                  <Link to={'/'}>Buy Now This Shop</Link>

                                        </div>
                                        <div className='my-4'>
                                                  <Link to={'/'}>Read Faq Page</Link>
                                                  <Link to={'/'}>Sell Your Product</Link>
                                                  <Link to={'/'}>Contract With Us</Link>
                                                  <Link to={'/'}>Blogs</Link>
                                                  
                                        </div>

                              </div>
                              <div className='md:grid grid-cols-4 mt-3'>
                                        <h1 className='md:col-span-2'> Copyright by @Zaman Mayed</h1>
                                        <h1> Condition</h1>
                                        <h1> Pricing</h1>
                              </div>
                    </div>
          );
};

export default Footer;