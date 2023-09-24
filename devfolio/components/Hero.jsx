import React from 'react'
import '../app/globals.css'
import Link from 'next/link'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { FaHireAHelper } from 'react-icons/fa'

const Hero = () => {
  return (
    <>
      <div className='z-[1] flex flex-col lg:flex-row bg-black text-white justify-center gap-20 lg:justify-around items-center h-[130vh] sm:h-[140vh] md:h-[150vh] lg:h-screen'>
        <div className='flex flex-col text-center items-center justify-center gap-5'>
          <h1 className='bg-[#131921] text-white py-2 px-4 font-nunito animate-fadeIn-1'>Welcome to my Portfolio</h1>
          <h1 className='text-lg font-medium animate-fadeIn-2'>Hellow It's Me</h1>
          <h1 className='text-2xl font-bold animate-fadeIn-3'>Aditya Tiwari</h1>
          <h1 className='font-semibold text-lg'>And I'm <span className='animate-fadeIn-4 font-bold '>FrontEnd Developer</span></h1>
          <p className='desc w-[70%] mdl:w-[50%] text-[15px] font-nunito animate-fadeIn-5'>Welcome to my front-end developer portfolio. I'm a passionate and aspiring front-end developer showcasing my projects and dedication to creating engaging web experiences.</p>
          <div className='flex items-center justify-center gap-4'>
            <Link legacyBehavior href='https://www.dropbox.com/scl/fi/m54n9tl9y3zqt6dohj09v/ADITYA-Resume.pdf?rlkey=5x9vkz8o50g0vps7hctkv6d0x&dl=0' className='mt-10'>
              <a href='https://www.dropbox.com/scl/fi/m54n9tl9y3zqt6dohj09v/ADITYA-Resume.pdf?rlkey=5x9vkz8o50g0vps7hctkv6d0x&dl=0' className='text-white border rounded-2xl px-3 py-2 flex gap-2 items-center justify-center '>Download CV <AiOutlineCloudDownload className='down-arrow' /></a>
            </Link>
            <Link legacyBehavior href="mailto:adityatiwari9410@gmail.com" className='mt-10'>
              <a href="mailto:adityatiwari9410@gmail.com" className='text-white border rounded-2xl px-3 py-2 flex gap-2 items-center justify-center '>Hire Me<FaHireAHelper className='down-arrow' /></a>
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center mr-0 lg:mr-24'>
          <img src="../assests/pg.png" alt="" className='image object-contain flex items-center justify-center w-[70%] lg:w-full' />
        </div>
      </div>
    </>
  )
}

export default Hero