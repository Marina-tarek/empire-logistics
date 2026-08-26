import { ServiceSections } from "@/types/service";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

function ServiceCard({ icon, title, desc }: ServiceSections) {
  return (
    <Card className="border border-[#808080] rounded-[5px] bg-[#252424] py-[24px] lg:py-[40px]">
      <CardContent className="text-white flex flex-col items-center justify-center gap-[24px] px-0">
        <div>
          <Image
            src={icon}
            alt={title}
            height={48}
            width={48}
            className="w-8 h-8 lg:h-12 lg:w-12 z-10  object-contain"
          />
        </div>
        <div className="text-center">
          <h3 className="text-[18px] lg:text-[22px] font-bold leading-6 lg:leading-8">
            {title}
          </h3>
          <p className="text-sm lg:text-base leading-6">{desc}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
