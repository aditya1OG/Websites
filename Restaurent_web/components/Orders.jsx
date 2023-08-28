"use client"
import React, { useState } from 'react';
import Link from 'next/link'

const Orders = () => {
    const [showThankYou, setShowThankYou] = useState(false);
    const handleFindTable = () => {
        setShowThankYou(true);
    };
    return (
        <div id='orders' className='flex items-center flex-col lgl:flex-row justify-around h-[150vh] lgl:h-[100vh] bg-black text-white'>
            <div className='flex flex-col items-center justify-center flex-1 gap-4'>
                <img src="/assests/order.svg" alt="" className='' />
                <h1 className='text-[15px] md:text-[20px] mdl:text-[25px] text-center font-medium'>Order Online</h1>
                <h1 className='text-[20px] md:text-[30px] mdl:text-[40px] text-center font-bold w-full lg:w-[60%]'>Our Foods Are Coming Your Way</h1>
                <Link legacyBehavior href='/Menus'>
                    <a href="" className='rounded-lg py-2 px-8 bg-[transparent] text-white border-white border'>Menu</a>
                </Link>
            </div>
            <div className='flex w-[100%] flex-1 flex-col items-center justify-center bg-[#DF080F] h-full text-white gap-8'>
                <h1 className='font-poppines text-[35px] mdl:text-[48px]'>Reserve a Table</h1>
                <p className='w-[40%] lgl:w-[60%] text-center font-poppines2'>To help us find the best table for you, select the preferred party size, date, and time of your reservation.</p>
                <form action="" className='flex flex-col justify-center w-[60%]'>
                    <div className='flex justify-center relative flex-col'>
                        <label htmlFor="" className=''>Party Size</label>
                        <select name="" id="" className='my-2 text-white w-[100%] mb-6 px-4 py-[10px] border border-white outline-none rounded-3xl cursor-pointer bg-transparent'>
                            <option value="" disabled selected>Select number of guests</option>
                            <option value="1" className="text-black">1 Guest</option>
                            <option value="2" className="text-black">2 Guests</option>
                            <option value="3" className="text-black">3 Guests</option>
                            <option value="4" className="text-black">4 Guests</option>
                            <option value="5" className="text-black">5 Guests</option>
                            <option value="6" className="text-black">6 Guests</option>
                        </select>
                    </div>
                    <label for="date">Select a date:</label>
                    <input type="date" id="date" name="date" className='my-2 cursor-pointer w-[100%] mb-6 px-4 py-2 border border-white outline-none rounded-3xl  text-white bg-transparent' />
                    <label for="time">Select a time:</label>
                    <input type="time" id="time" name="time" className='my-2 cursor-pointer w-[100%] px-4 py-2 border border-white outline-none rounded-3xl text-white bg-transparent' />
                </form>
                {/* <Link legacyBehavior href=''>
                <a href="" className='bg-white px-16 mb-16 lgl:mb-0 rounded-3xl font-medium text-lg py-3 text-black'>Find the Table</a>
                </Link> */}
                <button
                    onClick={handleFindTable}
                    className='bg-white px-16 mb-16 lgl:mb-0 rounded-3xl font-medium text-lg py-3 text-black'
                >
                    Find the Table
                </button>
            </div>
            {showThankYou && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-0">
                    <div className="bg-white p-8 shadow-md rounded-md text-black">
                        <h1 className="text-2xl font-semibold mb-4">Thank You!</h1>
                        <p>Your table has been reserved.</p>
                        <button
                            onClick={() => setShowThankYou(false)}
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Orders