"use client"
import { homeSections } from "@/data/homeSectionsTitle";
import SectionTitle from "../common/SectionTitle";
import FAQItem from "../common/FAQItem";
import { faqData } from "@/data/faqData";
import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };
  return (
    <section
      id="faq"
      className="relative bg-[url('/images/space.png')] bg-cover bg-center py-25 lg:py-37.5"
    >
      {/* layer */}
      <div className="bg-primary/85 absolute inset-0"></div>
      <div className="container-custom relative z-10">
        {/* title */}
        <div>
          <SectionTitle {...homeSections.faq} variant="dark" align="center" />
        </div>
        {/* FQA */}
        <div className="pt-10 lg:pt-12 gap-4 lg:gap-6 flex flex-col">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
