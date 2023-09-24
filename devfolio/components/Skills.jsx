'use client'

import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import '../app/globals.css'

const Skills = () => {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        setIsSkillsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Element name="skills">
        <div
          id="skills"
          className={`border-t h-screen text-white flex flex-col items-center justify-center gap-10 ${isSkillsVisible ? '.animate-fadeIn-8 ' : ''
            }`}
        >
          <div className={`flex flex-col text-center gap-4 ${isSkillsVisible ? 'animate-fadeIn-8' : ''}`}>
            <h1 className='text-[38px] md:text-[48px] font-sans2'>My Skills & Knowledge</h1>
            <h1 className='text-lg md:text-xl font-poppines2'>
              Technologies and languages that I use to make my projects every day
            </h1>
          </div>
          <div className={`mt-10 grid grid-cols-3 md:grid-cols-4 place-items-center gap-16 ${isSkillsVisible ? 'animate-fadeIn-8' : ''}`}>
            <img src="/assests/html.svg" alt="" className='w-12 sm:w-20 h-12 sm:h-20' />
            <img src="/assests/css.svg" alt="" className='w-12 sm:w-20 h-12 sm:h-20' />
            <img src="/assests/javascript.svg" alt="" className='w-12 sm:w-20 h-12 sm:h-20' />
            <img src="/assests/bootstrap.svg" alt="" className='w-12 sm:w-20 h-12 sm:h-20' />
            <img src="/assests/nextjs.svg" alt="" className='w-12 sm:w-20 h-12 sm:h-20' />
            <img src="/assests/react.svg" alt="" className='w-12 sm:w-20 h-12 sm:h-20' />
            <img src="/assests/tailwindcss.svg" alt="" className='w-16 sm:w-20 h-16 sm:h-20' />
            <img src="/assests/sass.svg" alt="" className='w-12 sm:w-20 h-12 sm:h-20' />
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Skills;
