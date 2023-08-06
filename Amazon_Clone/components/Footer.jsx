import Link from 'next/link'
import React from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'
import LanguageSelector from './LanguageSelector'
import BottomFooter from './BottomFooter'
const Footer = () => {
  return (
    <>
      <div className='min-w-[1000px] bg-amazon_light mt-8'>
        <Link legacyBehavior href=''>
          <a href='#' className='p-3 font-semibold text-white flex items-center justify-center'>Back to top</a>
        </Link>
        <footer className="bg-gray-900 text-gray-400 px-4 py-8 ">
          <div className="flex flex-col items-center justify-center mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold mb-4">Get to Know Us</h2>
                <ul className="space-y-4 text-xs text-gray-500">
                  <li className='hover:underline'> <a href="#">About Us</a></li>
                  <li className='hover:underline'><a href="#">Careers</a></li>
                  <li className='hover:underline'><a href="#">Press Releases</a></li>
                  <li className='hover:underline'><a href="#">Amazon Science</a></li>
                </ul>
              </div>

              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold mb-4">Connect with Us</h2>
                <ul className="space-y-4 text-xs text-gray-500">
                  <li className='hover:underline'><a href="#">Facebook</a></li>
                  <li className='hover:underline'><a href="#">Twitter</a></li>
                  <li className='hover:underline'><a href="#">Instagram</a></li>
                </ul>
              </div>

              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold mb-4">Make Money with Us</h2>
                <ul className="space-y-4 text-xs text-gray-500">
                  <li className='hover:underline'><a href="#">Sell on Amazon</a></li>
                  <li className='hover:underline'><a href="#">Sell under Amazon Accelerator</a></li>
                  <li className='hover:underline'><a href="#">Protect and Build Your Brand</a></li>
                  <li className='hover:underline'><a href="#">Amazon Global Sellingr</a></li>
                  <li className='hover:underline'><a href="#">Become an Affiliate</a></li>
                  <li className='hover:underline'><a href="#">Fulfilment by Amazon</a></li>
                </ul>
              </div>

              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold mb-4">Let Us Help You</h2>
                <ul className="space-y-4 text-xs text-gray-500 ">
                  <li className='hover:underline'><a href="#">Amazon and COVID-19</a></li>
                  <li className='hover:underline'><a href="#">Your Account</a></li>
                  <li className='hover:underline'><a href="#">Returns Centre</a></li>
                  <li className='hover:underline'><a href="#">500% Purchase Protection</a></li>
                  <li className='hover:underline'><a href="#">Amazon App Download</a></li>
                  <li className='hover:underline'><a href="#">Help</a></li>
                </ul>
              </div>
            </div>
            <hr className="w-full my-8 border-gray-500" />
            <div className='flex gap-8 items-center justify-center'>
              <div className='px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]'>
                <Image className='w-16 object-cover mt-3 lg:w-20' src={logo} alt="logo" />
              </div>
              <LanguageSelector />
            </div>
            <div className="flex mt-1">
              <ul className="space-y-4 space-x-5 text-xs text-gray-500 flex">
                <li className='hover:underline mt-4'><a href="#">Australia</a></li>
                <li className='hover:underline'><a href="#">Brazil</a></li>
                <li className='hover:underline'><a href="#">Canada</a></li>
                <li className='hover:underline'><a href="#">China</a></li>
                <li className='hover:underline'><a href="#">France</a></li>
                <li className='hover:underline'><a href="#">itely</a></li>
                <li className='hover:underline'><a href="#">Japan</a></li>
                <li className='hover:underline'><a href="#">Mexico</a></li>
                <li className='hover:underline'><a href="#">Netheralands</a></li>
                <li className='hover:underline'><a href="#">Poland</a></li>
                <li className='hover:underline'><a href="#">Singapore</a></li>
                <li className='hover:underline'><a href="#">Spain</a></li>
                <li className='hover:underline'><a href="#">Turkey</a></li>
                <li className='hover:underline'><a href="#">United Arab Emirates</a></li>
              </ul>
            </div>
          </div>
        </footer>
        <BottomFooter />
      </div>
    </>
  )
}

export default Footer