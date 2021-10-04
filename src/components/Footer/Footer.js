import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css'

const Footer = () => {
  return (
    <div className="text-center pt-12 footer">
      <div className="logo flex items-center w-max m-auto">
        <img className='w-10' src={logo} alt="" />
        <p className='text-3xl font-bold uppercase '>Driving <span>School</span></p>
      </div>
      <p className='text-white w-1/3 mx-auto my-3'>This would be your best training place, We have been working succeccfully since 10 years</p>
      <h1 className='text-xl text-white font-medium'>Subscribe Our Newsletter</h1>
      <div className="newsBox w-6/12 bg-white mx-auto my-3 h-12 flex">
        <input className="px-5 outline-none w-full h-full bg-transparent" type="text" placeholder="Enter Your Email" />
        <button className="w-24 text-white text-2xl bg-green-600 h-full"><i className="fas fa-paper-plane"></i></button>
      </div>
      <h1 className='text-xl text-white font-medium mt-5'>Social Media</h1>
      <div className="social">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-google-plus"></i>
        <i className="fab fa-linkedin"></i>
      </div>
      <p className="py-6 text-white font-normal text-md copyRight mt-5">&copy; Copy Right in 2021 by <a href="/">Colourless Khayrul</a></p>
    </div>
  );
};

export default Footer;