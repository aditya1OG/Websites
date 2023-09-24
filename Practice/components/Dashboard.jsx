"use client"

import React, { useState } from "react";
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import QRCode from 'qrcode.react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("Joined Gathers");
    const [showData, setShowData] = useState(false);

    const [qrData, setQRData] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);

    const handleShowExample = () => {
        setShowData(true);
    };

    const handleGenerateQRCode = () => {
        const data = "Here we can drop out QR code If we have or required but this is practice set so that's why I'm using random QR here";
        setQRData(data);
        setShowQRCode(true);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className="flex flex-col pl-0 sm:pl-16 pt-8 md:pl-72 gap-16 pr-0 sm:pr-16 ">
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
                    <button
                        onClick={handleGenerateQRCode}
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
                    <div className="flex items-center ">
                        <BsSearch className="lg:hidden block text-2xl text-gray-700" />
                    </div>
                </div>
            </div>
            <div className="w-full bg-white rounded-xl h-64 md:h-52 pt-4">
                <h1 className="font-bold pl-10 text-xl">Your Stats</h1>
                <div className="pt-5 flex md:flex-row flex-col md:items-center justify-around w-full gap-5 pl-8 md:pl-0">
                    <div className="flex flex-row md:flex-col items-center gap-3">
                        <img src="../assests/one.svg" alt="" />
                        <p className="text-sm font-medium">Active Gathers</p>
                        <p>0/0</p>
                    </div>
                    <div className="flex flex-row md:flex-col items-center gap-5">
                        <img src="../assests/two.svg" alt="" />
                        <p className="text-sm font-medium">Native Contribution</p>
                        <p>0/0</p>
                    </div>
                    <div className="flex flex-row md:flex-col items-center gap-5">
                        <img src="../assests/three.svg" alt="" />
                        <p className="text-sm font-medium">Stable Contribution</p>
                        <p>0/0</p>
                    </div>
                </div>
            </div>

            {/* second page */}
            <div className="bg-white h-72 rounded-xl w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-2 mb-4">
                    <div className="pl-8 pt-5 flex gap-4 items-center">
                        <img src="../assests/gather.svg" alt="" className="w-7 h-7" />
                        <h1 className="font-bold text-xl">Gathers</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-8 pl-8">
                        <div
                            className={`font-extrabold text-gray-400 text-lg cursor-pointer ${activeTab === "Joined Gathers"
                                ? "border-b-2 border-[#1739a4] text-[rgb(23,57,164)]"
                                : "hover:border-b-2 hover:text-[rgb(23,57,164)] "
                                }`}
                            onClick={() => handleTabClick("Joined Gathers")}
                        >
                            Joined Gathers
                        </div>
                        <div
                            className={`font-extrabold text-gray-400 text-lg cursor-pointer ${activeTab === "Own Gathers"
                                ? "border-b-2 border-[#1739a4] text-[rgb(23,57,164)]"
                                : "hover:border-b-2 hover:text-[rgb(23,57,164)] "
                                }`}
                            onClick={() => handleTabClick("Own Gathers")}
                        >
                            Own Gathers
                        </div>
                        <div
                            className={`font-extrabold text-gray-400 text-lg cursor-pointer ${activeTab === "Admin Gathers"
                                ? "border-b-2 border-[#1739a4] text-[rgb(23,57,164)]"
                                : "hover:border-b-2 hover:text-[rgb(23,57,164)] "
                                }`}
                            onClick={() => handleTabClick("Admin Gathers")}
                        >
                            Admin Gathers
                        </div>
                    </div>

                    <div className="flex justify-around w-full">
                        <h1 className="text-gray-500 ">Pool Title</h1>
                        {activeTab === "Joined Gathers" && <h1 className="text-gray-500">Contribution</h1>}
                        <h1 className="text-gray-500 ">Date Created</h1>
                        <h1 className="text-gray-500 ">Actions</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
