"use client"

import React, { useState, useRef } from 'react';
import { AiOutlineCloudUpload, AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import QRCode from 'qrcode.react';

const Page = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const [showData, setShowData] = useState(false);

  const [qrData, setQRData] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);

  const handleGenerateQRCode = () => {
    const data = "Here we can drop out QR code If we have or required but this is practice set so that's why I'm using random QR here";
    setQRData(data);
    setShowQRCode(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      setPreviewImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleShowExample = () => {
    setShowData(true);
  };

  return (
    <div className="flex flex-col w-[100%] pl-0 sm:pl-16 pt-8 md:pl-72 gap-16 pr-0 sm:pr-16">
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
          <img src="../assests/logo.svg" alt="" className="h-16 w-32" />
        </div>
        <div className="flex gap-10">
          <button className="border border-black px-7 py-2 rounded-3xl hidden md:block">Light</button>
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={handleGenerateQRCode}
              className="outline-none border-none text-white font-semibold px-7 py-2 rounded-3xl bg-gradient-to-tr from-purple-400 to-purple-600 lg:block hidden"
            >
              Connect Wallet
            </button>
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
          </div>
          <div className="flex items-center">
            <BsSearch className="text-2xl lg:hidden block text-gray-700" />
          </div>
        </div>
      </div>

      <div className='bg-white h-screen rounded-xl w-[100%]'>
        <div className='flex justify-around pr-20 pl-20 mt-5'>
          <img src="../assests/f1.png" alt="" className='bg-blend-darken' />
          <div className='w-full mt-[16px] pr-4 pl-4'><hr /></div>
          <img src="../assests/f1.png" alt="" className='bg-blend-darken' />
          <div className='w-full mt-[16px] pr-4 pl-4'><hr /></div>
          <img src="../assests/f1.png" alt="" className='bg-blend-darken' />
        </div>
        <div className='flex flex-col justify-center pl-10 xl:pl-64 mt-6 md:w-full'>
          <h1 className='text-black font-medium text-lg'>Prepare to scatter</h1>
          <p className='text-black text-xs'>We support the following Networks</p>
          <div className='flex flex-col lg:flex-row gap-3 lg:gap-10 lg:items-center pt-5'>
            <div className='flex gap-2 items-center'>
              <img src="../assests/s1.svg" alt="" className='w-9 h-9' />
              <h1 className='text-sm font-medium'>Ethereum Mainnet</h1>
            </div>
            <div className='flex gap-2 items-center'>
              <img src="../assests/s2.svg" alt="" className='w-9 h-9' />
              <h1 className='text-sm font-medium'>Binance Smart Chain</h1>
            </div>
          </div>
          <h1 className='text-sm mt-4 font-medium'>Token Name</h1>
          <input
            type="text"
            className='pl-4 w-[95%] lg:w-[80%] xl:w-[65%] h-12 rounded-lg bg-gray-200 border-none text-sm outline-none'
            placeholder='Enter Gather Name'
          />
          <div>
            <div className="mt-3 flex items-center w-[95%] lg:w-[80%] xl:w-[65%] justify-between">
              <h1 className="text-sm">Address with Amounts</h1>
              <label htmlFor="fileInput" className="text-xs text-gray-800 cursor-pointer">
                Upload File
              </label>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              {selectedFile && <p>Selected File: {selectedFile.name}</p>}
            </div>
            <div
              className="h-32 w-[95%] lg:w-[80%] xl:w-[65%] bg-gray-300 flex flex-col items-center justify-center cursor-pointer relative"
              onClick={handleBoxClick}
            >
              {previewImage ? (
                <div className="w-full h-full overflow-hidden">
                  <img src={previewImage} alt="Preview" className="max-w-full max-h-full" />
                  <button
                    className="absolute top-2 right-2 p-1 rounded-full bg-white text-gray-600 hover:bg-gray-100"
                    onClick={handleCancel}
                  >
                    <AiOutlineClose size={18} />
                  </button>
                </div>
              ) : (
                <>
                  <AiOutlineCloudUpload size={32} className="text-gray-600" />
                  <p className="mt-2 text-sm">Browse</p>
                </>
              )}
            </div>
            <div className='flex items-center justify-between w-[95%] lg:w-[80%] xl:w-[65%] pt-2'>
              <h2 className='text-xs text-black'>Accepted: Everything</h2>
              <h2
                className='text-xs text-black hover:border-b-2 hover:border-b-black cursor-pointer'
                onClick={handleShowExample}
              >
                Show Example
              </h2>
            </div>
          </div>
          <button className='w-[95%] lg:w-[80%] xl:w-[65%] mt-5 rounded-full text-white font-bold py-4 bg-gradient-to-tr from-purple-400 to-purple-600'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
