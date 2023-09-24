import React from 'react'

const Footer = () => {
    return (
        <div className='sticky w-full text-black mt-[62px] h-96 bg-white flex flex-col pl-6 md:pl-60 gap-10 pt-12'>
            <img src="../assests/logo.svg" alt="" className='w-72 h-20'/>
            <h1 className='font-medium text-2xl'>Full Stack Decentralized Fundraising Platform</h1>
            <div className='w-24 h-1 bg-gradient-to-tr from-[#04eaf6] to-[#e527a0]'></div>
            <p className='font-medium text-2xl'>© All Rights Reserved 2023</p>
        </div>
    )
}

export default Footer