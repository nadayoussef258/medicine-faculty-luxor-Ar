export interface HeroSlideDto {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}
export interface DeanInfoDto{
    name:string;
    title:string;
    image:string;
    message:string;
    qualifications:string[];
}

export interface DepartmentItem {
  id?: string;
  title: string;
  description: string;
  iconPath: string;
  iconAlt: string;
}

export interface ServiceItem {
  id?: string;
  type: string;
  category: string;
  title: string;
  description: string;
  readMoreUrl?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  specialty: string;
  date: string;
  imageUrl: string;
  readMoreUrl?: string;
}
