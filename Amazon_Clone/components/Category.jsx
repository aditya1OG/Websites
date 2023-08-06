"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";

const Category = () => {
    return (
        <div className='bg-white mt-3 p-5'>
            <h1 className='text-lg font-semibold '>Shop by Category</h1>
            <Swiper spaceBetween={10}
                slidesPerView={5}
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 3500 }}>
                <SwiperSlide>
                    <img src='/category_0.jpg' alt='category' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/category_1.jpg' alt='category' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/category_2.jpg' alt='category' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/category_3.jpg' alt='category' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/category_4.jpg' alt='category' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/category_5.jpg' alt='category' />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Category