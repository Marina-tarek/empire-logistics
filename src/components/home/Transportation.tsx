"use client";
import { homeSections } from "@/data/homeSectionsTitle";
import SectionTitle from "../common/SectionTitle";
import TransportationCard from "../common/TransportationCard";
import { transportationSections } from "@/data/transportation";
import ViewAllButton from "../common/ViewAllButton";
import { useShowMore } from "@/hooks/useShowMore";
function Transportation() {
  const {
    showAll,
    toggleShowAll,
  } = useShowMore(transportationSections, 3);
  return (
    <section id="transportation" className="">
      <div className="container-custom py-[120px]">
        <SectionTitle
          {...homeSections.transportation}
          align="center"
          variant="light"
        />
        <div className="py-[40px] lg:py-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[28px] xl:gap-[38px]  ">
          {transportationSections.map((transport, index) => (
            <div
              key={index}
              className={index >= 3 && !showAll ? "hidden lg:block" : "block"}
            >
              <TransportationCard {...transport} />
            </div>
          ))}
        </div>
        <ViewAllButton
          onClick={toggleShowAll}
          className="text-primary lg:text-[#4C4C4C] hover:text-primary border-primary lg:border-[#4C4C4C] "
        >
          {showAll ? "Show Less" : "View All"}
        </ViewAllButton>
      </div>
    </section>
  );
}

export default Transportation;
