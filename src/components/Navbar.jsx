import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isSticky }) => {  // Receive sticky state as a prop
  const { cart } = useSelector((state) => state);

  return (
    <nav
      className={`flex flex-row justify-between bg-slate-700 items-center h-20 max-w-6xl mx-auto ${isSticky ? 'sticky top-0 z-50' : ''}`}
    >
      <NavLink to="/">
        <div className='ml-5'>
          <img src="../logo.png" alt="" className='h-14' />
        </div>
      </NavLink>
      <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
        <NavLink to="/">
          <p className='hover:scale-105 hover:font-bold hover:text-gray-400 font-semibold'>Home</p>
        </NavLink>
        <NavLink to="/cart">
          <div className='relative'>
            <FaShoppingCart className='text-2xl' />
            {cart.length > 0 && (
              <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full'>
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
