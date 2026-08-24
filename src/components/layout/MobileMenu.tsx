"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ActionButton from "../common/ActionButton";
import type { NavLink as NavLinkType } from "@/types/navigation";
import LanguageSwitcher from "../common/LanguageSwitcher";
import NavLink from "../common/NavLink";

type MobileMenuProps = {
  links: NavLinkType[];
};
export default function MobileMenu({ links }: MobileMenuProps) {
  return (
    <div className="lg:hidden">
      <Sheet>
        {/* Menu Button */}
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            aria-label="Open navigation menu"
          >
            <Menu className="w-7 h-5.25" />
          </Button>
        </SheetTrigger>

        {/* Mobile Sidebar */}
        <SheetContent side="right" className="w-[85%] max-w-sm   px-6">
          {/* Logo */}
          <SheetHeader className="px-0">
            <SheetTitle>
              <Link href="/" aria-label="Empire Logistics Services">
                <Image
                  src="/images/logo/logo.png"
                  alt="Empire Logistics Services"
                  width={70}
                  height={70}
                  className="h-auto w-18"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>

          {/* Navigation */}
          <nav className="mt-8 flex flex-col">
            {links.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            {/* Language */}
            <LanguageSwitcher />
          </nav>

          {/* CTA */}
          <ActionButton />
        </SheetContent>
      </Sheet>
    </div>
  );
}
