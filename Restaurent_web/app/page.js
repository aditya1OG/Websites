import About from "@/components/About";
// import Carousel from "@/components/Carousel";
import Carousel2 from "@/components/Carousel2";
import Menu from "@/components/Menu";
import Orders from "@/components/Orders";
import Services from "@/components/Services";
import Link from 'next/link'

export default function Home() {
  return (
    < >
      <div className="h-[130vh]">
        <div className="h-full object-contain -mt-[80px] z-0 relative ">
          <div className="h-[130vh] w-full flex items-center justify-center flex-col text-white gap-2">
            <p className="text-[60px] sm:text-[80px] font-cursive bg-transparent rotate-[-8deg] italic">'TASTE BUDS'</p>
            <p className="font-extrabold text-[13px] sm:text-[18px] lg:text-[20px] tracking-tightest">QUALITY PRODUCTS. HAWAIIAN FLAVOURS.</p>
            <h1 className="text-[14px] sm:text-[18px] lg:text-[20px] bold md:font-extrabold font-nunito">Open Daily for Takeout & Delivery</h1>
            <Link href='/Menus' legacyBehavior>
              <a className=" bg-[rgb(16,132,111)] text-white px-8 py-2 hover:text-[rgb(16,132,111)] hover:bg-white">Order Online</a>
            </Link>
          </div>
          <div className="h-full bg-no-repeat absolute inset-0 bg-bg_img brightness-[70%] bg-center bg-cover z-[-1]"></div>
        </div>
      </div>
      <Menu />
      <About />
      <Services />
      {/* <Carousel/> */}
      <Orders />
      <div className="sticky bg-pink-100 p-10 flex flex-col items-center justify-center gap-3 mb-12 z-[-1]">
        <h1 className=" text-xl font-poppines">Follow</h1>
        <p className="text-[#DF080F] font-cursive text-4xl cursor-pointer">adityatiwari9410@gmail.com</p>
      </div>
      <Carousel2 />
    </>
  )
}
