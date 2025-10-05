
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewsService } from '../../../services/News.service';
import { NewsArticle } from '../../../Models/news';

@Component({
  selector: 'app-news-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-grid.component.html',
  styleUrl: './news-grid.component.css'
})
export class NewsGridComponent implements OnInit {
  page: number = 1;
  pageSize: number = 6;
  newsData: NewsArticle[] = [];

  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe(news => {
      this.newsData = news;
    });
  }

  get pagedNews() {
    const start = (this.page - 1) * this.pageSize;
    return this.newsData.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.newsData.length / this.pageSize);
  }

  setPage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
    }
  }

  goToNewsDetail(newsId: string): void {
    this.router.navigate(['/news/detail', newsId]);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}





