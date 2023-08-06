"use client"

import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
const Carousel = () => {
    return (
        <div className='h-[600px] relative object-contain z-0'>
            <Swiper logo={true}
                spaceBetween={0}
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 3000 }}
                className='h-[50%]'
            >
                <SwiperSlide>
                    <img src="/first.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/second.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/third.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/fourth.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/carousel_1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/carousel_2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/carousel_3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="bg-black">
                    <video controls muted="muted">
                        <source src={"/carousel_vid.mp4"} type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/carousel_4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/carousel_5.jpg" alt="" />
                </SwiperSlide>

            </Swiper>
            <div className="h-[50%] bg-gradient-to-b from-stone-900" />
        </div>
    )
}

export default Carousel