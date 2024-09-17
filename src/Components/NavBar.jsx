import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Use the correct imports for Heroicons v2

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar inset-x-0 top-0 z-50 flex items-center justify-between p-6 lg:px-8 lg:flex-1 font-black text-xl text-white'>
      <div className='flex-1'>
        <h1>Infinite Loop</h1>
      </div>
      <div className='hidden lg:flex lg:items-center lg:space-x-6'>
        <a href="#" className='p-2.5'>Home</a>
        <a href="#" className='p-2.5'>What We Do</a>
        <a href="#" className='p-2.5'>Testimonial</a>
        <a href="#" className='p-2.5'>Gallery</a>
        <a href="#" className='p-2.5'>Contact</a>
      </div>
      <div className='lg:hidden'>
        <button onClick={toggleMenu} className='p-2.5'>
          {isOpen ? <XMarkIcon className='h-6 w-6' /> : <Bars3Icon className='h-6 w-6' />}
        </button>
      </div>
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center lg:hidden'>
          <a href="#" className='p-2.5 text-white' onClick={toggleMenu}>Home</a>
          <a href="#" className='p-2.5 text-white' onClick={toggleMenu}>What We Do</a>
          <a href="#" className='p-2.5 text-white' onClick={toggleMenu}>Testimonial</a>
          <a href="#" className='p-2.5 text-white' onClick={toggleMenu}>Gallery</a>
          <a href="#" className='p-2.5 text-white' onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
