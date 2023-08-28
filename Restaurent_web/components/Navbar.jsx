"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu'


function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className='w-[100%] h-20 md:w-[80%] bg-white text-black shadow-2xl py-3 md:py-0 md:items-center flex justify-center gap-2 md:gap-4 rounded-none md:rounded-full'>
            <nav className="w-[100%] md:w-[75%] items-center justify-center">
                <div className="md:items-center md:flex gap-24 md:justify-around">
                    <div className="flex items-center justify-between md:block">
                        <Link className='flex items-center md:mt-1 justify-center gap-2 ' href="/">
                            <h1 className="shadow-xs font-medium text-3xl md:text-xl ">F<span className=' text-xl md:text-sm  text-red-600 font-extrabold'>Ꝏ</span>dy</h1>
                            <Image src='/assests/logo.jpg' width={35} height={35} alt='logo' />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <Image src="/assests/close.svg" width={30} height={30} alt="logo" />
                                ) : (
                                    <Image
                                        src="/assests/Hamburger-menu.svg"
                                        width={30}
                                        height={30}
                                        alt="logo"
                                        className="  focus:border-none active:border-none"
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className=''>
                        <div
                            className={`pb-3 mt-2 md:block bg-black md:bg-inherit md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block ' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen text-md lg:text-lg gap-4 lg:gap-8 md:h-auto justify-center md:flex text-center text-white md:text-black ">
                                <li className="border-b md:border-b-0 border-white p-4 md:p-0 ">
                                    <Link href="#home" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="border-b md:border-b-0 border-white p-4 md:p-0 ">
                                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                                        About
                                    </Link>
                                </li>
                                <li className=" border-b md:border-b-0 border-white p-4 md:p-0 ">
                                    <Link href="#menu" onClick={() => setNavbar(!navbar)}>
                                        Menu
                                    </Link>
                                </li>
                                <li className=" border-b md:border-b-0 border-white p-4 md:p-0 ">
                                    <Link href="#orders" onClick={() => setNavbar(!navbar)}>
                                        Orders
                                    </Link>
                                </li>
                                <li className=" border-b md:border-b-0 border-white p-4 md:p-0 ">
                                    <Link href="#service" onClick={() => setNavbar(!navbar)}>
                                        Services
                                    </Link>
                                </li>
                                <li className="border-b md:border-b-0 border-white p-4 md:p-0 ">
                                    <Link href="#footer" onClick={() => setNavbar(!navbar)}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;