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
            img: '/m1.jpg',
            link: 'https://www.amazon.in/Fire-Boltt-Bluetooth-Calling-Assistance-Resolution/dp/B0BF57RN3K/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
        {
            id: 2,
            img: '/m2.jpg',
            link: 'https://www.amazon.in/Noise-Launched-Bluetooth-Calling-Tracking/dp/B0BJ72WZQ7/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
        {
            id: 3,
            img: '/m3.jpg',
            link: 'https://www.amazon.in/beatXP-Bluetooth-Assistant-Monitoring-Charging/dp/B0BRFX19Y1/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
        {
            id: 4,
            img: '/m4.jpg',
            link: 'https://www.amazon.in/Fire-Boltt-Bluetooth-Smartwatch-Assistant-Monitoring/dp/B0BRKXXPZ7/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
        {
            id: 5,
            img: '/m5.jpg',
            link: 'https://www.amazon.in/Fire-Boltt-Bluetooth-Calling-Assistance-Resolution/dp/B0BF54LXW6/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
        {
            id: 6,
            img: '/m6.jpg',
            link: 'https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&adId=A07468411UNONVQ96463P&qualifier=1691227385&id=2436305872842773&widgetName=sp_detail_thematic&url=%2Fdp%2FB0C5MPLM22%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1%26pd_rd_i%3DB0C5MPLM22%26pd_rd_w%3DQf76v%26content-id%3Damzn1.sym.dcd65529-2e56-4c74-bf19-15db07b4a1fc%26pf_rd_p%3Ddcd65529-2e56-4c74-bf19-15db07b4a1fc%26pf_rd_r%3DEF5ZM0C4Q1J1BEZXQ1EN%26pd_rd_wg%3DHZVZN%26pd_rd_r%3De7c56212-3053-432f-a99e-ed1fbb857206%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM'
        },
        {
            id: 7,
            img: '/m7.jpg',
            link: 'https://www.amazon.in/Noise-Advanced-Bluetooth-Brightness-Smartwatch/dp/B0B6BLTGTT/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
        {
            id: 8,
            img: '/m8.jpg',
            link: 'https://www.amazon.in/Fire-Boltt-Bluetooth-Calling-Assistance-Resolution/dp/B0BF563HB4/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
        {
            id: 9,
            img: '/m9.jpg',
            link: 'https://www.amazon.in/Noise-Smartwatch-Brightness-Monitoring-watchfaces/dp/B0BTM47RBW/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
        {
            id: 10,
            img: '/m10.jpg',
            link: 'https://www.amazon.in/boAt-Wave-Leap-Call-Multi-Sports/dp/B0BX43SC5F/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
        {
            id: 11,
            img: '/m11.jpg',
            link: 'https://www.amazon.in/Noise-Bluetooth-Calling-Tracking-Detection/dp/B0B5LVS732/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
        {
            id: 12,
            img: '/m12.jpg',
            link: 'https://www.amazon.in/Fire-Boltt-Bluetooth-Calling-Assistance-Monitoring/dp/B0B854R7NS/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
        {
            id: 13,
            img: '/m13.jpg',
            link: 'https://www.amazon.in/beatXP-Bluetooth-smartwatch-tracking-Electric/dp/B0C4T91SNK/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
        {
            id: 14,
            img: '/m14.jpg',
            link: 'https://www.amazon.in/generation-Bluetooth-Smart-Band-Monitoring/dp/B0C77HDKBC/?_encoding=UTF8&pd_rd_w=tki2L&content-id=amzn1.sym.455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_p=455b0052-9d63-4134-9ba9-1c24be8cf7cf&pf_rd_r=H2PKEJTPVWG5Q90A76ZC&pd_rd_wg=AsuhX&pd_rd_r=b2bdd369-7744-4e5d-8d14-4e5955d7586a&ref_=pd_gw_CEPC_Wearables'
        },
    ]
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                navigation
                scrollbar={{ draggable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 3000 }}               
            >
                {carousel.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='h-[300px] flex flex-col gap-1 items-center justify-center ml-6 '>
                            <Link href={item.link} >
                                <div className='flex items-center justify-center'>
                                    <img
                                        className="object-contain aspect-[1] mix-blend-color-burn rounded-lg scale-120 transition-transform duration-300 hover:scale-90"
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
