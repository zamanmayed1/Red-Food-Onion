import React from 'react';
import useDatas from '../../Datas/useDatas';
import Item from './Item';

const Dinneritems = () => {
          const [,,dinner] = useDatas()
          return (
                    <div className='grid mt-7 md:grid-cols-3  lg:gap-32 md:gap-32 gap-14'>
                         {
                              dinner.map(food => <Item key={food.name} food={food}></Item>)
                         }     
                    </div>
          );
};

export default Dinneritems;