import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RelatedNewsItem } from '../../../Models/news';

@Component({
  selector: 'app-related-news',
  templateUrl: './related-news.component.html',
  styleUrls: ['./related-news.component.css'],
  imports: [CommonModule]
})
export class RelatedNewsComponent {
  @Input() relatedNews: RelatedNewsItem[] = [];

  constructor(private router: Router) {}

  navigateToNews(newsId: string, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.router.navigate(['/news', newsId]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  truncateText(text: string, limit: number = 150): string {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }
}