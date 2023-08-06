import React from 'react'
import Link from 'next/link'
const Demo = () => {
    return (
        <div className='min-w-[1000px] bg-gray-100 flex flex-col gap-4'>
            <img src="/demo4.jpg" alt="" />
            <Link href='https://www.amazon.in/l/88478571031/ref=cg_Aug23ART_1a1_w?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=slot-2&pf_rd_r=WTXYM2QT2CS1N6DZZH99&pf_rd_t=0&pf_rd_p=c6033388-a886-4ce3-98d9-c5273de10c6f&pf_rd_i=greatfreedomsale'>
                <img src="/demo1.jpg" alt="" />
            </Link>
            <Link href='https://www.amazon.in/gp/redirect.html/ref=cg_Aug23ART_2a1_w?_encoding=UTF8&location=https%3A%2F%2Fwww.amazon.in%2Fh%2Frewards%2Fdp%2Famzn1.rewards.rewardAd.QJANALQLF6HAU%3Frdpf%3Den&source=standards&token=CFEC019E17A8EF9035242BD68EC0D4245FDFD6AA&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=slot-2&pf_rd_r=WTXYM2QT2CS1N6DZZH99&pf_rd_t=0&pf_rd_p=c6033388-a886-4ce3-98d9-c5273de10c6f&pf_rd_i=greatfreedomsale'>
                <img src="/demo2.jpg" alt="" />
            </Link>
            <Link href='https://www.amazon.in/l/29657746031/ref=cg_Aug23T2Unrec_NTA_Banner_Eng_w?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=slot-3&pf_rd_r=WTXYM2QT2CS1N6DZZH99&pf_rd_t=0&pf_rd_p=6933c966-476e-4bf8-bb6a-df6e93119592&pf_rd_i=greatfreedomsale'>
                <img src="/demo3.jpg" alt="" />
            </Link>

        </div>
    )
}

export default Demo