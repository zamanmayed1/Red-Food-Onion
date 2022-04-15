import React from 'react';
import { Link } from 'react-router-dom';

const Choosus = () => {
          return (
                    <div className=' px-4 md:px-16 mt-5 mb-24'>
                             <h1 className='text-2xl'>Why you choose us ?</h1> 
                             <p className='md:w-2/4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid nam eligendi nisi accusantium fuga tenetur nihil optio esse, possimus impedit ipsam ut praesentium omnis dicta itaque perferendis pariatur dolorem qui!</p>
                             <div className="grid  md:grid-cols-2 lg:grid-cols-3 mt-9 justify-items-center ">
                                       <div className="blog ">
                                                 <img  src="https://i.ibb.co/xh6R0Qm/Rectangle-1.png" alt="" />
                                                 <h3 className='text-2xl my-3 '> Total Clean Shop</h3>
                                                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, suscipit. Dignissimos, aspernatur.</p>
                                                 <Link to={'/'}>Read More</Link>
                                       </div>
                                       <div className="blog">
                                                 <img src="https://i.ibb.co/2SXNTfr/Rectangle-3.png" alt="" />
                                                 <h3 className='text-2xl my-3 '>Fix and Confortable Price</h3>
                                                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, suscipit. Dignissimos, aspernatur.</p>
                                                 <Link to={'/'}>Read More</Link>
                                       </div>
                                       <div className="blog">
                                                 <img src="https://i.ibb.co/Xtff7g5/Rectangle-2.png" alt="" />
                                                 <h3 className='text-2xl my-3 '> Total Clean Shop</h3>
                                                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, suscipit. Dignissimos, aspernatur.</p>
                                                 <Link to={'/'}>Read More</Link>
                                       </div>

                             </div>
                    </div>
          );
};

export default Choosus;