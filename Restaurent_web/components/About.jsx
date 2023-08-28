import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <main id='about' className='flex flex-col lg:flex-row items-center justify-between h-[100vh]'>
      <div className='flex w-full flex-col gap-5 justify-center items-center lg:w-2/3 bg-gray-100 h-full'>
        <h1 className='text-4xl md:text-6xl font-sans w-full text-center'>
          Made With Love. Simply Delicious
        </h1>
        <p className='text-lg md:text-xl text-center w-full'>
          Discover culinary bliss at Foody. With a passion for taste and a flair for hospitality, we offer a menu of exquisite dishes crafted from the finest ingredients.
          Join us for an unforgettable dining experience that celebrates flavors, cultures, and moments.
          Welcome to a world of delectable delights.
        </p>
        <Link legacyBehavior href='/Menus'>
          <a href="" className='rounded-lg py-2 px-8 bg-blue-700 text-white'>Menu</a>
        </Link>
      </div>
      <div className='h-[50%] w-[100%] lg:w-[50%] lg:h-[100vh] object-contain'>
        <img src='/assests/menu.webp' className='h-full object-cover w-[100%]' />
      </div>
    </main>

  )
}
export default About;
