"use client";
import { homeSections } from "@/data/homeSectionsTitle";
import SectionTitle from "../common/SectionTitle";
import { serviceSections } from "@/data/service";
import ServiceCard from "../common/ServiceCard";
import ViewAllButton from "../common/ViewAllButton";
import { useState } from "react";

function Service() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll
    ? serviceSections
    : serviceSections.slice(0, 4);

  return (
    <section id="service" className="bg-primary">
      <div className="container-custom py-24.25 lg:py-31">
        <SectionTitle
          {...homeSections.services}
          align="center"
          variant="dark"
        />

        {/* Mobile */}
        <div className="grid grid-cols-2 gap-6 py-10 lg:hidden">
          {visibleServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden grid-cols-3 gap-6 py-10 lg:grid lg:py-12">
          {serviceSections.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <ViewAllButton onClick={() => setShowAll((prev) => !prev)} className="text-white hover:text-white ">
          
          {showAll ? "Show Less" : "View All"}
        </ViewAllButton>
      </div>
    </section>
  );
}

export default Service;
