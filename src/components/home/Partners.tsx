import SectionTitle from "../common/SectionTitle";
import { homeSections } from "@/data/homeSectionsTitle";
import ViewAllButton from "../common/ViewAllButton";
import Image from "next/image";

function Partners() {
  return (
    <section id="partners" className="">
      <div className="py-30 container-custom lg:py-37.5 ">
        <div className="flex flex-col lg:flex-row justify-around relative">
          {/* left bottom */}
          <div className="flex flex-row lg:flex-col justify-between">
            <div className="absolute bottom-full lg:left-[6%] lg:top-[0%]">
              <Image
                src="/images/icons/dunkin.png"
                width={100}
                height={60}
                alt="Dunkin"
                className="object-contain"
              />

              {/* Line from Dunkin to center */}
              <Image
                src="/images/icons/left top.png"
                width={200}
                height={100}
                alt=""
                className="absolute left-full top-1/2"
              />
            </div>
            <div className="absolute bottom-full lg:left-[6%] lg:bottom-[50%]">
              <Image
                src="/images/icons/seafrgo.png"
                width={100}
                height={50}
                alt="seafrgo icon"
                className="object-contain"
              />

              {/* Line from Dunkin to center */}
              <Image
                src="/images/icons/left top.png"
                width={200}
                height={100}
                alt=""
                className="absolute left-full top-1/2"
              />
            </div>
            <div className="absolute bottom-full lg:left-[6%] lg:bottom-[10%]">
              <Image
                src="/images/icons/mansour.png"
                width={70}
                height={40}
                alt="mansour icon"
                className="object-contain"
              />

              {/* Line from Dunkin to center */}
              <Image
                src="/images/icons/left top.png"
                width={200}
                height={100}
                alt=""
                className="absolute left-full bottom-0 -scale-y-100"
              />
            </div>
          </div>
          {/* center */}
          <div className="w-fit my-5 overflow-hidden py-12.5 lg:px-10 lg:gap-6 border rounded-[50px] [border-image-source:linear-gradient(90deg,#C6C6C6_0%,#FFFFFF_15%,#FFFFFF_50%,#FFFFFF_85%,#C6C6C6_100%)] [border-image-slice:1]">
            <div>
              <SectionTitle
                {...homeSections.partner}
                align="center"
                variant="light"
                className="max-w-xl"
              />
            </div>
            <ViewAllButton className=" p-10 text-white button-gradient repate rounded-[5px] text-center block lg:hidden">
              View All
            </ViewAllButton>
            <div className="hidden mt-6 lg:flex items-center justify-center gap-1.25">
              <div className="h-3 w-3 rounded-full bg-primary" />
              <div className="h-3 w-3 rounded-full bg-[#C4C4C4]" />
              <div className="h-3 w-3 rounded-full bg-[#C4C4C4]" />
            </div>
          </div>
          {/* right */}
          <div className="flex flex-row lg:flex-col justify-between">
            <div className="absolute top-full lg:right-[10%] lg:top-0">
              <Image
                src="/images/icons/tiffany.png"
                width={100}
                height={60}
                alt="tiffany icon"
                className="object-contain"
              />

              {/* Line from Dunkin to center */}
              <Image
                src="/images/icons/left top.png"
                width={200}
                height={100}
                alt=""
                className="absolute right-full top-1/2 -scale-x-100"
              />
            </div>
            <div className="absolute top-full lg:right-[10%] lg:top-[50%]">
              <Image
                src="/images/icons/carrefour.png"
                width={100}
                height={60}
                alt="carrefour icon"
                className="object-contain"
              />

              {/* Line from Dunkin to center */}
              <Image
                src="/images/icons/left top.png"
                width={200}
                height={100}
                alt=""
                className="absolute right-full top-1/2 -scale-x-100"
              />
            </div>
            <div className="absolute top-full lg:right-[3%] lg:bottom-0">
              <Image
                src="/images/icons/USA.png"
                width={100}
                height={60}
                alt="USA icon"
                className="object-contain"
              />

              {/* Line from Dunkin to center */}
              <Image
                src="/images/icons/left top.png"
                width={200}
                height={100}
                alt=""
                className="absolute right-full top-1/2 -scale-y-100"
              />
            </div>
          </div>
        </div>
        {/* <div className="w-[300px] border rounded-[50px] [border-image-source:linear-gradient(90deg,#C6C6C6_0%,#FFFFFF_15%,#FFFFFF_50%,#FFFFFF_85%,#C6C6C6_100%)] [border-image-slice:1] h-[200px]">
          <div className="relative">
            <Image
              src="/images/icons/dunkin.png"
              width={50}
              height={50}
              className="h-auto w-[50px] lg:w-[150px] object-contain relative"
              alt="icon"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/icons/tiffany.png"
              width={50}
              height={50}
              className="h-auto w-[50px] lg:w-[150px] object-fill absolute -right-30 bottom-[50%]"
              alt="icon"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Partners;
