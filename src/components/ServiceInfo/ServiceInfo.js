import React from 'react';
import './ServiceInfo.css'

const ServiceInfo = (props) => {
  const { service: { name, img, cost, description } } = props
  return (
    <div className='flex mb-5 serviceBox'>
      <div className="image w-1/2 overflow-hidden">
        <img className="h-full w-full object-cover" src={img} alt="" />
      </div>
      <div className='w-1/2 p-3 info'>
        <h1 className='text-xl font-medium'>{name}</h1>
        <h2 className="text-lg font-bold my-2">${cost}</h2>
        <p className="text-md font-medium text-gray-400 italic">{description}</p>
        <button className="px-5 py-2 text-sm tracking-widest text-white btn rounded-full mt-2">Enroll Now</button>
      </div>
    </div>
  );
};

export default ServiceInfo;