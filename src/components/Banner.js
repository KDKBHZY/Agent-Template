import React from 'react';

import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';
// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/remax.jpg';
const Banner = () => {
  return (
    <section className='h-full  mb-8'>
<div class="relative bg-gradient-to-r from-purple-600 to-blue-600full h-[564px] text-white overflow-hidden">
      
      <div class="absolute inset-0">
        <img src={Image} alt="Background Image" class="object-cover object-center w-full h-full" />
        <div class="absolute inset-0 bg-black opacity-80 shadow-xl"></div>
      </div>
      <header className='relative z-10py-6 mb-12  '>
      
      <div className='container mx-auto flex justify-between items-center'>
        
        <Link to='/'>
          <img src={Logo} alt=''  className="max-w-[220px]" />
        </Link>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
      
    </header>
      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
          <span className='text-violet-700'>Buy</span> Your Dream House With
          Us.
        </h1>
        <p className='max-w-[480px] mb-8'>
          Powerful, self-serve product and growth analytics to help you
          convert, engage, and retain more.
        </p>
        <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
      </div>
    
    </div>
      <Search />
    </section>
  );
};

export default Banner;
