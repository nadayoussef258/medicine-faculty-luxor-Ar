// medicine-hero-section.component.ts
import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroSlideDto } from '../../../Models/home';


@Component({
  selector: 'ck-medicine-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './medicine-hero-section.component.html',
  styleUrls: ['./medicine-hero-section.component.css'],
  encapsulation: ViewEncapsulation.None // This allows global CSS variables to work
})
export class MedicineHeroSectionComponent implements OnInit, OnDestroy {
  @Input() slides: HeroSlideDto[] = [
    {
      id: 1,
      imageUrl: 'assets/sliderr1.jpg',
      title: 'Advanced Medical Care',
      subtitle: 'Providing cutting-edge healthcare solutions for better patient outcomes'
    },
    {
      id: 2,
      imageUrl: 'assets/slider2.jpg',
      title: 'Expert Medical Team',
      subtitle: 'Our experienced doctors and specialists are here to help you'
    },
    {
      id: 3,
      imageUrl: 'assets/slider3.jpg',
      title: 'State-of-the-Art Facilities',
      subtitle: 'Modern equipment and comfortable environment for your care'
    }
  ];

  @Input() buttonText: string = 'About Us';
  @Input() buttonRoute: string = '/structure';
  @Input() autoPlayInterval: number = 5000;
  @Input() showControls: boolean = true;
  @Input() showIndicators: boolean = true;

  currentSlideIndex = 0;
  isHovered = false;
  private autoPlayTimer?: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  get currentSlide(): HeroSlideDto | null {
    return this.slides[this.currentSlideIndex] || null;
  }

  nextSlide() {
    if (this.slides.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }
  }

  prevSlide() {
    if (this.slides.length > 0) {
      this.currentSlideIndex = this.currentSlideIndex === 0
        ? this.slides.length - 1
        : this.currentSlideIndex - 1;
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.slides.length) {
      this.currentSlideIndex = index;
    }
  }

  onMouseEnter() {
    this.isHovered = true;
    this.stopAutoPlay();
  }

  onMouseLeave() {
    this.isHovered = false;
    this.startAutoPlay();
  }

  private startAutoPlay() {
    if (this.slides.length > 1) {
      this.autoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayInterval);
    }
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = undefined;
    }
  }
}