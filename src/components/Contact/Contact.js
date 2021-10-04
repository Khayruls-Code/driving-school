import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact py-16">
      <div className="md:flex container px-4 md:px-12 mx-auto gap-12">
        <div className="left w-full md:w-1/2 text-white">
          <h1 className="text-4xl font-medium">Get Appoinment with Qualified Trainer</h1>
          <p className='text-md my-5'>First things first, you need to make sure that you are comfortable behind the wheel of the car you plan to drive. Therefore, once you are in the driving seat, adjust it as per your height and comfort. Next, adjust the mirrors,Next, adjust the mirrors, both the inside unit and the ones on the outside. Being comfortably seated would help you keep your calm when you start driving for the first time</p>
          <ul>
            <li className='text-lg font-normal my-3'><i className="mr-2 text-green-500 far fa-check-circle"></i>Driving school approch online booking</li>
            <li className='text-lg font-normal my-3'><i className="mr-2 text-green-500 far fa-check-circle"></i>Lessons & cources 7 days a weak</li>
            <li className='text-lg font-normal my-3'><i className="mr-2 text-green-500 far fa-check-circle"></i>Spacial weaked for busy people</li>
            <li className='text-lg font-normal my-3'><i className="mr-2 text-green-500 far fa-check-circle"></i>Road test preparation with 98% success</li>
          </ul>
        </div>
        <div className="right w-full md:w-1/2 bg-white p-5 text-center">
          <h1 className="text-3xl text-medium">Fill The From And <span className='text-red-400'>Get In Touch</span></h1>
          <form action="/">
            <div className="flex gap-4 my-5">
              <input className="w-1/2 p-3 border-2" type="text" placeholder="First Name" />
              <input className="w-1/2 p-3 border-2" type="text" placeholder="Last Name" />
            </div>
            <div className="flex gap-4 my-5">
              <input className="w-1/2 p-3 border-2" type="text" placeholder="Email" />
              <input className="w-1/2 p-3 border-2" type="text" placeholder="Phone Number" />
            </div>
            <div className=" my-5">
              <input className="w-full p-3 border-2" type="text" placeholder="Course You're interested On" />
            </div>
            <div className=" my-5">
              <textarea rows='5' className="w-full p-3 border-2" type="text" placeholder="Massage"></textarea>
            </div>
            <button className="px-5 py-3 text-md tracking-widest text-white btn rounded-md">Conatct Us</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;