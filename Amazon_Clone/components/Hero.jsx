"use client"

import Carousel from './Carousel'
import HeroCard2 from './heroCard2'
import Link from 'next/link'
import SecondCarousel from './SecondCarousel'
import Category from './Category'
import ThirdCarousel from './ThirdCarousel'
import FourthCarousel from './FourthCarousel'
import Banner from './Banner'
import FifthCarousel from './FifthCarousel'
import Footer from './Footer'
import Demo from './Demo'
const Hero = () => {
  return (
    <div className="bg-slate-200 min-w-[1000px]">
      <Carousel />
      <HeroCard2 />
      <Demo />
      <div className='bg-white gap-4 mx-6'>
        <div className='flex gap-6 p-4 items-center'>
          <h1 className='text-xl font-medium'>Top deals with exchange offers</h1>
          <Link legacyBehavior href='https://www.amazon.in/greatfreedomsale/?_encoding=UTF8&deals-widget=%257B%2522presetId%2522%3A%2522deals-collection-top-deals-with-exchange%2522%257D&_ref=dlx_gate_sd_dcl_vai_dt&pd_rd_w=VZcpL&content-id=amzn1.sym.105cddd3-1f17-44a3-b11c-225c7a91530c&pf_rd_p=105cddd3-1f17-44a3-b11c-225c7a91530c&pf_rd_r=SDZJDQWSKT0Z71J14Y8K&pd_rd_wg=GIlyq&pd_rd_r=b2c49200-e62b-40cb-9b0c-2b41c0a57174&ref_=pd_gw_unk'>
            <a className='text-sm text-blue-500 hover:underline hover:text-red-500'>See all deals</a>
          </Link>
        </div>
        <SecondCarousel />
      </div>
      <div className='mt-10 object-cover'>
        <img src="/banner_image.jpg" alt="" />
      </div>
      <div className='mx-6'>
        <Category />
      </div>
      <div className='bg-white my-4 mx-6'>
        <ThirdCarousel />
      </div>
      <div className='bg-white flex justify-center items-center my-4 object-contain mx-6'>
        <Banner />
      </div>
      <FourthCarousel />
      <div className='bg-white'>
        <div className='flex gap-6 p-4 items-center'>
          <h1 className='text-xl font-medium'>Shop deals in top categories</h1>
          <Link legacyBehavior href='https://www.amazon.in/gp/mobile/deals/?ie=UTF8&pd_rd_w=VSd9z&content-id=amzn1.sym.021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_p=021c2438-7d54-43e6-92d5-a14cc35b409a&pf_rd_r=W7XR38NS6S2XZ9VT46HE&pd_rd_wg=d3fiL&pd_rd_r=2813f6b9-7f7b-4f8c-a142-78d83a4383b9&ref_=pd_gw_unk'>
            <a className='text-sm text-blue-500 hover:underline hover:text-red-500'>Explore all categories</a>
          </Link>
        </div>
        <FifthCarousel />

        <Footer />
      </div>
    </div>
  )
}

export default Hero