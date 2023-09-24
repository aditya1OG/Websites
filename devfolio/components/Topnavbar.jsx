"use client"

import React from 'react'
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagramSquare } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import Link from 'next/link'

const TopNavbar = () => {
    return (
        <div className=' bg-black h-16 pt-5 flex items-center justify-around'>
            <nav className='text-white flex items-center justify-center gap-8'>
                <Link href="" legacyBehavior>
                    <a
                        href="https://wa.me/9760746380"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group inline-block"
                    >
                        <FaWhatsapp className="cursor-pointer transition-opacity duration-300" />
                        <span className="hidden group-hover:inline-block absolute bg-black bg-opacity-75 text-white text-center py-1 px-2 rounded-md bottom-full left-1/2 transform -translate-x-1/2 -mb-2 opacity-0 transition-opacity duration-300">
                            9760746380
                        </span>
                    </a>

                </Link>
                <Link href='https://github.com/aditya1OG/Websites.git' legacyBehavior>
                    <a>
                        <FaGithub className='cursor-pointer' />
                    </a>
                </Link>
                <Link href='https://www.linkedin.com/in/aditya-tiwari-b9278b278' legacyBehavior>
                    <a>
                        <FaLinkedin className='cursor-pointer' />
                    </a>
                </Link>
                <Link href="mailto:adityatiwari9410@gmail.com" legacyBehavior>
                    <a href="mailto:adityatiwari9410@gmail.com">
                        <BiLogoGmail className='cursor-pointer' />
                    </a>
                </Link>
                <Link href="https://instagram.com/kanhatiwari007?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    legacyBehavior>
                    <a href=''>
                        <FaInstagramSquare className='cursor-pointer' />
                    </a>
                </Link>

            </nav>
            <div className='text-white'>
                <button
                    onClick={() => {
                        window.location.href = "mailto:adityatiwari9410@gmail.com";
                    }}
                    className=' border border-white py-2 px-4'>Let's Connect</button>
            </div>
        </div>
    )
}

export default TopNavbar