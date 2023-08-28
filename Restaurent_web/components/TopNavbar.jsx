import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsYoutube, BsWhatsapp } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import Navbar from './Navbar';

export default function TopNavbar() {
    return (
        <>
            <main className="bg-[black] h-36 min-w-[100%] flex justify-around items-center">
                <div className='text-white gap-3 sm:gap-5 md:gap-6 flex  mb-8'>
                    <h2 className="cursor-pointer ">FAQs</h2>
                    <span>|</span>
                    <h2 className="cursor-pointer">Help</h2>
                    <span>|</span>
                    <h2 className="cursor-pointer">Support</h2>
                    <span>|</span>
                </div>
                <div className='text-white flex gap-6 mb-8'>
                    <FaFacebookF className='cursor-pointer' />
                    <BsTwitter className='cursor-pointer' />
                    <FaInstagramSquare className='cursor-pointer' />
                    <BsYoutube className='cursor-pointer' />
                    <BsWhatsapp className='cursor-pointer' />
                </div>
            </main>
            <div className="w-full  flex justify-center relative bottom-10 z-10">
                <Navbar />
            </div>
        </>
    )
}