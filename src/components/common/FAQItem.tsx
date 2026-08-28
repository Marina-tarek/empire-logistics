import { FAQ } from "@/types/faq";
import { Button } from "../ui/button";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

interface FAQItemProps {
  isOpen: boolean;
  item: FAQ;
  onToggle: () => void;
}
function FAQItem({ isOpen, item, onToggle }: FAQItemProps) {
  return (
    <div className="overflow-hidden rounded-[5px] border border-[#808080] bg-[#252424] transition-colors py-4 px-6">
      <Button
        onClick={onToggle}
        className="flex justify-between w-full bg-transparent hover:bg-transparent px-0 "
      >
        <div>
          <span className="text-wrap  text-[18px] leading-6 font-medium text-white ">
            {item.question}
          </span>
        </div>
        <div className="w-5 h-5 ">
          {isOpen ? <CiSquareMinus size="20px" /> : <CiSquarePlus size="20px"/>}
        </div>
      </Button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[#4C4C4C] text-[16px] leading-6 text-[#C4C4C4] pt-2.5 pb-10">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
