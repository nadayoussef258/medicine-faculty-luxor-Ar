import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../services/News.service';
import { NewsContentComponent } from "../news-content/news-content.component";
import { RelatedNewsComponent } from "../related-news/related-news.component";
import { ProgressSpinner } from "primeng/progressspinner";
import { NewsArticle, RelatedNewsItem } from '../../../Models/news';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, NewsContentComponent, RelatedNewsComponent, ProgressSpinner],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
 newsId: string = '';
  newsArticle: NewsArticle | undefined;
  relatedNews: RelatedNewsItem[] = [];
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.newsId = params['id'];
      this.loadNewsDetail();
    });
  }

  loadNewsDetail(): void {
    this.loading = true;
    
    // جلب تفاصيل الخبر
    this.newsService.getNewsById(this.newsId).subscribe({
      next: (data) => {
        this.newsArticle = data;
        if (data) {
          this.loadRelatedNews(data.tags);
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading news:', err);
        this.loading = false;
      }
    });
  }

  loadRelatedNews(tags: string[]): void {
    this.newsService.getRelatedNews(tags, this.newsId).subscribe({
      next: (data) => {
        this.relatedNews = data;
      },
      error: (err) => {
        console.error('Error loading related news:', err);
      }
    });
  }
  goBack(): void {
    window.history.back();
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}