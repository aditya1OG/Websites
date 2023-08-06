import React from 'react'
// import '../app/globals.css'
import { LuMenu } from 'react-icons/lu'
const BottomHeader = () => {
  return (
    <nav className='flex min-w-[1000px] items-center bg-amazon_light text-white '>
      <p className='text-lg flex border border-transparent hover:border-white duration-300 cursor-pointer h-9 px-2 font-semibold items-center gap-1'>
        <LuMenu className='text-2xl' />All
      </p>
      <div className='container'>
        <p className='border border-transparent hover:border-white duration-300 cursor-pointer px-2 h-9 flex items-center font-medium'>Amazon miniTV</p>
        <p className='border border-transparent hover:border-white duration-300 cursor-pointer px-2 h-9 flex items-center font-medium'>Sell</p>
        <p className='border border-transparent hover:border-white duration-300 cursor-pointer px-2 h-9 flex items-center font-medium'>Best Sellers</p>
        <p className='border border-transparent hover:border-white duration-300 cursor-pointer px-2 h-9 flex items-center font-medium'>Today's Deals</p>
        <p className='border border-transparent hover:border-white duration-300 cursor-pointer px-2 h-9 flex items-center font-medium'>Mobiles</p>
        <p className='border border-transparent hover:border-white duration-300 cursor-pointer px-2 h-9 items-center font-medium hidden md:inline-flex'>New Releases</p>
        <p className='border border-transparent hover:border-white duration-300 cursor-pointer px-2 h-9 items-center font-medium hidden md:inline-flex'>Customer Service</p>
        <p className='border border-transparent hover:border-white duration-300 cursor-pointer px-2 h-9 items-center font-medium hidden md:inline-flex'>Prime</p>
        <p className='border border-transparent hover:border-white duration-300 cursor-pointer px-2 h-9 items-center font-medium hidden md:inline-flex'>Electronics</p>
        <p className='border border-transparent hover:border-white duration-300 cursor-pointer px-2 h-9 items-center font-medium hidden md:inline-flex'>Gift Ideas</p>
      </div>
      <p className='ml-auto whitespace-nowrap font-medium border border-transparent hover:border-white duration-300 cursor-pointer px-2 h-9 flex items-center'> New Launches from Mobiles, Electronics & more | shop Now</p>
    </nav>
  );
}

export default BottomHeader;