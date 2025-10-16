import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsItem } from '../../../Models/home';


@Component({
  selector: 'ck-medicine-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicine-news.component.html',
  styleUrls: ['./medicine-news.component.css']
})
export class MedicineNewsComponent implements OnInit, OnDestroy {
  @Input() newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Breakthrough in Cancer Treatment',
      excerpt: 'New research shows promising results in targeted therapy for lung cancer patients.',
      author: 'Dr. Sarah Johnson',
      specialty: 'Oncology',
      date: '2023-12-15',
      imageUrl: 'assets/event1.jpg',
      readMoreUrl: '#'
    },
    {
      id: 2,
      title: 'Advancements in Robotic Surgery',
      excerpt: 'Minimally invasive procedures are becoming more precise with new robotic systems.',
      author: 'Dr. Michael Chen',
      specialty: 'Surgery',
      date: '2023-12-10',
      imageUrl: 'assets/event2.jpg',
      readMoreUrl: '#'
    },
    {
      id: 3,
      title: 'Mental Health Awareness Month',
      excerpt: 'Understanding the importance of mental health in overall patient care.',
      author: 'Dr. Emily Rodriguez',
      specialty: 'Psychiatry',
      date: '2023-12-05',
      imageUrl: 'assets/event3.jpg',
      readMoreUrl: '#'
    },
    {
      id: 4,
      title: 'New Vaccine Developments',
      excerpt: 'Latest updates on vaccine research for infectious diseases.',
      author: 'Dr. James Wilson',
      specialty: 'Immunology',
      date: '2023-11-28',
      imageUrl: 'assets/event1.jpg',
      readMoreUrl: '#'
    }
  ];

  @Input() sectionTitle: string = 'Featured News and Insights';
  @Input() sectionSubtitle: string = 'Read the latest news about medicross as well as medical news around the world.';
  @Input() showTitle: boolean = true;
  @Input() itemsPerView: number = 3;
  @Input() autoPlay: boolean = false;
  @Input() autoPlayInterval: number = 5000;
  @Input() isRTL: boolean = true;

  currentIndex = 0;
  private autoPlayTimer?: any;

  ngOnInit() {
    if (this.autoPlay && this.newsItems.length > this.itemsPerView) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  get visibleItems(): NewsItem[] {
    if (this.newsItems.length === 0) return [];
    const endIndex = Math.min(this.currentIndex + this.itemsPerView, this.newsItems.length);
    return this.newsItems.slice(this.currentIndex, endIndex);
  }

  get hasNext(): boolean {
    return this.currentIndex + this.itemsPerView < this.newsItems.length;
  }

  get hasPrev(): boolean {
    return this.currentIndex > 0;
  }

  nextSlide() {
    if (this.hasNext) {
      this.currentIndex += this.itemsPerView;
    }
  }

  prevSlide() {
    if (this.hasPrev) {
      this.currentIndex = Math.max(0, this.currentIndex - this.itemsPerView);
    }
  }

  goToPage(pageIndex: number) {
    this.currentIndex = pageIndex * this.itemsPerView;
  }

  getCurrentPageIndex(): number {
    return Math.floor(this.currentIndex / this.itemsPerView);
  }

  getPaginationPages(): any[] {
    const totalPages = Math.ceil(this.newsItems.length / this.itemsPerView);
    return new Array(totalPages);
  }

  onCardClick(event: Event, readMoreUrl?: string) {
    if (event.target && (event.target as HTMLElement).closest('.read-more')) {
      return; // Let the read more link handle the click
    }
    if (readMoreUrl && readMoreUrl !== '#') {
      window.open(readMoreUrl, '_blank');
    }
  }

  onReadMoreClick(event: Event) {
    event.stopPropagation();
  }

  private startAutoPlay() {
    if (this.newsItems.length > this.itemsPerView) {
      this.autoPlayTimer = setInterval(() => {
        if (this.hasNext) {
          this.nextSlide();
        } else {
          this.currentIndex = 0; // Loop back to beginning
        }
      }, this.autoPlayInterval);
    }
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = undefined;
    }
  }

  getDateParts(dateString: string): { day: string; month: string } {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en-US', { month: 'short' })
    };
  }

  trackByFn(index: number, item: NewsItem): number {
    return item.id;
  }
}
