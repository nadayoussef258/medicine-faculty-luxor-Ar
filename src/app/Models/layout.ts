export interface MenuTab {
  id?: string;
  title: string;
  target: string;
  order: number;
  menuTypeId: string;
  parentId?: string | null;
  childs?: MenuTab[];
  fragment?: string;
  icon?: string;
  isActive?: boolean;
  type?: "menu" | "columns";
}

export interface LogoDto {
      id?:string;
  logoPath: string;
  logoAltText: string;
  title?: string;
}

export interface ContactDto{
      id?:string;
  address: string;
  phone: string;
  email: string;
  website: string;
  facebook?: string;
}

export interface FooterContactInfo {
  logoPath: string;
  logoAlt: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export interface FooterQuickLink {
  text: string;
  url: string;
}

export interface FooterPost {
  title: string;
  url: string;
  date: string;
}

