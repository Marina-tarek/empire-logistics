"use client";

import { useState } from "react";
import Image from "next/image";

import { homeSections } from "@/data/homeSectionsTitle";
import { industries } from "@/data/industySectors";

import SectionTitle from "../common/SectionTitle";
import ViewAllButton from "../common/ViewAllButton";

function IndustrySectors() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const activeImage = industries[activeIndustry]?.image;

  return (
    <section id="industries" className="bg-[#F5F4F4]">
      <div className="container-custom py-24 lg:py-30">
        {/* Section Title */}
        <SectionTitle
          {...homeSections.industrySector}
          align="center"
          variant="light"
        />

        {/* Industries Content */}
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-[4fr_7fr] lg:px-12.5 xl:px-25">
          {/* Industries List */}
          <div className="flex flex-col py-[25.5px] pe-6">
            {industries.map((industry, index) => {
              const isActive = activeIndustry === index;

              return (
                <button
                  key={`${industry.title}-${index}`}
                  type="button"
                  onClick={() =>{
                    if(!industry.image)return;
                    setActiveIndustry(index);}
                    }
                  className={`
                    cursor-pointer
                    w-full
                    px-6
                    py-4
                    text-left
                    text-[18px]
                    font-medium
                    transition-all
                    duration-200
                    border-l-4
                    hover:border-l-black hover:bg-[linear-gradient(90deg,rgba(29,27,27,0.12)_0%,rgba(0,0,0,0)_100%)]
                    ${
                      isActive
                        ? "border-l-black bg-[linear-gradient(90deg,rgba(29,27,27,0.12)_0%,rgba(0,0,0,0)_100%)]"
                        : "border-l-[#EAEAEA] bg-transparent"
                    }
                    ${
                      index>=4? "text-transparent":"text-[#808080]"
                    }
                  `}
                >
                  {industry.title}
                </button>
              );
            })}

            {/* All Industries */}
            <ViewAllButton
              className="mt-6 flex-start border-[#4C4C4C] text-[#4C4C4C] "
            >
              All Industries
            </ViewAllButton>
          </div>

          {/* Industry Image */}
          <div className="relative h-[50%] lg:min-h-100 w-full overflow-hidden rounded-[5px]">
            {activeImage && (
              <Image
                src={activeImage}
                alt={industries[activeIndustry].title}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustrySectors;