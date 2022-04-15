import React from 'react';
import useDatas from '../../Datas/useDatas';
import Item from '../Items/Item';
import LunchItem from '../Items/LunchItem';

const Lunch = () => {
       
          return (
                    <div className='w-full px-16 my-5 flex justify-center '>
                         <LunchItem/>
                    </div>
          );
};

export default Lunch;