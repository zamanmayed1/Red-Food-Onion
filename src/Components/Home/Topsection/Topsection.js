import React from 'react';

const Topsection = () => {
          return (
                    <div className='bg-top-section w-full h-[500px] py-36 bg-[#FCF4E0] '>
                              <h2 className='text-3xl text-center md:text-black text-blue-900 font-bold '> Best Food Waiting For Your Belly</h2>
                              <div className="grid">
                              <input className='mx-auto mt-8 pl-4 pr-2 w-[450px] h-[45px] rounded-full block' type={'search'} placeholder='search an Item' ></input>
                              </div>
                    </div>
          );
};

export default Topsection;