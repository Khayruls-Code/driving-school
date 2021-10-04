import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Service = () => {
  const [services, setServices] = useState([])

  //loading data
  useEffect(() => {
    fetch('/serviceData.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className="mt-16 mb-8">
      <div className="container px-6 mx-auto mb-8">
        <h1 className="text-4xl font-semibold text-gray-700 uppercase">Services</h1>
        <p className='text-lg mt-2 text-gray-500'>We provide wonderfull services with a simple cost, all services here</p>
      </div>
      <div className="lg:grid grid-cols-2 gap-4 container mx-auto px-6">
        {
          services.slice(0, 4).map(service => <ServiceInfo
            key={service.key}
            service={service}
          />)
        }
      </div>
      <button className="mx-auto block px-5 py-3 text-md tracking-widest text-white rounded-md mt-5 bg-red-600 hover:bg-red-700 transition duration-500">
        <Link to='/services'>See More</Link>
      </button>
    </div>
  );
};

export default Service;