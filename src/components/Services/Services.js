import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Services = () => {
  const [services, setServices] = useState([])

  //Loading Data
  useEffect(() => {
    fetch('/serviceData.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <div className="search-box my-5 text-center">
        <input className='w-1/2 mx-auto py-2 px-3 rounded-full outline-none' type="text" placeholder='Search Services...' />
      </div>
      <div className="lg:grid grid-cols-2 gap-4 container mx-auto px-6">
        {
          services.map(service => <ServiceInfo
            key={service.key}
            service={service}
          />)
        }
      </div>
    </div>
  );
};

export default Services;