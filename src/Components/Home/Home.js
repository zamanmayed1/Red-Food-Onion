import React from 'react';
import Choosus from '../Choosus/Choosus';
import Menu from '../Menu/Menu';
import Topsection from './Topsection/Topsection';

const Home = () => {
          return (
                    <div>
                           <Topsection/>   
                           <Menu/>
                           <Choosus/>
                          
                    </div>
          );
};

export default Home;