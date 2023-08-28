"use client"
import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
const Carousel = () => {
    return (
        <div className='h-[450px] object-contain z-0'>
            <Swiper logo={true}
                spaceBetween={0}
                Navigation
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 2000 }}
                className='h-[100%] object-contain items-center justify-center flex w-[100%]  '
            >
                <SwiperSlide>
                    <img src="/assests/first.jpg" alt="" className="object-contain "/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assests/second.jpg" alt="" className="object-contain "/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assests/third.jpg" alt="" className="object-contain "/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assests/fourth.jpg" alt="" className="object-contain "/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assests/fifth.jpg" alt="" className="object-contain "/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel