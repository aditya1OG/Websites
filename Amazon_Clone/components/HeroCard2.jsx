import React from 'react'
import HeroCard from './HeroCard'
import Link from 'next/link'
const HeroCard2 = () => {
    return (
        <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80 bg-slate-100'>
            <HeroCard title={"Keep Shopping for"}
                img={"/p1.jpg"}
                link={"https://www.amazon.in/hz/mobile/mission?p=lBh0qkj9bcVAY9NcyMu7wuwFRI4ii9hhOKUBfibuVUwjEC9cOEsbpKt401%2FPAuVXi2guJ3oAxsF%2BXoJxKH9tU2GBbWfvX8V9j26EtHYTN0ui%2Bg%2F5ALQVz%2FYTRvHGxK9LDdOKZBnw87%2Fp4iJ5oRcY4o47MX6HfP%2BxPMkrcNV4mDxKde3%2BLFARKnZQlPMc0qpRAWaExUbJRDlKB65%2Ft2TAIll%2FgR1W%2BHYHmjnRhknvUAd85xWQmGlMm4hGIZ50qgWF6tsaG92d0O04qqBkP2OLn7ExVwH7PLhgEfzFqrenanlxqSPARSb%2FTV7DmuIwX%2FuPMcXBtC%2BM59%2BK%2B89Vy768Kjt%2FcbpQAgcdhSjuqgAy0ik8NwEYhULJT3wwjvkxAkbtm4Hvrg0Ii74xQVtEBTKMitTFol0nISCHtMNU63FjXJc%3D&ref_=ci_mcx_mi&pf_rd_r=AXMDNTGPASY21D6D0XG8&pf_rd_p=f177e563-28a7-46df-8436-00fa3a7da710&pd_rd_r=105d0f75-1db6-49cb-bb96-9a0e95ac8bc5&pd_rd_w=pkRyU&pd_rd_wg=0eJCC"}
            />
            <HeroCard title={"Daily needs"}
                img={"/p2.jpg"}
                link={"https://www.amazon.in/b/?_encoding=UTF8&node=27394885031&pd_rd_w=rCfrB&content-id=amzn1.sym.114d1da8-84c3-459e-88bd-86f2828fcdd8&pf_rd_p=114d1da8-84c3-459e-88bd-86f2828fcdd8&pf_rd_r=SDZJDQWSKT0Z71J14Y8K&pd_rd_wg=GIlyq&pd_rd_r=b2c49200-e62b-40cb-9b0c-2b41c0a57174&ref_=pd_gw_unk"}
            />
            <HeroCard title={"Deals on Amazon brands & more"}
                img={"/p3.jpg"}
                link={"https://www.amazon.in/b/ref=sl_gw_feb20/?_encoding=UTF8&node=15390370031&pd_rd_w=3Lztr&content-id=amzn1.sym.73a63da2-8938-4b64-bd3c-bc7cca7ba8fc&pf_rd_p=73a63da2-8938-4b64-bd3c-bc7cca7ba8fc&pf_rd_r=SDZJDQWSKT0Z71J14Y8K&pd_rd_wg=GIlyq&pd_rd_r=b2c49200-e62b-40cb-9b0c-2b41c0a57174&ref_=pd_gw_unk"}
            />
            <HeroCard title={"covers for top Smartphones"}
                img={"p4.jpg"}
                link={"https://www.amazon.in/dp/B0BC9BHGYJ/?_encoding=UTF8&ie=UTF8&ref_=MSO_casesDESKTOP_tile1&pd_rd_w=U66BJ&content-id=amzn1.sym.b6870cf5-6cb8-47b7-bb57-18ee8a041372&pf_rd_p=b6870cf5-6cb8-47b7-bb57-18ee8a041372&pf_rd_r=SDZJDQWSKT0Z71J14Y8K&pd_rd_wg=GIlyq&pd_rd_r=b2c49200-e62b-40cb-9b0c-2b41c0a57174"}
            />
            <HeroCard title={"Prime Early Deals | Starting from 99"}
                img={"p5.jpg"}
                link={"https://www.amazon.in/s/?_encoding=UTF8&bbn=976389031&rh=n%3A976389031%2Cp_36%3A1741389031&pd_rd_w=QlHjw&content-id=amzn1.sym.f97c6dc7-370e-43c1-bb7b-ad757bced92c&pf_rd_p=f97c6dc7-370e-43c1-bb7b-ad757bced92c&pf_rd_r=SDZJDQWSKT0Z71J14Y8K&pd_rd_wg=GIlyq&pd_rd_r=b2c49200-e62b-40cb-9b0c-2b41c0a57174&ref_=pd_gw_unk"}
            />
            <HeroCard title={"Smartphones that suits your budget"}
                img={"/p6.jpg"}
                link={"https://www.amazon.in/s/?_encoding=UTF8&i=electronics&bbn=1805560031&rh=n%3A976419031%2Cn%3A1389401031%2Cn%3A1389432031%2Cn%3A1805560031%2Cp_36%3A1318505031%2Cp_n_condition-type%3A8609960031&ref_=tile1_below10k&pd_rd_w=ZHO6w&content-id=amzn1.sym.c5b5ee3c-4b35-4575-a972-d828b1d40d49&pf_rd_p=c5b5ee3c-4b35-4575-a972-d828b1d40d49&pf_rd_r=SDZJDQWSKT0Z71J14Y8K&pd_rd_wg=GIlyq&pd_rd_r=b2c49200-e62b-40cb-9b0c-2b41c0a57174"}
            />
            <HeroCard title={"Up t0 35% OFF on medicines"}
                img={"/p7.jpg"}
                link={"https://www.amazon.in/l/18049712031/?_encoding=UTF8&ref_=augart23_pharmacc&pd_rd_w=cTf6G&content-id=amzn1.sym.ea82671f-0a55-4bdc-bf7f-a26d7fb067e4&pf_rd_p=ea82671f-0a55-4bdc-bf7f-a26d7fb067e4&pf_rd_r=SDZJDQWSKT0Z71J14Y8K&pd_rd_wg=GIlyq&pd_rd_r=b2c49200-e62b-40cb-9b0c-2b41c0a57174"}
            />
            <HeroCard title={"Prime early Deals | Starting 95"}
                img={"p8.jpg"}
                link={"https://www.amazon.in/s/?_encoding=UTF8&bbn=1378311031&rh=n%3A1378311031%2Cp_n_deal_type%3A26921224031&dc=&qid=1691005915&rnid=26921223031&ref=lp_1378311031_nr_p_n_deal_type_1&pd_rd_w=u0FbZ&content-id=amzn1.sym.9f989c27-34b4-4689-80ba-4033bb1ddc77&pf_rd_p=9f989c27-34b4-4689-80ba-4033bb1ddc77&pf_rd_r=SDZJDQWSKT0Z71J14Y8K&pd_rd_wg=GIlyq&pd_rd_r=b2c49200-e62b-40cb-9b0c-2b41c0a57174&ref_=pd_gw_unk"}
            />
            <div className="h-[420px] bg-white z-30 mt-[4px] mb-8 m-2 pt-3 shadow-lg xl:hidden">
                <div className="text-lg xl:text-xl font-semibold mt-4 flex justify-center ">Home and Kitchen | starting with 70</div>
                <Link href='https://www.amazon.in/l/12414705031/?_encoding=UTF8&pd_rd_w=MpTvg&content-id=amzn1.sym.f24b91bd-b4a1-4575-bb50-6935b0c93db4&pf_rd_p=f24b91bd-b4a1-4575-bb50-6935b0c93db4&pf_rd_r=SDZJDQWSKT0Z71J14Y8K&pd_rd_wg=GIlyq&pd_rd_r=b2c49200-e62b-40cb-9b0c-2b41c0a57174&ref_=pd_gw_unk' className=' cursor-pointer flex justify-center items-center flex-col'>
                    <div className="h-[300px] m-2">
                        <img
                            className="h-[100%] w-[100%] object-cover rounded-lg transition-transform duration-300 scale-90 hover:scale-100"
                            src='/p9.jpg'
                            alt="Home card"
                        />
                    </div>
                </Link>
            </div>
        </div>)
}

export default HeroCard2