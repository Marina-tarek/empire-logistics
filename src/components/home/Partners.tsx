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
            <div className="1 sm:order-2 lg:order-1">
              <Image
                src="/images/icons/dunkin.png"
                width={100}
                height={60}
                alt="Dunkin"
                className="object-contain h-12.5 lg:h-16.25"
              />
            </div>
            <div className="2 sm:order-1 lg:order-2">
              <Image
                src="/images/icons/seafrgo.png"
                width={100}
                height={50}
                alt="seafrgo icon"
                className="object-contain h-11.25 lg:h-13.5"
              />
            </div>
            <div className="3 sm:order-3 lg:order-3">
              <Image
                src="/images/icons/mansour.png"
                width={70}
                height={40}
                alt="mansour icon"
                className="object-contain h-11.25 lg:h-13.5"
              />
            </div>
          </div>
          {/* center */}
          <div className="lg:w-fit my-15 overflow-hidden gap-4 py-12.5 lg:px-10 lg:gap-6 border rounded-[50px] [border-image-source:linear-gradient(90deg,#C6C6C6_0%,#FFFFFF_15%,#FFFFFF_50%,#FFFFFF_85%,#C6C6C6_100%)] [border-image-slice:1]">
            <div>
              <SectionTitle
                {...homeSections.partner}
                align="center"
                variant="light"
                className="lg:max-w-xl max-w-75 "
              />
            </div>
            <div className="block lg:hidden text-center mt-4">
              <ViewAllButton className=" text-white button-gradient mx-auto w-[75%] p-2.5 rounded-[5px]">
                View All
              </ViewAllButton>
            </div>
            <div className="hidden mt-6 lg:flex items-center justify-center gap-1.25">
              <div className="h-3 w-3 rounded-full bg-primary" />
              <div className="h-3 w-3 rounded-full bg-[#C4C4C4]" />
              <div className="h-3 w-3 rounded-full bg-[#C4C4C4]" />
            </div>
          </div>
          {/* right */}
          <div className="flex flex-row lg:flex-col justify-between">
            <div className="4  ">
              <Image
                src="/images/icons/tiffany.png"
                width={100}
                height={60}
                alt="tiffany icon"
                className="object-contain h-17.5 lg:h-20"
              />
            </div>
            <div className="5  ">
              <Image
                src="/images/icons/carrefour.png"
                width={100}
                height={60}
                alt="carrefour icon"
                className="object-contain h-11.25 lg:h-13.5"
              />
            </div>
            <div className="6  ">
              <Image
                src="/images/icons/USA.png"
                width={100}
                height={60}
                alt="USA icon"
                className="object-contain h-11.25 lg:h-13.5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
