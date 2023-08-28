"use client"

import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide, } from 'swiper/react'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const Carousel2 = () => {
    const carousel = [
        {
            id: 1,
            img: '/assests/bg1.png',
        },
        {
            id: 2,
            img: '/assests/bg2.png',
        },
        {
            id: 3,
            img: '/assests/bg3.png',
        },
        {
            id: 4,
            img: '/assests/bg4.png',
        },
        {
            id: 5,
            img: '/assests/bg5.png',
        },
        {
            id: 6,
            img: '/assests/bg6.png',
        },
        {
            id: 7,
            img: '/assests/bg7.png',
        },
        {
            id: 8,
            img: '/assests/bg8.png',
        },
        {
            id: 9,
            img: '/assests/bg9.png',
        },
        {
            id: 10,
            img: '/assests/bg10.png',
        },
    ]
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                navigation
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 3000 }}
            >
                {carousel.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='h-[100%] flex flex-col gap-1 items-center justify-center ml-6'>
                            <div className='flex items-center justify-center'>
                                <img
                                    className="h-[80%] object-cover hover:object-contain aspect-[1] mix-blend-color-burn rounded-lg scale-120 transition-transform duration-300 hover:scale-90"
                                    src={item.img}
                                    alt="Home card"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Carousel2