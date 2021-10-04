import React from 'react';
import man from '../../images/man.jpg'

const About = () => {
  return (
    <div className="bg-gray-200 py-16">
      <div className="container px-6 lg:px-40 mx-auto lg:flex justify-between gap-4">
        <div className='w-full lg:w-2/3 bg-white p-5'>
          <h2 className="text-3xl mb-3">About Us</h2>
          <p className="text-gray-500">First things first, you need to make sure that you are comfortable behind the wheel of the car you plan to drive. Therefore, once you are in the driving seat, adjust it as per your height and comfort. Next, adjust the mirrors, both the inside unit and the ones on the outside. Being comfortably seated would help you keep your calm when you start driving for the first time</p>
          <h2 className="text-2xl my-3">Experienced Trainer</h2>
          <h3 className="text-lg italic">Khayrul Islam</h3>
          <p className="text-gray-500">Mr. Khayrul is a Experienced car Trainer, He have 10 years experiences of car driving. He teach you vary smothly and you feel comfortable and you will your training time we must say.</p>
          <h3 className="text-lg italic">Mr. Sohel Rana</h3>
          <p className="text-gray-500">Mr. Suhel is a Experienced car Trainer, He have 10 years experiences of car driving. He teach you vary smothly and you feel comfortable and you will your training time we must say.</p>
        </div>
        <div className='mt-5 lg:mt-0 w-full md:w-1/3'>
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;