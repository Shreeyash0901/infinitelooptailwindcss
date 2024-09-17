import React from 'react';
import NavBar from './NavBar';
import img from '../img/infinite-loop-01.jpg'; 
import { ChevronDownIcon } from '@heroicons/react/24/outline';
const Home = () => {
  return (
    <div 
    className='section'
      style={{ 
        backgroundImage: `url(${img})`, 
        height: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
       
      }}
    >
      <NavBar />
      <div className="display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'">
    <div className="flex-1 flex flex-col items-center justify-center space-y-3 text-white mt-20 ">
        <h1 className="text-4xl font-bold mb-4">Infinite Loop</h1>
        <p className="text-lg mb-2">Bootstrap 4.0 parallex theam</p>
        <p className="text-lg mb-2">Free html template by Tooplate</p>
      
        <button 
          className="flex items-center px-6 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-secondary transition-colors cursor-pointer "
        >
           <ChevronDownIcon className="h-6 w-6" />
        </button>
    </div>
        </div>
      
    </div>
  );
};

export default Home;
