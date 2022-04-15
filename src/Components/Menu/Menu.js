import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Customlink from '../Customlink';

const Menu = () => {
          return (
                    <div className='menu px-16 py-6 w-full '>
                              <nav className='w-2/4 mx-auto flex justify-center'>
                              <Customlink to={'breakfast'}>Breakfast</Customlink>
                              <Customlink to={'lunch'}>Lunch</Customlink>
                              <Customlink to={'dinner'}>Dinner</Customlink>
                              </nav>
                                 <Outlet/>
                                  <button className='block mx-auto bg-blue-500 px-2 py-2 rounded-lg text-white'>Checkout Your Food</button>
                           
                    </div>
          );
};

export default Menu;