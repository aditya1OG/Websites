import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsYoutube, BsWhatsapp } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div id='footer' className='w-full bg mt-16'>
        <Link legacyBehavior href=''>
          <a href='#' className='bg-[#232F3E] p-3 font-semibold text-white flex items-center justify-center'>Back to top</a>
        </Link>
        <footer className="bg-[#131921] text-white px-4 py-8">
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 ml-32 sm:ml-0">
              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                <ul className="space-y-4 text-xs text-gray-500">
                  <li className='hover:underline'><a href="#">123-456-789</a></li>
                  <li className='h- hover:underline'><a href="#">adityatiwari9410@gmail.com</a></li>
                </ul>
              </div>

              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold mb-4">Make Money with Us</h2>
                <ul className="space-y-4 text-xs text-gray-500">
                  <li className='hover:underline md:w-[50%] sm:w-full w-[50%]'><a href="#">Patel Nagar Dehradun, Near lal Pull, Pin-248001</a></li>
                </ul>
              </div>

              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold mb-4">Opening Hours</h2>
                <ul className="space-y-4 text-xs text-gray-500 ">
                  <li className='hover:underline'><a href="#">Mon - Fri: 8am - 8pm</a></li>
                  <li className='hover:underline'><a href="#">Saturday: 9am - 7pm</a></li>
                  <li className='hover:underline'><a href="#">​Sunday: 9am - 8pm</a></li>
                </ul>
              </div>
            </div>
            <div className='text-white flex gap-6 mb-4'>
              <p className='text-xs text-gray-500 hover:underline cursor-pointer'>Terms of Use</p>
              <p className='text-xs text-gray-500 hover:underline cursor-pointer'>Privacy Policy</p>
            </div>
          </div>
        </footer>
        <div className='bg-[#232F3E]  w-full text-white flex items-center justify-center flex-col sm:flex-row gap-4 sm:gap-[60px] lsm:gap-20 h-16'>
          <div className='text-white flex gap-6'>
            <FaFacebookF className='cursor-pointer' />
            <BsTwitter className='cursor-pointer' />
            <FaInstagramSquare className='cursor-pointer' />
            <BsYoutube className='cursor-pointer' />
            <BsWhatsapp className='cursor-pointer' />
          </div>
          <p className='text-xs hover:underline cursor-pointer text-gray-400'>&copy;{new Date().getFullYear()} Foody.com, Inc. or its affiliates. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer