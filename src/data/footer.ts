import { FooterSection, FooterSectionData } from "@/types/footer";
import { navLinks } from "./navigation";

export const footerSections: FooterSectionData[] = [
  {
    title: FooterSection.ABOUT_EMPIRE,
    links: [
      {
        label: "Home",
        href: "/",
      },
      ...navLinks,
    ],
  },

  {
    title: FooterSection.FOR_USERS,
    links: [
      {
        label: "Articles",
        href: "#Articles",
      },
      {
        label: "Careers",
        href: "#Careers",
      },
      {
        label: "Events",
        href: "#Events",
      }
    ],
  },

  {
    title: FooterSection.CUSTOMER_SERVICES,
    links: [
      {
        label: "Contact us",
        href: "/contact",
      },
      {
        label: "Our Services",
        href: "/#services",
      },
      {
        label: "Success Stories",
        href: "/#success-stories",
      },
      {
        label: "Industry Sectors",
        href: "/#industry-sectors",
      },
    ],
  },
];