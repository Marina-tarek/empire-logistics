import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { NavLink as NavLinkType } from "@/types/navigation";

export default function NavLink({
  label,
  href,
  hasDropdown,
}: NavLinkType) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 py-2.5 text-[16px] leading-6 font-medium text-primary transition-colors hover:border-b hover:border-b-[rgba(29,27,27,1)]"
    >
      <span>{label}</span>

      {hasDropdown && <ChevronDown className="size-5 text-primary" />}
    </Link>
  );
}