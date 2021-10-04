import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
  const activeStyle = {
    color: "#007cd3",
    borderBottom: "2px solid #007cd3"
  }
  return (
    <div className='shadow sticky top-0 bg-white w-full z-50'>
      <div className='container mx-auto md:flex items-center justify-between px-6 '>
        <div className="logo flex items-center">
          <img className='w-10' src={logo} alt="" />
          <p className='text-3xl font-bold uppercase'>Driving <span>School</span></p>
        </div>
        <ul className='flex items-center'>
          <li>
            <NavLink activeStyle={activeStyle} className='text-lg font-medium py-5 px-2 ml-6 inline-block' to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink className='md:text-lg font-medium py-5 px-2 md:ml-6 inline-block' activeStyle={activeStyle} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className='md:text-lg font-medium py-5 px-2 md:ml-6 inline-block' activeStyle={activeStyle} to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink className='md:text-lg font-medium py-5 px-2 md:ml-6 inline-block' activeStyle={activeStyle} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;