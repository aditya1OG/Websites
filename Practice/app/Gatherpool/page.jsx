"use client"

import React, { useState } from 'react'
// import { BsSearch } from "react-icons/bs";
import Link from 'next/link'
import TextEditor from '@/components/TextEditor';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import QRCode from 'qrcode.react';

const page = () => {
  const [showData, setShowData] = useState(false);

  const [qrData, setQRData] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);

  const handleGenerateQRCode = () => {
    const data = "Here we can drop out QR code If we have or required but this is practice set so that's why I'm using random QR here";
    setQRData(data);
    setShowQRCode(true);
  };
  const handleShowExample = () => {
    setShowData(true);
  };

  return (
    <div className="flex flex-col pl-0 sm:pl-16 pt-8 md:pl-72 gap-16 pr-0 sm:pr-16">
      <div className="relative flex items-center justify-around sm:justify-between w-full">
        <div className='lg:block hidden'>
          <input required
            type="text"
            className="w-64 border bg-transparent h-[48px] rounded-3xl border-black text-xs pl-4 focus:border-none"
            placeholder="Search gather hero"
          />
          <div className="absolute left-[220px] bottom-3 flex items-center ">
            <BsSearch className="text-xl text-gray-500" />
          </div>
        </div>
        <div className='flex items-center justify-center lg:hidden '>
          <Link href='/'>
            <img src="../assests/logo.svg" alt="" className="h-16 w-32" />
          </Link>
        </div>
        <div className="flex gap-10">
          <button className="border border-black px-7 py-2 rounded-3xl hidden md:block">Light</button>
          <button onClick={handleGenerateQRCode}
            className="outline-none border-none px-7 py-2 rounded-3xl bg-gradient-to-tr from-purple-400 to-purple-600 hidden lg:block text-white font-semibold">Connect Wallet</button>
          {showQRCode && (
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
              <div className="bg-white shadow-2xl rounded-2xl text-black relative px-10 pb-10">
                <div className='flex gap-2 items-center'>
                  <img src="../assests/w1.svg" alt="" className='w-8 h-10' />
                  <h1 className='text-lg pr-5 font-semibold pt-3 pb-4'>Wallet Connect</h1>
                </div>
                <h1 className="text-xs font-semibold mb-4 text-center">Scan QR Code with a WalletConnect-Compatible wallet</h1>
                <QRCode value={qrData} size={400} />
                <button
                  onClick={() => setShowQRCode(false)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-white text-gray-600 hover:bg-gray-100"
                >
                  <AiOutlineClose size={18} />
                </button>
              </div>
            </div>
          )}
          <div className="flex items-center">
            <BsSearch className="text-2xl lg:hidden block text-gray-700" />
          </div>
        </div>
      </div>

      <div className='bg-white h-screen rounded-xl w-full '>
        <h1 className='pl-10 font-semibold text-2xl pt-10'>Create a Gather</h1>
        <div className='flex justify-around pr-20 pl-20'>
          <img src="../assests/f1.png" alt="" className='bg-blend-darken' />
          <div className='w-full mt-[16px] pr-4 pl-4'><hr /></div>
          <img src="../assests/f1.png" alt="" className='bg-blend-darken' />
          <div className='w-full mt-[16px] pr-4 pl-4'><hr /></div>
          <img src="../assests/f1.png" alt="" className='bg-blend-darken' />
        </div>
        <div className='flex flex-col justify-center pl-10 xl:pl-64'>
          <h1 className='text-gray-700 text-sm'>Pool Name</h1>
          <p className='text-gray-400 text-xs'>Name Your Pool</p>
          <input type="text" className='mt-4 pl-4 w-[65%] h-12 rounded-lg bg-gray-200 border-none text-sm outline-none' placeholder='Enter Gather Name' />
          <div className='mt-3'>
            <h1 className='text-sm '>Description</h1>
            <p className='text-xs text-gray-400'>Add a brief description</p>
            <TextEditor />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page