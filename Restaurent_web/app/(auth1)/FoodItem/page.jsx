"use client"
import React, { useState } from 'react';
// import Link from 'next/link'

const FoodItem = ({ item }) => {
    const { name, description, price, image, ingredients } = item;
    const [showThankYou, setShowThankYou] = useState(false);

    const handleOrderNow = () => {
        setShowThankYou(true);
    };

    return (
        <div className="border shadow-2xl h-[550px] flex flex-col items-center justify-center">
            <img src={`/images/${image}`} alt={name} className="mb-2 rounded-full object-contain mix-blend-color-burn w-[60%]" />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-gray-700">Ingredients: {ingredients.join(', ')}</p>
            <p className="text-red-600 font-semibold">Price: ${price.toFixed(2)}</p>
            {/* <Link href='/Order_Now' legacyBehavior>
                <a href="" className='border border-black text-black py-1 px-3 rounded-3xl mt-7 hover:text-white hover:bg-[#DF080F] hover:border-none hover:outline-none'>Order Now</a>
            </Link> */}
            <button
                onClick={handleOrderNow}
                className="bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 mt-7 "
            >
                Order Now
            </button>
            {showThankYou && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 shadow-md rounded-md">
                        <h1 className="text-2xl font-semibold mb-4">Thank You! 😄😃</h1>
                        <p>Your order has been received and is being processed.</p>
                        <p>Please visit again. Have a nice day</p>
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
    );
};

export default FoodItem;
