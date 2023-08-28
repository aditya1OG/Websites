import React from 'react'

const Services = () => {
    return (
        <>
            <div id='service' className='bg-pink-100 h-[100vh] md:h-[60vh] flex flex-col gap-6 items-center justify-center'>
                <div className=''>
                    <h1 className='font-cursive text-[40px] sm:text-[55px]'>Drop By For a Bite.</h1>
                </div>
                <div className='flex items-center gap-10 md:gap-16 flex-col md:flex-row'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-sans2 text-[30px]'>Address</h1>
                        <p className='w-36 text-[15px]'>Patel Nagar Dehradun, Near lal Pull Pin-248001</p>
                    </div>
                    <div className='w-52 md:w-0 h-0 md:h-36 border border-black'></div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-sans2 text-[30px]'>Openings Hours</h1>
                        <p>Mon - Fri: 9am - 6pm</p>
                        <p>​​Saturday: 10am - 2pm</p>
                        <p>​Sunday: Closed</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services