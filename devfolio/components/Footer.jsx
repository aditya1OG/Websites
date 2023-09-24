import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagramSquare } from 'react-icons/fa';
import { BiLogoGmail, BiLocationPlus } from 'react-icons/bi';

const Footer = () => {
    return (
        <>
            <div id='footer' className='w-full bg-black border-t'>
                <Link legacyBehavior href=''>
                    <a href='#' className='bg-black p-3 font-semibold text-white flex items-center justify-center'>Back to top</a>
                </Link>
                <footer className="bg-black border-t text-white px-4 py-8">
                    <div className="flex flex-col items-center justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 ml-32 sm:ml-0">
                            <div className="md:col-span-1">
                                <h2 className="text-sm md:text-lg font-semibold mb-4 flex items-center gap-2"><FaWhatsapp className=' ' />Contact Us</h2>
                                <ul className="space-y-4 text-xs text-gray-500">
                                    <li className=' flex items-start gap-2'><FaWhatsapp className='icon' /><a href="#">9760746380</a></li>
                                    <li className=' flex items-start gap-2'><BiLogoGmail className='icon' /> <a href="#">adityatiwari9410@gmail.com</a></li>
                                </ul>
                            </div>

                            <div className="md:col-span-1">
                                <h2 className="text-sm md:text-lg font-semibold mb-4 flex items-center gap-2"><BiLocationPlus className='' />Permanent Address</h2>
                                <ul className="space-y-4 text-xs text-gray-500">
                                    <li className=' md:w-[50%] sm:w-full w-[50%]'><a href="#">Patel Nagar Dehradun, Near lal Pull, Pin-248001</a></li>
                                </ul>
                            </div>
                            <div className="md:col-span-1">
                                <h2 className="text-sm md:text-lg font-semibold mb-4 flex items-center gap-2"><BiLocationPlus className='icon' />Current Address</h2>
                                <ul className="space-y-4 text-xs text-gray-500">
                                    <li className=' md:w-[50%] sm:w-full w-[50%]'><a href="#">Delhi, Noida, Sector-72</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className='bg-black border-t  w-full text-white flex items-center justify-center flex-col md:flex-row gap-2 md:gap-6 h-24 md:h-16'>
                    <div className="flex gap-8 items-center justify-center ">
                        <h1 className="text-[30px]">Follow </h1>
                        <Link href="" legacyBehavior>
                            <a
                                href="https://wa.me/9760746380"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group inline-block"
                            >
                                <FaWhatsapp className="icon" />
                            </a>
                        </Link>
                        <Link href='https://github.com/aditya1OG/Websites.git' legacyBehavior>
                            <a>
                                <FaGithub className='icon' />
                            </a>
                        </Link>
                        <Link href='https://www.linkedin.com/in/aditya-tiwari-b9278b278' legacyBehavior>
                            <a>
                                <FaLinkedin className='icon' />
                            </a>
                        </Link>
                        <Link href="mailto:adityatiwari9410@gmail.com" legacyBehavior>
                            <a href="mailto:adityatiwari9410@gmail.com">
                                <BiLogoGmail className='icon' />
                            </a>
                        </Link>
                        <Link href="https://instagram.com/kanhatiwari007?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                            legacyBehavior>
                            <a href=''>
                                <FaInstagramSquare className='icon' />
                            </a>
                        </Link>
                    </div>
                    <div className=''>
                        <p className='text-xs hover:underline cursor-pointer text-gray-400'>&copy;{new Date().getFullYear()} Made by Aditya Tiwari, All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
