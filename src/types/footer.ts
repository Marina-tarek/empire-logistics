export enum FooterSection {
  ABOUT_EMPIRE = "ABOUT EMPIRE",
  FOR_USERS = "FOR USERS",
  CUSTOMER_SERVICES = "CUSTOMER SERVICES",
  APPOINTMENT = "Appointment",
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSectionData {
  title: FooterSection;
  links: FooterLink[];
}