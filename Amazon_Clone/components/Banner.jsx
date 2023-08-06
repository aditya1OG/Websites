"use client"

import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide, } from 'swiper/react'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const SecondCarousel = () => {
    const carousel = [
        {
            id: 1,
            img: '/banner_image_3.jpg',
            link: 'https://www.amazon.in/dp/B0BQ3RC28F?aaxitk=dc2cd73fecd24dd6812f2891530088f4&th=1'
        },
        {
            id: 2,
            img: '/banner_image_4.jpg',
            link: 'https://www.amazon.in/home-products-sale/b?ie=UTF8&node=12414705031'
        },
        {
            id: 3,
            img: '/banner_image_5.jpg',
            link: 'https://www.amazon.in/s?i=hpc&bbn=17174518031&rh=n%3A17174518031%2Cp_72%3A1318476031%2Cp_n_deal_type%3A26921224031&ds=v1%3AeXHMKhf1t1wNcmOryW1Gd%2B0r1hfFj%2Bx5YG860i4SqOs&qid=1691157966&rnid=26921223031&ref=sr_nr_p_n_deal_type_2&pf_rd_r=WWS4WXBW0S5CB7AZB4RC&pf_rd_p=28b40f0a-50dd-4dbc-bc11-ee6a70789ec9&pd_rd_r=18aaf929-d34a-4489-89c4-17bdc37f826e&pd_rd_w=Mi3Hz&pd_rd_wg=rvenh'
        },
        {
            id: 4,
            img: '/banner_image_6.jpg',
            link: 'https://www.amazon.in/dp/B0C7V7VH6Q/?_encoding=UTF8&ie=UTF8&ref_=hero_nord3&pf_rd_r=WWS4WXBW0S5CB7AZB4RC&pf_rd_p=91360115-457b-4bbc-a29d-9d368f0f382f&pd_rd_r=18aaf929-d34a-4489-89c4-17bdc37f826e&pd_rd_w=lL5ZT&pd_rd_wg=rvenh'
        },
        {
            id: 5,
            img: '/banner_image_7.jpg',
            link: 'https://www.amazon.in/s?i=shoes&bbn=1983396031&rh=n%3A1571283031%2Cn%3A1983396031%2Cp_36%3A29900-79999&s=shoes&hidden-keywords=-slippers&ds=v1%3ABOLHLFyEfKzYmoafc8dmKyDdSFXmqT7pEGHqDb5B%2FQg&qid=1690954710&ref=sr_ex_n_1&pf_rd_r=WWS4WXBW0S5CB7AZB4RC&pf_rd_p=4cdeb972-1afb-4f64-811f-d7425d51e03a&pd_rd_r=18aaf929-d34a-4489-89c4-17bdc37f826e&pd_rd_w=03tuI&pd_rd_wg=rvenh'
        },
        {
            id: 6,
            img: '/banner_image_8.jpg',
            link: 'https://www.amazon.in/b?ie=UTF8&node=976442031&pf_rd_r=WWS4WXBW0S5CB7AZB4RC&pf_rd_p=8b64b198-41b4-4ad4-bbeb-49a0309c266a&pd_rd_r=18aaf929-d34a-4489-89c4-17bdc37f826e&pd_rd_w=9lPks&pd_rd_wg=rvenh'
        },
    ]
    return (
        <>
            <Swiper
                spaceBetween={0}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 3000 }}
            >
                {carousel.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='h-[350px] flex items-center justify-center my-6 z-30'>
                            <Link href={item.link}>
                                <div className='h-full w-[1000px] m-2 flex justify-center items-center'>
                                    <img
                                        className="h-[300px] w-full object-fill rounded-lg"
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

export default SecondCarousel