import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Chip } from 'primeng/chip';
import { Conference } from '../../../Models/conference';


@Component({
  selector: 'app-events-content',
  imports: [CommonModule, Chip],
  templateUrl: './events-content.component.html',
  styleUrls: ['./events-content.component.css']
})
export class EventsContentComponent implements OnInit {
  @Input() article: Conference | null = null;

  selectedImageIndex: number = 0;
  thumbnailStartIndex: number = 0;
  visibleThumbnails: number = 4;

  ngOnInit(): void {
    this.updateVisibleThumbnails();
    window.addEventListener('resize', () => this.updateVisibleThumbnails());
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
    this.scrollThumbnailIntoView(index);
  }

  scrollThumbnailIntoView(index: number): void {
    if (index < this.thumbnailStartIndex) {
      this.thumbnailStartIndex = index;
    } else if (index >= this.thumbnailStartIndex + this.visibleThumbnails) {
      this.thumbnailStartIndex = index - this.visibleThumbnails + 1;
    }
  }

  nextImage(): void {
    if (this.article?.images && this.article.images.length > 0) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.article.images.length;
      this.scrollThumbnailIntoView(this.selectedImageIndex);
    }
  }

  previousImage(): void {
    if (this.article?.images && this.article.images.length > 0) {
      this.selectedImageIndex = this.selectedImageIndex === 0 
        ? this.article.images.length - 1 
        : this.selectedImageIndex - 1;
      this.scrollThumbnailIntoView(this.selectedImageIndex);
    }
  }

  nextThumbnails(): void {
    if (this.article?.images) {
      this.thumbnailStartIndex = Math.min(
        this.article.images.length - this.visibleThumbnails,
        this.thumbnailStartIndex + 1
      );
    }
  }

  prevThumbnails(): void {
    this.thumbnailStartIndex = Math.max(0, this.thumbnailStartIndex - 1);
  }

  updateVisibleThumbnails(): void {
    if (window.innerWidth >= 1024) {
      this.visibleThumbnails = 4;
    } else if (window.innerWidth >= 768) {
      this.visibleThumbnails = 3;
    } else {
      this.visibleThumbnails = 2;
    }
  }

  get canNextThumbnails(): boolean {
    if (!this.article?.images) return false;
    return this.thumbnailStartIndex + this.visibleThumbnails < this.article.images.length;
  }

  get canPrevThumbnails(): boolean {
    return this.thumbnailStartIndex > 0;
  }

  get hasMultipleImages(): boolean {
    return (this.article?.images?.length ?? 0) > 1;
  }

  getArticleTypeLabel(): string {
    return 'مؤتمر';
  }
}