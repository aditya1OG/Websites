"use client"

import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide, } from 'swiper/react'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const FifthCarousel = () => {
    const carousel = [
        {
            id: 1,
            img: '/a1.jpg',
            link: 'https://www.amazon.in/b?node=1389401031&pd_rd_w=z1zL0&content-id=amzn1.sym.021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_p=021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_r=3QESDRJ4DZN14DZFPYS5&pd_rd_wg=2ebz3&pd_rd_r=27e1224c-b7c5-44de-a8d3-ef9332add38d'
            , title: 'Up to 40% off Moblies & accessories'
        },
        {
            id: 2,
            img: '/a2.jpg',
            link: 'https://www.amazon.in/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics&pd_rd_w=z1zL0&content-id=amzn1.sym.021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_p=021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_r=3QESDRJ4DZN14DZFPYS5&pd_rd_wg=2ebz3&pd_rd_r=27e1224c-b7c5-44de-a8d3-ef9332add38d'
            , title: 'Up to 75% off Electronics & accessories'
        },
        {
            id: 3,
            img: '/a3.jpg',
            link: 'https://www.amazon.in/b?node=976442031&pd_rd_w=z1zL0&content-id=amzn1.sym.021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_p=021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_r=3QESDRJ4DZN14DZFPYS5&pd_rd_wg=2ebz3&pd_rd_r=27e1224c-b7c5-44de-a8d3-ef9332add38d'
            , title: 'Up to 70% off Home, Kitchen & outdoor'
        },
        {
            id: 4,
            img: '/a4.jpg',
            link: 'https://www.amazon.in/b?node=14907158031&pd_rd_w=z1zL0&content-id=amzn1.sym.021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_p=021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_r=3QESDRJ4DZN14DZFPYS5&pd_rd_wg=2ebz3&pd_rd_r=27e1224c-b7c5-44de-a8d3-ef9332add38d'
            , title: 'Up to off TVs & Appliances'
        },
        {
            id: 5,
            img: '/a5.jpg',
            link: 'https://www.amazon.in/b/ref=surl_fashion?node=6648217031&pd_rd_w=z1zL0&content-id=amzn1.sym.021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_p=021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_r=3QESDRJ4DZN14DZFPYS5&pd_rd_wg=2ebz3&pd_rd_r=27e1224c-b7c5-44de-a8d3-ef9332add38d'
            , title: '50% to 80% off Fashion & beauty'
        },
        {
            id: 6,
            img: '/a6.jpg',
            link: 'https://www.amazon.in/b?node=27394885031&pd_rd_w=VSd9z&content-id=amzn1.sym.021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_p=021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_r=W7XR38NS6S2XZ9VT46HE&pd_rd_wg=d3fiL&pd_rd_r=2813f6b9-7f7b-4f8c-a142-78d83a4383b9'
            , title: 'Up to 60% off Daily needs'
        },
        {
            id: 7,
            img: '/a7.jpg',
            link: 'https://www.amazon.in/b?node=6628733031&pd_rd_w=VSd9z&content-id=amzn1.sym.021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_p=021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_r=W7XR38NS6S2XZ9VT46HE&pd_rd_wg=d3fiL&pd_rd_r=2813f6b9-7f7b-4f8c-a142-78d83a4383b9'
            , title: 'Up to 70% off Books, toys & more'
        },
        {
            id: 8,
            img: '/a8.jpg',
            link: 'https://www.amazon.in/b/ref=pbAugARTteaser23?node=15390370031&pd_rd_w=VSd9z&content-id=amzn1.sym.021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_p=021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_r=W7XR38NS6S2XZ9VT46HE&pd_rd_wg=d3fiL&pd_rd_r=2813f6b9-7f7b-4f8c-a142-78d83a4383b9'
            , title: 'Up to 70% off Amazon Brands & more'
        },
        {
            id: 9,
            img: '/a9.jpg',
            link: 'https://www.amazon.in/b?node=21703586031&pd_rd_w=VSd9z&content-id=amzn1.sym.021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_p=021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_r=W7XR38NS6S2XZ9VT46HE&pd_rd_wg=d3fiL&pd_rd_r=2813f6b9-7f7b-4f8c-a142-78d83a4383b9'
            , title: 'Up to 55% off Alexa & Fire TV'
        },
    ]
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 3000 }}
            >
                {carousel.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='h-[300px] flex flex-col relative gap-1 items-center justify-center ml-6 '>
                            <Link href={item.link} >
                                <div className=' w-full h-[250px] m-2 flex items-center justify-center'>
                                    <img
                                        className="h-[250px] w-full absolute object-contain rounded-lg scale-120 transition-transform duration-300 hover:scale-90"
                                        src={item.img}
                                        alt="Home card"
                                    />
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}

export default FifthCarousel