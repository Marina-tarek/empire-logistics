import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/data/navigation";
import ActionButton from "../common/ActionButton";
import LanguageSwitcher from "../common/LanguageSwitcher";
import NavLink from "../common/NavLink";

export default function Navbar() {
  return (
    <header className="w-full  container-custom">
      <div className=" flex  items-center justify-between  h-26.75">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo/logo.png"
            alt="Empire Logistics Services"
            width={72}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5.5 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}

          {/* Language */}
          <LanguageSwitcher />

          {/* CTA */}
          <ActionButton />
        </nav>

        {/* Mobile */}
        <MobileMenu links={navLinks} />
      </div>
    </header>
  );
}
