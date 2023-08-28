import React from 'react'
import Link from 'next/link'
import FoodCategory from '../FoodCategories/page';
import { foodCategories } from '../Data/page';
import { dumplings } from '../Data/page';
import { noodles } from '../Data/page';

const page = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='flex items-center justify-center gap-24 sm:gap-36 lsm:gap-52 mdl:gap-96'>
                <Link className='flex text-center items-center w-10 gap-2 text-[#DF080F]' href='/#home'>
                    <img src='../assests/logo.svg' className='w-16 h-16' alt='logo' />
                    <h1>The Noodles Way</h1>
                </Link>
                <nav className='flex items-center justify-center text-lg'>
                    <ul className='flex gap-0 sm:gap-10'>
                        <Link legacyBehavior href='#soupcategory' className="py-4 px-2 md:p-0 ">
                            <a className='hover:border-b hover:border-black'>
                                Soups
                            </a>
                        </Link>
                        <Link legacyBehavior href='#dumplingscategory' className="py-4 px-2 md:p-0 ">
                                 
                            <a className='hover:border-b hover:border-black'>
                                Dumplings
                            </a>
                        </Link>
                        <Link legacyBehavior href='#noodlescategory' className="py-4 px-2 md:p-0 ">
                            <a className='hover:border-b hover:border-black'>
                                Noodles
                            </a>
                        </Link>
                    </ul>
                </nav>
            </div>
            <div className='border border-b border-gray-400 w-full mt-3'></div>
            <div id='soupcategory' claassName='flex flex-col'>
                <h1 className='text-[#DF080F] text-4xl font-cursive text-center mb-1'>Our Way, Our Menu</h1>
                <h3 className='text-md text-center'>Small Menu, Endless flavours</h3>
                <h1 className='text-[#DF080F] text-4xl font-cursive my-2'>SOUPS</h1>
                <img src="../assests/soupsbg.webp" alt="" className='inset-1 object-cover h-[230px]' />
                <div className="grid md:place-items-center  md:grid-cols-2 xl:grid-cols-3 mt-8 gap-12 text-center text-[12px] md:text-sm">
                    {foodCategories.map(category => (
                        <FoodCategory key={category.id} name={category.name} items={category.items} />
                    ))}
                </div>
            </div>
            <div id='dumplingscategory' claassName='flex flex-col gap-3 '>
                <h1 className='text-[#DF080F] text-4xl font-cursive my-2'>DUMPLINGS</h1>
                <img src="../assests/dumpingbg.webp" alt="" className='inset-1 object-cover h-[230px]' />
                <div className="grid md:place-items-center md:grid-cols-2 xl:grid-cols-3 mt-8 gap-12 text-center text-[12px] md:text-sm">
                    {dumplings.map(category => (
                        <FoodCategory key={category.id} name={category.name} items={category.items} />
                    ))}
                </div>
            </div>
            <div id='noodlescategory' claassName='flex flex-col gap-3 '>
                <h1 className='text-[#DF080F] text-4xl font-cursive my-2'>NOODLES</h1>
                <img src="../assests/noodlesbg.webp" alt="" className='inset-1 object-cover h-[230px]' />
                <div className="grid md:place-items-center md:grid-cols-2 xl:grid-cols-3 mt-8 gap-12 text-center text-[12px] md:text-sm">
                    {noodles.map(category => (
                        <FoodCategory key={category.id} name={category.name} items={category.items} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page