import React, { useState } from 'react';
import useDatas from '../../Datas/useDatas';
import Item from './Item';

const BreakfastItems = () => {
          const [breakfast] = useDatas()
          return (
                    <div className='grid mt-7 md:grid-cols-3 lg:gap-32 md:gap-32 gap-14'> 
                            {
                                breakfast.map(food => <Item key={food.name} food={food}></Item>)
                            }  
                    </div>
          );
};

export default BreakfastItems;