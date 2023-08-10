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
            img: '/s1.jpg',
            link: 'https://www.amazon.in/realme-Display-Premium-Leather-SUPERVOOC/dp/B0C788SHHC/ref=pd_rhf_d_gw_s_pd_sbs_rvi_sccl_1_2/257-8570030-7033840?pd_rd_w=riCR2&content-id=amzn1.sym.f2f99b52-a5ca-432b-8bfe-0d72feb3d1ba&pf_rd_p=f2f99b52-a5ca-432b-8bfe-0d72feb3d1ba&pf_rd_r=7SQSVA39ZKWFZGFV3PGA&pd_rd_wg=1IFQv&pd_rd_r=a5182ae5-c19c-4731-8fe7-cbf16c61e9a2&pd_rd_i=B0C788SHHC&psc=1'
        },
        {
            id: 2,
            img: '/s2.jpg',
            link: 'https://www.amazon.in/dp/B0BDHX8Z63?pd_rd_w=jHlBA&content-id=amzn1.sym.9afedf8f-b38e-4009-99e2-2879ecb89c2b&pf_rd_p=9afedf8f-b38e-4009-99e2-2879ecb89c2b&pf_rd_r=3JJBA6QCK0BNVREG255G&pd_rd_wg=Le7ym&pd_rd_r=a4da3524-abf2-4b89-afa8-7efbeb74d4a7'
        },
        {
            id: 3,
            img: '/s3.jpg',
            link: 'https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&adId=A00360541JQGFVQ7PKPI7&qualifier=1691135164&id=8673129859710996&widgetName=sp_detail_thematic&url=%2Fdp%2FB0BQJM2PXW%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB0BQJM2PXW%26pd_rd_w%3DSsvkD%26content-id%3Damzn1.sym.dcd65529-2e56-4c74-bf19-15db07b4a1fc%26pf_rd_p%3Ddcd65529-2e56-4c74-bf19-15db07b4a1fc%26pf_rd_r%3DJYKV2A6A55X5WR83YKDG%26pd_rd_wg%3DT3jy8%26pd_rd_r%3De01ba945-e5a1-4b54-86c8-e96e6b0f2cce%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM'
        },
        {
            id: 4,
            img: '/s4.jpg',
            link: 'https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&adId=A00866053GZGLA6GJJC7D&qualifier=1691135265&id=1942651132198479&widgetName=sp_detail_thematic&url=%2Fdp%2FB0BT9FPXW6%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1%26pf_rd_p%3Ddcd65529-2e56-4c74-bf19-15db07b4a1fc%26pf_rd_r%3DM37SYTGRZRRX79CSYY5R%26pd_rd_wg%3DaL7el%26pd_rd_w%3DYHzWO%26content-id%3Damzn1.sym.dcd65529-2e56-4c74-bf19-15db07b4a1fc%26pd_rd_r%3D43ec8d2f-4011-4449-bb3a-358fb7c193e2%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM'
        },
        {
            id: 5,
            img: '/s5.jpg',
            link: 'https://www.amazon.in/iQOO-Storage-Snapdragon%C2%AE-Independent-Flagship/dp/B07WGNJF9L/ref=psdc_1805560031_t3_B0C788SHHC'
        },
        {
            id: 6,
            img: '/s6.jpg',
            link: 'https://www.amazon.in/OnePlus-Misty-Green-128GB-Storage/dp/B0C7V7VH6Q/ref=psdc_1805560031_t2_B0C788SHHC'
        },
        {
            id: 7,
            img: '/s7.jpg',
            link: 'https://www.amazon.in/gp/product/B08VB57558/ref=s9_acss_bw_cg_Budget_3a1_w?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-9&pf_rd_r=Z8BTZ35FFZT7FTNE6AQ9&pf_rd_t=101&pf_rd_p=167eb54d-4c66-4ed9-83de-eefcafa0f3c8&pf_rd_i=1389401031'
        },
        {
            id: 8,
            img: '/s8.jpg',
            link: 'https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&adId=A01969291ZM42BUZWCRQZ&qualifier=1691136050&id=6600819927386376&widgetName=sp_detail_thematic&url=%2Fdp%2FB0CB697VJQ%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1%26pd_rd_i%3DB0CB697VJQ%26pd_rd_w%3D9SN4t%26content-id%3Damzn1.sym.dcd65529-2e56-4c74-bf19-15db07b4a1fc%26pf_rd_p%3Ddcd65529-2e56-4c74-bf19-15db07b4a1fc%26pf_rd_r%3D15J66PRQQ9DAJFK9VGWN%26pd_rd_wg%3Dixf8A%26pd_rd_r%3D8a2c2e90-b1c1-4344-acf9-8d36b8d16379%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM'
        },
        {
            id: 9,
            img: '/s9.jpg',
            link: 'https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&adId=A0289266NKPS33HNU1AB&qualifier=1691136083&id=2564184945475729&widgetName=sp_detail_thematic&url=%2Fdp%2FB0BT9FF5FL%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1%26pd_rd_i%3DB0BT9FF5FL%26pd_rd_w%3DYA6m1%26content-id%3Damzn1.sym.dcd65529-2e56-4c74-bf19-15db07b4a1fc%26pf_rd_p%3Ddcd65529-2e56-4c74-bf19-15db07b4a1fc%26pf_rd_r%3DHNC7YZ67ENSSQABNX0QH%26pd_rd_wg%3DFzllf%26pd_rd_r%3Dd99a4051-cd99-4061-aa36-9758ae8b5216%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM'
        },
        {
            id: 10,
            img: '/s10.jpg',
            link: 'https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&adId=A08212892BLWM64P5XSEJ&qualifier=1691136189&id=2984718014530520&widgetName=sp_detail_thematic&url=%2Fdp%2FB07WHQLR7G%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1%26pd_rd_i%3DB07WHQLR7G%26pd_rd_w%3DV6hsN%26content-id%3Damzn1.sym.dcd65529-2e56-4c74-bf19-15db07b4a1fc%26pf_rd_p%3Ddcd65529-2e56-4c74-bf19-15db07b4a1fc%26pf_rd_r%3D9Q4R3HFH6RR76B6KB29H%26pd_rd_wg%3D5R94K%26pd_rd_r%3Dfc36d8a9-a897-4575-b971-240a16b53cec%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM'
        },
    ]
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 3000 }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {carousel.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='h-[300px] flex flex-col relative gap-1 items-center justify-center ml-6'>
                            <Link href={item.link} >
                                <div className=' w-full m-2 flex items-center justify-center'>
                                    <img
                                        className="object-contain aspect-[1] mix-blend-color-burn absolute object-contain rounded-lg scale-120 transition-transform duration-300 hover:scale-90"
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
