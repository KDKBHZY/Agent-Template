import React from 'react';
import Agent from '../components/Agent.js';
// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <Agent />
      <HouseList />
    </div>
  );
};

export default Home;
