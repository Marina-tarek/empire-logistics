import { featuredShipmentStats } from "@/data/featured-shipment";
import SectionTitle from "../common/SectionTitle";
import { homeSections } from "./../../data/homeSectionsTitle";

export default function FeaturedShipment() {
  return (
    <section className="w-full  mx-auto py-40 bg-white">
      <div className="container-custom">
        <div className="md:relative grid grid-cols-1 md:grid-cols-[1fr_1.5fr] isolate">
          {/* Absolute Video Frame behind the cards */}
          <div className="md:absolute md:inset-0 z-0 overflow-hidden rounded-[5px] md:rounded-[2rem] pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/featured-shipment image.png"
              className="w-full h-full object-cover -scale-x-100 "
            >
              <source src="https://res.cloudinary.com/dnvr7vfuw/video/upload/featured-shipment.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Transparent color tint layer */}
            <div className="absolute inset-0 " />
          </div>

          {/*Top Left content */}
          <div className="lg:relative  z-10 bg-white p-6 md:p-10 pr-6  rounded-br-[31px] flex flex-col justify-center ">
            <SectionTitle
              {...homeSections.featuredShipment}
              align="left"
              variant="light"
            />
          </div>

          <div className="md:relative z-0 hidden lg:flex md:h-87.5 xl:h-120 rounded-[31px]" />
          <div className="md:relative z-0  md:h-57 lg:h-70" />

          {/* Statistics Card */}
          <div className="relative z-10 bg-white p-6 md:px-10  rounded-tl-[2rem] grid grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center md:text-left self-stretch">
            {featuredShipmentStats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  {stat.value}
                </h3>

                <p className="text-xs font-medium uppercase tracking-wider text-slate-400 md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
