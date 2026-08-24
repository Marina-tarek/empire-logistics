import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 text-[16px] text-[#333] outline-none">
        <Image
          src="/images/icon.png"
          width={20}
          height={20}
          alt="language icon"
        />

        <span>En</span>

        <MdArrowDropDown className="size-4 text-[#C4C4C4]" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem>English</DropdownMenuItem>
        <DropdownMenuItem>Arabic</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}