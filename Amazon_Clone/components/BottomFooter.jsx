import React from 'react'

const BottomFooter = () => {
    return (
        <div className="bg-[#131A22] text-gray-400 px-4 py-8 flex flex-col items-center justify-center gap-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
                <div className="md:col-span-1">
                    <h2 className="text-lg font-semibold mb-4 ">AbeBooks</h2>
                    <ul className="space-y-4 text-xs text-gray-500">
                        <li className='hover:underline'><a href="#">Books, art</a></li>
                        <li className='hover:underline'><a href="#">& collectibles</a></li>
                    </ul>
                </div>
                <div className="md:col-span-1">
                    <h2 className="text-lg font-semibold mb-4 ">Amazon Services</h2>
                    <ul className="space-y-4 text-xs text-gray-500">
                        <li className='hover:underline'> <a href="#">Scalable Cloud</a></li>
                        <li className='hover:underline'><a href="#">Computing Services</a></li>
                    </ul>
                </div>
                <div className="md:col-span-1">
                    <h2 className="text-lg font-semibold mb-4 ">Audiable</h2>
                    <ul className="space-y-4 text-xs text-gray-500">
                        <li className='hover:underline'><a href="#">Download</a></li>
                        <li className='hover:underline'><a href="#">Audio Books</a></li>
                    </ul>
                </div>
                <div className="md:col-span-1">
                    <h2 className="text-lg font-semibold mb-4 ">Shopbop</h2>
                    <ul className="space-y-4 text-xs text-gray-500">
                        <li className='hover:underline'> <a href="#">Designer</a></li>
                        <li className='hover:underline'><a href="#">Fashion Brands</a></li>
                    </ul>
                </div>
                <div className="md:col-span-1">
                    <h2 className="text-lg font-semibold mb-4 ">Amazon Business</h2>
                    <ul className="space-y-4 text-xs text-gray-500">
                        <li className='hover:underline'> <a href="#">Everything for</a></li>
                        <li className='hover:underline'><a href="#">Your Business</a></li>
                    </ul>
                </div>
                <div className="md:col-span-1">
                    <h2 className="text-lg font-semibold mb-4 ">Prime Now</h2>
                    <ul className="space-y-4 text-xs text-gray-500">
                        <li className='hover:underline'> <a href="#">2-Hour Delivery</a></li>
                        <li className='hover:underline'><a href="#">On Everyday items</a></li>
                    </ul>
                </div>
                <div className="md:col-span-1">
                    <h2 className="text-lg font-semibold mb-4 ">DPReview</h2>
                    <ul className="space-y-4 text-xs text-gray-500">
                        <li className='hover:underline'> <a href="#">Digital</a></li>
                        <li className='hover:underline'><a href="#">Photography</a></li>
                    </ul>
                </div>
                <div className="md:col-span-1">
                    <h2 className="text-lg font-semibold mb-4 ">Prime Music</h2>
                    <ul className="space-y-4 text-xs text-gray-500">
                        <li className='hover:underline'> <a href="#">100 million songs, ad free</a></li>
                        <li className='hover:underline'><a href="#">Over 15 million podcast episode</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-sm mt-4 text-gray-400 mx-auto flex flex-col items-center justify-center">
                <div className="md:col-span-1">
                    <ul className="space-x-5 text-xs flex">
                        <li className='hover:underline'> <a href="#">COndition of Use & Sale</a></li>
                        <li className='hover:underline'><a href="#">Privacy Notice</a></li>
                        <li className='hover:underline'><a href="#">Intrest-Based Ads</a></li>
                    </ul>
                </div>
                <p>&copy;1996- {new Date().getFullYear()} Amazon.com, Inc. or its affiliates. All rights reserved.</p>
            </div>
        </div>
    )
}

export default BottomFooter