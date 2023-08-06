"use client"

import { BiCaretDown } from 'react-icons/bi';
import { BsCart4 } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl'
import logo from '../public/logo.png'
import Image from 'next/image';
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';

const Header = () => {

    return (
        <nav className='min-w-[1000px] lg:h-20 h-28 bg-amazon_blue text-lightText sticky '>
            <div className='h-full w-full flex-wrap mx-auto lg:inline-flex items-center justify-center space-y-6 lg:space-y-0 gap-1 mdl:gap-3'>
                {/* logo */}
                <div className='flex items-center flex-1 justify-around lg:justify-center pt-3 lg:pt-0 lg:space-x-3 space-x-0'>
                    <div className='px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]'>
                        <Image className='w-20 object-cover mt-1 lg:w-28' src={logo} alt="logo" />
                    </div>
                    {/* Location */}
                    <div className='px-2 border gap-1 inline-flex border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%]'>
                        <SlLocationPin />
                        <div className='whitespace-nowrap text-[6px] sm:text-[8px] md:text-[10px] mdl:text-xs'>
                            <p>Hello</p>
                            <p className='text-[6px] sm:text-[8px] md:text-[10px] mdl:text-xs lg:text-sm text-white font-bold'>Select your address</p>
                        </div>
                    </div>

                    {/* Searchbar */}
                    <SearchBar />
                </div>
                {/* Language */}
                <div className='flex items-center justify-around lg:space-x-4 space-x-0'>
                    <LanguageSelector />
                    {/* Sign-in */}
                    <div className='whitespace-nowrap px-2 border text-xs flex-col inline-flex border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%]'>
                        <p className=' text-[6px] sm:text-[8px] md:text-[10px] mdl:text-xs'>Hello, sign in</p>
                        <p className='flex text-[6px] sm:text-[8px] md:text-[10px] mdl:text-xs items-center justify-center font-bold text-white'>Account & Lists
                            <span><BiCaretDown />
                            </span>
                        </p>
                    </div>
                    {/* Orders */}
                    <div className='px-2 border text-xs flex-col inline-flex border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%]'>
                        <p className='text-xs'>Returns</p>
                        <p className='text-sm text-white font-bold whitespace-nowrap'>& Orders</p>
                    </div>
                    {/* Cart */}
                    <div className='relative gap-1 flex items-center border-transparent duration-300 hover:border-white px-2 h-[70%] border justify-center mr-2 cursor-pointer'>
                        <span className='h-full text-white text-3xl flex items-center'><BsCart4 /></span>
                        <span className='absolute text-amazon_yellow text-lg -top-1 left-[18px]'>0</span>
                        <p className='hidden mdl:inline-flex text-sm text-white mt-3 font-medium'>Cart</p>
                    </div>
                </div>
            </div >
        </nav >

    );
};

export default Header;
