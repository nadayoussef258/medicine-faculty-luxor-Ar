import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Conference } from '../../../Models/conference';

@Component({
  selector: 'app-related-events',
  templateUrl: './related-events.component.html',
  styleUrls: ['./related-events.component.css'],
  imports: [CommonModule]
})
export class RelatedEventsComponent {
  @Input() relatedNews: Conference[] = [];

  constructor(private router: Router) {}

  navigateToNews(newsId: number, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.router.navigate(['/conferences', newsId]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  truncateText(text: string, limit: number = 150): string {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }
}