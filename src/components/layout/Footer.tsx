import { navLinks } from "@/data/navigation";
import Image from "next/image";
import  Link  from 'next/link';
import ActionButton from "../common/ActionButton";

function Footer() {
  return (
    <section className="bg-primary text-white overflow-hidden relative">
        {/* thin layer in the top */}
        <div className="absolute top-0 h-2.5 w-full bg-[linear-gradient(180deg,#1A1819_0%,#444444_52%,#1A1819_100%)] z-10"/>
      <div className="container-custom py-20.5">
        {/* contetnt */}
        <div className="flex flex-col gap-22">
          {/* logo */}
          <div className="flex justify-center item-center">
            <Image
              width={142}
              height={119}
              src="/images/logo/white logo.png"
              alt="Empire Logistics"
              className="w-37.5 h-auto"
            />
          </div>
          {/* links */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 xl:gap-32">
                            <div className="flex flex-col gap-8 w-fit">
                    <h6 className="text-[20px] font-semibold leading-7">ABOUT EMPIRE</h6>
                    <ul className="flex flex-col gap-[12x]">
                        <li >
                            <Link href="#" className="text-16px leading-6">Home</Link>
                        </li>
                        {
                          navLinks.map((navLink,index)=>(<li key={index}> <Link href={navLink.href}  className="text-16px leading-6">{navLink.label}</Link> </li>))
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-8 w-fit">
                    <h6 className="text-[20px] font-semibold leading-7">FOR USERS</h6>
                    <ul className="flex flex-col gap-[12x]">
                      <li><Link href="#Articles" className="text-16px leading-6">Articles</Link></li>
                      <li><Link href="#Careers" className="text-16px leading-6">Careers</Link></li>
                      <li><Link href="#Events" className="text-16px leading-6">Events</Link></li>
                    </ul>
                </div>

            <div className="flex flex-col gap-8">
                <h6 className="text-[20px] font-semibold leading-7">CUSTOMER SERVICES</h6>
                <ul>
                    <li><Link href="#Contact us" className="text-16px leading-6">Contact us</Link></li>
                    <li><Link href="#FAQs" className="text-16px leading-6">FAQs</Link></li>
                </ul>
            </div>
            <div className="w-contain text-center">
                <h6 className="text-[20px] font-semibold leading-7 mb-8">Appointment</h6>
                <ActionButton/>

            </div>
          </div>
        </div>

      </div>
              {/* image */}
        <div className="relative h-175 inset-0">
            <Image fill src="/images/cube van.png" className="min-h-[40vh] w-full object-cover z-0" alt="cube van"/>
            <div className="absolute inset-0  bg-[linear-gradient(180deg,rgba(27,25,26,1)_0%,rgba(29,27,27,0.75)_28%,rgba(29,27,27,0)_100%)] z-10"/>
            <div className="text-center w-full  absolute bottom-17.5 z-20">
                <span className="text-[16px] flex w-full lg:w-[30%] mx-auto leading-6 pt-4 border-t border-white text-white">Copyright © 2026 Empire Logistics,Designed & Developed By Innovation Scope</span>
            </div>
        </div>
    </section>
  );
}

export default Footer;







            {/* <div className="flex  gap-16 lg:gap-32">
                <div className="flex flex-col gap-8">
                    <h6 className="text-[20px] font-semibold leading-7">ABOUT EMPIRE</h6>
                    <ul className="flex flex-col gap-[12x]">
                        <li >
                            <Link href="#" className="text-16px leading-6">Home</Link>
                        </li>
                        {
                          navLinks.map((navLink,index)=>(<li> <Link href={navLink.href} key={index} className="text-16px leading-6">{navLink.label}</Link> </li>))
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-8">
                    <h6 className="text-[20px] font-semibold leading-7">FOR USERS</h6>
                    <ul className="flex flex-col gap-[12x]">
                      <li><Link href="#Articles" className="text-16px leading-6">Articles</Link></li>
                      <li><Link href="#Careers" className="text-16px leading-6">Careers</Link></li>
                      <li><Link href="#Events" className="text-16px leading-6">Events</Link></li>
                    </ul>
                </div>
            </div> */}