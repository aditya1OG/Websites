'use client'

import '../app/globals.css'
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { FaBookReader } from 'react-icons/fa';
import { BsFillFilePersonFill } from 'react-icons/bs';
// import '../styles/globals.css'; // Import your global CSS

const About = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setIsAboutVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Element name="about">
        <div
          id="about"
          className={`border-t flex flex-col h-[140vh] lg:h-screen text-white text-center gap-2 ${
            isAboutVisible ? 'animate-fadeIn-7' : ''
          }`}
        >
          <h1 className='text-xs mt-8'>Get to know more</h1>
          <h1 className='text-3xl font-sans2 shadow-2xl'>About Me</h1>
          <div className='flex items-center justify-center h-screen mt-16'>
            <div className='flex items-center justify-center gap-20 lg:gap-32 flex-col lg:flex-row'>
              <div className='flex items-center'>
                <img src="/assests/dev.png" alt="" className='w-72 md:w-96 ml-0 lg:ml-24 lg:w-full' />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex items-center justify-center gap-10 md:flex-row flex-col'>
                  <div className={`border rounded-2xl flex flex-col items-center justify-center gap-3 h-36 w-72 ${isAboutVisible ? 'animate-fadeIn-7' : ''}`}>
                    <BsFillFilePersonFill />
                    <h1 className='text-xl font-bold'>Experience</h1>
                    <h1 className='text-xs text-gray-400'>Fresher</h1>
                    <h1 className='text-xs text-gray-400'>Frontend Development</h1>
                  </div>
                  <div className={`border rounded-2xl flex flex-col items-center justify-center gap-3 h-36 w-72 ${isAboutVisible ? 'animate-fadeIn-7' : ''}`}>
                    <FaBookReader />
                    <h1 className='text-xl font-bold'>Education</h1>
                    <h1 className='w-[70%] text-gray-400 text-xs'>Bsc(Science) Bachelors Degree</h1>
                    <h1 className='w-[70%] text-gray-400 text-xs'>MCA Masters Degree</h1>
                  </div>
                </div>
                <div className={`text-center mt-10 flex items-center justify-center ${isAboutVisible ? 'animate-fadeIn-7' : ''}`}>
                  <p className='text-xs md:text-sm text-center w-[60%] lg:w-[40%] text-gray-400'>
                    I'm fresher, and I don't have any work experience in any company now, but
                    I've a good understanding and knowledge in frontend development, and I've created many projects using React.js and Next.js, and for styling, I'm using Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default About;
