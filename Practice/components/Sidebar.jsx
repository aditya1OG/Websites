"use client"

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import Link from 'next/link'
import {
    MdOutlineSpaceDashboard
} from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { VscGraphScatter } from "react-icons/vsc";
import QRCode from 'qrcode.react';


function Sidebar() {
    const [activeButton, setActiveButton] = useState(null);
    const [showData, setShowData] = useState(false);

    const [qrData, setQRData] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);

    const handleGenerateQRCode = () => {
        const data = "Here we can drop out QR code If we have or required but this is practice set so that's why I'm using random QR here";
        setQRData(data);
        setShowQRCode(true);
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    const handleShowExample = () => {
        setShowData(true);
    };
    return (
        <div>
            <Disclosure as="nav">
                <Disclosure.Button className="absolute top-[42px] right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
                    <GiHamburgerMenu
                        className="block md:hidden h-6 w-6 rounded-full"
                        aria-hidden="true"
                    />
                </Disclosure.Button>
                <div className="p-6 h-[760px] bg-white z-20 fixed top-0 -left-96 md:left-0 w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                    <div className="flex flex-col justify-start item-center">
                        <div className='lg:flex items-center justify-center hidden '>
                            <Link href='/'>
                                <img src="../assests/logo.svg" alt="" className="h-16 w-32" />
                            </Link>
                        </div>
                        <div className='lg:hidden items-center justify-center flex '>
                            <button onClick={handleGenerateQRCode}
                                className='bg-gradient-to-tr from-purple-400 to-purple-600 py-2 px-7 rounded-2xl text-white font-semibold'>Connect Wallet</button>
                        </div>
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
                        <div className="my-4 border-b border-gray-100 pb-4">
                            <div className="hover-container">
                                <div
                                    className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg ${activeButton === "Dashboard" ? "bg-blue-500 text-white" : "hover:bg-blue-200 text-gray-800"
                                        }`}
                                    onClick={() => handleButtonClick("Dashboard")}
                                >
                                    <MdOutlineSpaceDashboard className="text-2xl" />
                                    <Link href="/" className="text-base font-semibold">
                                        Dashboard
                                    </Link>
                                </div>
                            </div>
                            <div className="hover-container">
                                <div
                                    className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg ${activeButton === "Gatherpool" ? "bg-blue-500 text-white" : "hover:bg-blue-200 text-gray-800"
                                        }`}
                                    onClick={() => handleButtonClick("Gatherpool")}
                                >
                                    <FaLayerGroup className="text-2xl" />
                                    <Link href="../Gatherpool" className="text-base font-semibold">
                                        Gatherpool
                                    </Link>
                                </div>
                            </div>
                            <div className="hover-container">
                                <div
                                    className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg ${activeButton === "Scatter" ? "bg-blue-500 text-white" : "hover:bg-blue-200 text-gray-800"
                                        }`}
                                    onClick={() => handleButtonClick("Scatter")}
                                >
                                    <VscGraphScatter className="text-2xl" />
                                    <Link href="../Scatter" className="text-base font-semibold">
                                        Scatter
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Disclosure>
        </div>
    );
}

export default Sidebar;