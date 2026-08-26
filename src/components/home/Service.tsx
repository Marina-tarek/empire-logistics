import { homeSections } from "@/data/homeSectionsTitle";
import SectionTitle from "../common/SectionTitle";
import { serviceSections } from "@/data/service";
import ServiceCard from "../common/ServiceCard";
import { Button } from "../ui/button";

function Service() {
  return (
    <section id="service" className="bg-primary">
      <div className="container-custom py-24.25 lg:py-31">
        <SectionTitle
          {...homeSections.services}
          align="center"
          variant="dark"
        />
        <div className="grid grid-cols-2 gap-6  lg:grid-cols-3 py-10 lg:py-12">
          {serviceSections.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="text-center">
          <Button
            variant="ghost"
            className="text-[18px] font-medium leading-[24px] text-white rounded-none cursor-pointer border-0 border-b border-white outline-none hover:bg-transparent hover:text-white px-0"
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Service;
