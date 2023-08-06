import React from 'react'
import HeroCard from './HeroCard'
import Link from 'next/link'
const FourthCarousel = () => {
    return (
        <div className='grid grid-cols-3 xl:grid-cols-4 bg-slate-100'>
            <HeroCard title={"Get 50% off on Selling fee*"}
                img={"/s11.jpg"}
                link={"https://www.amazon.in/b/?_encoding=UTF8&node=43100106031&pd_rd_w=QRob2&content-id=amzn1.sym.9c5c6dca-400e-444f-9eb3-30bda76bdaa8&pf_rd_p=9c5c6dca-400e-444f-9eb3-30bda76bdaa8&pf_rd_r=DX79K7P1V60K6CSW5RXA&pd_rd_wg=RuRFR&pd_rd_r=c84d5092-6047-497d-9fa5-c9351ae51570&ref_=pd_gw_unk"}
            />
            <HeroCard title={"70% off | Refurbished Products"}
                img={"/s12.jpg"}
                link={"https://www.amazon.in/b/?_encoding=UTF8&node=12497409031&pd_rd_w=RcRhJ&content-id=amzn1.sym.dd142565-9f5f-46a8-b3da-292a2e1b95ea&pf_rd_p=dd142565-9f5f-46a8-b3da-292a2e1b95ea&pf_rd_r=ARVRKTY7D3KM0QXKN94K&pd_rd_wg=iCOU2&pd_rd_r=659da4ea-c901-47e8-bc30-c8d3ba2fa27f&ref_=pd_gw_unk"}
            />
            <HeroCard title={"Buy 2 get 10% off more offers"}
                img={"/s13.jpg"}
                link={"https://www.amazon.in/b/?_encoding=UTF8&ie=UTF8&node=31818347031&pd_rd_w=3XAch&content-id=amzn1.sym.ed86a5e4-66ec-40c8-8477-0e9546c80f37&pf_rd_p=ed86a5e4-66ec-40c8-8477-0e9546c80f37&pf_rd_r=ARVRKTY7D3KM0QXKN94K&pd_rd_wg=iCOU2&pd_rd_r=659da4ea-c901-47e8-bc30-c8d3ba2fa27f&ref_=pd_gw_unk"}
            />
            <div className="h-[420px] bg-white z-30 mt-[4px] mb-8 m-2 pt-3 shadow-lg xl:block hidden">
                <div className="text-lg xl:text-xl font-semibold mt-4 flex justify-center ">70% off | International brands</div>
                <Link href='https://www.amazon.in/b/?_encoding=UTF8&node=29423973031&pd_rd_w=huj5y&content-id=amzn1.sym.bd228ec2-a0c2-4d28-a9ec-1a921bc66978&pf_rd_p=bd228ec2-a0c2-4d28-a9ec-1a921bc66978&pf_rd_r=ARVRKTY7D3KM0QXKN94K&pd_rd_wg=iCOU2&pd_rd_r=659da4ea-c901-47e8-bc30-c8d3ba2fa27f&ref_=pd_gw_unk' className=' cursor-pointer flex justify-center items-center flex-col'>
                    <div className="h-[300px] m-2">
                        <img
                            className="h-[100%] w-[100%] object-cover rounded-lg transition-transform duration-300 scale-90 hover:scale-100"
                            src='/s14.jpg'
                            alt="Home card"
                        />
                        <div className=' ml-6 mt-2'>
                            <Link legacyBehavior href='https://www.amazon.in/greatfreedomsale/?_encoding=UTF8&deals-widget=%257B%2522presetId%2522%3A%2522deals-collection-top-deals-with-exchange%2522%257D&_ref=dlx_gate_sd_dcl_vai_dt&pd_rd_w=VZcpL&content-id=amzn1.sym.105cddd3-1f17-44a3-b11c-225c7a91530c&pf_rd_p=105cddd3-1f17-44a3-b11c-225c7a91530c&pf_rd_r=SDZJDQWSKT0Z71J14Y8K&pd_rd_wg=GIlyq&pd_rd_r=b2c49200-e62b-40cb-9b0c-2b41c0a57174&ref_=pd_gw_unk'>
                                <a className='text-sm text-blue-500 hover:underline hover:text-red-500'>See all deals</a>
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default FourthCarousel