// news.interface.ts
export interface NewsImage {
  url: string;
  caption?: string;
  altText?: string;
}

export interface NewsImage {
  url: string;
  caption?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  publishDate: Date;
  publishTime: string;
  tags: string[];
  images: NewsImage[];
  thumbnailImage: string;
  videoUrl?: string;
  author?: string;
  category?: string;
  type?: 'news' | 'event';
}

export interface RelatedNewsItem {
  id: string;
  title: string;
  summary: string;
  thumbnailImage: string;
  publishDate: Date;
  tags: string[];
}

