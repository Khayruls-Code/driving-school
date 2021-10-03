import React from 'react';
import About from '../About/About';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="hero flex items-center">
        <div className="container mx-auto px-8">
          <p className='text-md font-semibold uppercase text-white'>Driving School</p>
          <h1 className="text-5xl font-semibold text-white py-4 px-5 rounded-lg my-5">Driving makes you smile</h1>
          <h2 className="w-1/3 text-lg font-medium italic">A few basic pointers to have the best time in a car while also keeping in mind your safety and of those around you</h2>
          <button className="px-5 py-3 text-md tracking-widest text-white btn rounded-md mt-5">Conatct Us</button>
        </div>
      </div>
      <About />
      <Service />
    </div>
  );
};

export default Home;