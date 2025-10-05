import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from "primeng/card";
import { CarouselModule } from "primeng/carousel";
import { RelatedNewsItem } from '../../../Models/news';

@Component({
  selector: 'app-related-news',
  templateUrl: './related-news.component.html',
  styleUrls: ['./related-news.component.css'],
  imports: [CommonModule, CarouselModule]
})
export class RelatedNewsComponent  {

 @Input() relatedNews: RelatedNewsItem[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private router: Router) {}

  navigateToNews(newsId: string, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.router.navigate(['/news', newsId]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  truncateText(text: string, limit: number = 100): string {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }
}
