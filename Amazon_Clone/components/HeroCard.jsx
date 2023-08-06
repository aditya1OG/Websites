import React from 'react'
import Link from 'next/link'

const HeroCard = ({ title, img, link }) => {
    return (
        <div className="h-[420px] bg-white z-30 mt-[4px] mb-8 m-2 pt-3 shadow-lg">
            <div className="text-lg xl:text-xl font-semibold mt-4 flex justify-center">{title}</div>
            <Link href={link} className=' cursor-pointer flex justify-center items-center flex-col'>
                <div className="h-[300px] m-2">
                    <img
                        className="h-[100%] w-[100%] object-cover scale-90 rounded-lg transition-transform duration-300 hover:scale-100"
                        src={img}
                        alt="Home card"
                    />
                </div>
            </Link>
            <div className='ml-6 mt-2'>
                <Link legacyBehavior href='https://www.amazon.in/greatfreedomsale/?_encoding=UTF8&deals-widget=%257B%2522presetId%2522%3A%2522deals-collection-top-deals-with-exchange%2522%257D&_ref=dlx_gate_sd_dcl_vai_dt&pd_rd_w=VZcpL&content-id=amzn1.sym.105cddd3-1f17-44a3-b11c-225c7a91530c&pf_rd_p=105cddd3-1f17-44a3-b11c-225c7a91530c&pf_rd_r=SDZJDQWSKT0Z71J14Y8K&pd_rd_wg=GIlyq&pd_rd_r=b2c49200-e62b-40cb-9b0c-2b41c0a57174&ref_=pd_gw_unk'>
                    <a className='text-sm text-blue-500 hover:underline hover:text-red-500'>See all deals</a>
                </Link>
            </div>
        </div>
    )
}

export default HeroCard