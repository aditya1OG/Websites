import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
    return (
        <main id='menu' className='h-[130vh] mt-6 md:mt-0 flex flex-col gap-6 sm:gap-0 md:flex-row md:h-screen w-full items-center justify-around'>
            <div className='sm:mt-0 flex flex-col items-center justify-center gap-2 sm:gap-4'>
                <Image src='/assests/soups.svg' height={80} width={80} alt='soups' className='mix-blend-multiply' />
                <h1 className='font-bold text-[25px] sm:text-[40px] text-center'>Soups</h1>
                <p className='text-center w-[70%] text-[15px] font-medium'>Our bowls of endless flavors from the east</p>
                <Link legacyBehavior href="/Orders">
                    <a className='border border-red-500 text-red-600 hover:text-white hover:bg-red-600 py-1 px-4 rounded-3xl'>Order Now</a>
                </Link>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 sm:gap-4'>
                <Image src='/assests/noodles.svg' height={80} width={80} alt='noodles' className='mix-blend-multiply' />
                <h1 className='font-bold text-[25px] sm:text-[40px] text-center'>Noodles</h1>
                <p className='text-center w-[70%] text-[15px] font-medium'>The way noodles were meant to be</p>
                <Link legacyBehavior href="/Orders">
                    <a className='border border-red-500 text-red-600 hover:text-white hover:bg-red-600 py-1 px-4 rounded-3xl'>Order Now</a>
                </Link>
            </div>
            <div className='flex flex-col items-center justify-center  gap-2 sm:gap-4'>
                <Image src='/assests/dumplings.svg' height={80} width={80} alt='dumplings' className='mix-blend-multiply' />
                <h1 className='font-bold text-[25px] sm:text-[40px] text-center'>Dumplings</h1>
                <p className='text-center w-[70%] text-[15px] font-medium'>It’s all about the filling. And the dough</p>
                <Link legacyBehavior href="/Orders">
                    <a className='border border-red-500 text-red-600 hover:text-white hover:bg-red-600 py-1 px-4 rounded-3xl'>Order Now</a>
                </Link>
            </div>
        </main>
    )
}

export default Menu