import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Chip } from 'primeng/chip';
import { NewsArticle } from '../../../Models/news';

@Component({
  selector: 'app-news-content',
  imports:[CommonModule, Chip],
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() article: any;
  
  selectedImageIndex: number = 0;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }
}
