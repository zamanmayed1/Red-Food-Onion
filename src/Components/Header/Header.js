import React from 'react';
import { Link } from 'react-router-dom';
import Customlink from '../Customlink';

const Header = () => {
          return (
                    <div className='px-16 p-3 flex justify-between sticky top-0 bg-white border-b-2'>
                        <div className="logo w-2/4">
                        <Link to={'/'}><img className='w-32' src="https://i.ibb.co/1msXhss/logo2.png" alt="" /> </Link>  
                                  </div>   
                              <div className="nav flex w-2/4 justify-end font-bold">
                                        <img className='w-6 mx-4 h-6' src="https://i.ibb.co/ZmvNscd/Path-1.png" alt="" />
                                      
                                        <Customlink className='mx-4' to={'/login'}>Login</Customlink>
                                        <Customlink className='mx-4' to={'/signup'}>Sign Up</Customlink>

                              </div>
                    </div>
          );
};

export default Header;