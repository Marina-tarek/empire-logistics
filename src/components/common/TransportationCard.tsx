import { TransportationSections } from "@/types/transportation";
import Image from "next/image";

function TransportationCard({ image,eyebrow,title}:TransportationSections) {
  return (
    <div className="group relative h-[220px] lg:h-[720px]  overflow-hidden rounded-[5px] ">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="h-full object-cover transition-all duration-[250ms] ease-in lg:group-hover:scale-[1.2]"
      />
  
      <div
        className="
      absolute inset-0
      bg-[linear-gradient(180deg,rgba(29,27,27,0.12)_0%,rgba(29,27,27,0.8)_100%)]
      lg:opacity-0
      transition-opacity
      duration-[250ms]
      ease-in
      lg:group-hover:opacity-100
    "
      >
        {/* content */}
        <div className="absolute w-full bottom-[17px] lg:bottom-[61px] z-10 text-white flex flex-col text-center  item-center px-[33px] lg:opacity-0 transition-opacity duration-[250ms] ease-in  lg:group-hover:opacity-100">
          <span className="text-[16px] leading-[24px] lg:text-[28px] font-semibold lg:leading-[40px]">
            {eyebrow}
          </span>
          <h3 className="text-[20px] leading-[24px] lg:text-[38px] font-bold lg:leading-[56px]">
            {title}
          </h3>
        </div>
      </div>
      
    </div>
  );
}

export default TransportationCard;
