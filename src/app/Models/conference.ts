export interface Conference {
  id: number;
  title: string;
  summary: string;
  details: string[];
  date: Date;
  category: string;
  organizer: string;
  duration: string;
  location: string;
  images: string[];
  tags: string[];
}
