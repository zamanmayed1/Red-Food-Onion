import React from 'react';


const Item = ({food}) => {
         const {name,img,des,price} = food
          return (
                    <div className='card text-center p-3'>
                              <img className='w-3/4 block mx-auto' src={img} alt="" />
                              <h3 className='font-bold'>{name}</h3>
                              <p>{des.slice(0,45)}</p>
                              <p className='text-xl font-bold font-mono'>${price}</p>
                              <button className='block mx-auto mt-2 px-2 py-1 rounded-full bg-yellow-100 ring-1 text-gray-900'>Add Item</button>
                    </div>
          );
};

export default Item;