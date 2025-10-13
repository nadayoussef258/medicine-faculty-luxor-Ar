import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsArticle, RelatedNewsItem } from '../Models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private mockNewsData: NewsArticle[] = [
    {
      id: '1',
      title: 'Opening of the Center of Excellence in Scientific Research',
      summary: 'The Center of Excellence in Scientific Research was inaugurated at Luxor University, aiming to promote scientific research and innovation in various scientific fields.',
      content: 'Detailed content about the opening...Detailed content about the opening...Detailed content about the opening...Detailed content about the opening...Detailed content about the opening...Detailed content about the opening...Detailed content about the opening...Detailed content about the opening...Detailed content about the opening...',
      publishDate: new Date('2024-08-13'),
      publishTime: '10:00 AM',
      tags: ['Academic News', 'Research'],
      images: [{ url: 'assets/slider2.jpg', caption: 'New facilities'},{ url: 'assets/slider2.jpg', caption: 'New facilities'},{ url: 'assets/slider2.jpg', caption: 'New facilities'}],
      thumbnailImage: 'assets/slider2.jpg',
      author: 'University Administration',
      category: 'Academic News'
    },
    {
      id: '2',
      title: 'Signing of Cooperation Agreement with a German University',
      summary: 'Luxor University signed a cooperation agreement with the Technical University of Munich in Germany to enhance student and academic exchange between the two universities.',
      content: 'Detailed content about the agreement...',
      publishDate: new Date('2024-08-10'),
      publishTime: '11:00 AM',
      tags: ['International Cooperation', 'Exchange'],
      images: [{ url: 'assets/slider2.jpg', caption: 'New facilities'},{ url: 'assets/slider2.jpg', caption: 'New facilities'},{ url: 'assets/slider2.jpg', caption: 'New facilities'}],
      thumbnailImage: 'assets/slider3.jpg',
      author: 'University Administration',
      category: 'International Cooperation'
    },
    {
      id: '3',
      title: 'Launch of Master’s Program in Artificial Intelligence',
      summary: 'Luxor University announced the launch of a Master’s program in Artificial Intelligence and Machine Learning to keep pace with modern technological developments.',
      content: 'Detailed content about the program...',
      publishDate: new Date('2024-08-08'),
      publishTime: '12:00 PM',
      tags: ['Academic Programs', 'AI', 'Research'],
      images: [{ url: 'assets/slider2.jpg', caption: 'New facilities'},{ url: 'assets/slider2.jpg', caption: 'New facilities'},{ url: 'assets/slider2.jpg', caption: 'New facilities'}],
      thumbnailImage: 'assets/slider3.jpg',
      author: 'University Administration',
      category: 'Academic Programs'
    },
    {
      id: '4',
      title: 'University Team Wins Robotics Competition',
      summary: 'Luxor University team won first place in the regional robotics competition, reflecting excellence in engineering and technology.',
      content: 'Detailed content about the win...',
      publishDate: new Date('2024-08-05'),
      publishTime: '1:00 PM',
      tags: ['Student Achievements', 'Robotics', 'AI'],
      images: [{ url: 'assets/slider2.jpg', caption: 'New facilities'},{ url: 'assets/slider2.jpg', caption: 'New facilities'},{ url: 'assets/slider2.jpg', caption: 'New facilities'}],
      thumbnailImage: 'assets/slider2.jpg',
      author: 'University Administration',
      category: 'Student Achievements'
    },
    {
      id: '5',
      title: 'International Conference on Sustainable Development',
      summary: 'Luxor University hosted an international conference on sustainable development, with the participation of experts from various countries around the world.',
      content: 'Detailed content about the conference...',
      publishDate: new Date('2024-08-01'),
      publishTime: '2:00 PM',
      tags: ['Conferences', 'Sustainable Development', 'Research'],
      images: [{ url: 'assets/slider2.jpg', caption: 'New facilities'},{ url: 'assets/slider2.jpg', caption: 'New facilities'},{ url: 'assets/slider2.jpg', caption: 'New facilities'}],
      thumbnailImage: 'assets/slider3.jpg',
      author: 'University Administration',
      category: 'Conferences'
    },
    {
      id: '6',
      title: 'University Infrastructure Development',
      summary: 'The development of the university’s infrastructure has been completed, including the modernization of laboratories and the digital library.',
      content: 'Detailed content about the development...',
      publishDate: new Date('2024-07-28'),
      publishTime: '3:00 PM',
      tags: ['Infrastructure Development', 'Modernization'],
      images: [{ url: 'assets/slider2.jpg', caption: 'New facilities'},{ url: 'assets/slider2.jpg', caption: 'New facilities'},{ url: 'assets/slider2.jpg', caption: 'New facilities'}],
      thumbnailImage: 'assets/slider2.jpg',
      author: 'University Administration',
      category: 'Infrastructure Development'
    }
  ];

  constructor() {}

  getAllNews(): Observable<NewsArticle[]> {
    return of(this.mockNewsData);
  }

  getNewsById(id: string): Observable<NewsArticle | undefined> {
    const news = this.mockNewsData.find(n => n.id === id);
    return of(news);
  }

  getRelatedNews(tags: string[], excludeId: string): Observable<RelatedNewsItem[]> {
    const related = this.mockNewsData
      .filter(n => n.id !== excludeId && n.tags.some(tag => tags.includes(tag)))
      .slice(0, 3) // Limit to 3 related news
      .map(n => ({
        id: n.id,
        title: n.title,
        summary: n.summary,
        thumbnailImage: n.thumbnailImage,
        publishDate: n.publishDate,
        tags: n.tags
      }));
    return of(related);
  }

  getRelatedItems(id: string, type: string, limit: number = 5): Observable<NewsArticle[]> {
    const current = this.mockNewsData.find(n => n.id === id);
    if (!current) return of([]);
    const related = this.mockNewsData
      .filter(n => n.id !== id && n.tags.some(tag => current.tags.includes(tag)))
      .slice(0, limit);
    return of(related);
  }

  getNextItem(id: string): Observable<NewsArticle | null> {
    const sorted = this.mockNewsData.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
    const index = sorted.findIndex(n => n.id === id);
    if (index > 0) return of(sorted[index - 1]);
    return of(null);
  }

  getPreviousItem(id: string): Observable<NewsArticle | null> {
    const sorted = this.mockNewsData.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
    const index = sorted.findIndex(n => n.id === id);
    if (index < sorted.length - 1) return of(sorted[index + 1]);
    return of(null);
  }
}
