import React from 'react';

import agent from '../assets/img/agents/agent1.png';
// import link
import { Link } from 'react-router-dom';
// import logo
const Agent = () => {
  return (
    <section className='h-full  mb-16 mt-8'>
<div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto p-6">
  {/* Image Section */}
  <div className="w-full md:w-1/3">
    <img
      src={agent}
      alt="Krystina"
      className="rounded-lg shadow-lg object-cover w-full"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-2/3">
    <h2 className="text-3xl font-bold">Meet Patricia</h2>
    <hr className="my-4 border-gray-300" />
    <p className="text-gray-600">
      Since 2021, Patricia has rapidly made a name for herself in the real estate industry. However, 
      her journey extends far beyond that, as she spent nearly two decades working in Property and 
      Asset management positions dating back to 2003. 
    </p>
    <a
      href="#"
      className="mt-4 inline-block text-blue-600 font-bold uppercase tracking-wide hover:underline"
    >
      Read More
    </a>
  </div>
</div>

    </section>
  );
};

export default Agent;
