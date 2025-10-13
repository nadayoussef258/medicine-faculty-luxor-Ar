import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedHeroSectionComponent } from "./hero-section/hero-section.component";

interface Article {
  id: number;
  title: string;
  images: string[];
  content: string;
}
@Component({
  selector: 'app-magazine-page',
  imports: [CommonModule, SharedHeroSectionComponent],
  templateUrl: './magazine-page.component.html',
  styleUrls: ['./magazine-page.component.css']
})
export class MagazinePageComponent implements OnInit {

  articles: Article[] = [];
  currentSlides: { [key: number]: number } = {};

  constructor() {}

  ngOnInit(): void {
    this.loadArticles();
    this.initializeSlides();
  }

  loadArticles(): void {
    this.articles = [
    
      {
        id: 3,
        title: 'Medical Olympiad Winners',
        images: [
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
        ],
        content: "We proudly announce that four of our students have achieved top positions in the National Medical Student Olympiad, showcasing the caliber of our education and dedication of our faculty in mentoring the next generation of medical professionals. These exceptional students demonstrated outstanding knowledge, critical thinking, and problem-solving abilities. Their success reflects years of rigorous training and commitment to excellence. The competition featured complex medical scenarios and cutting-edge clinical knowledge assessments. Our students competed against participants from the most prestigious medical schools across Egypt. Their victory is a testament to the quality of our curriculum and the expertise of our teaching staff. These achievements inspire us and motivate us to continue raising the standards of medical education at our institution."
      },
      {
        id: 4,
        title: ' Distinguished Researchers',
        images: [
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80'
        ],
        content: "Our faculty members represent the finest medical minds in Egypt and the region. With extensive experience in clinical practice, research, and education, they bring a wealth of knowledge to every classroom and laboratory. Each member of our faculty is committed to advancing medical science while nurturing the next generation of healthcare professionals. Our senior professors have published numerous papers in internationally recognized journals and have received numerous awards for their contributions to medicine. They maintain active collaborations with leading medical centers worldwide, ensuring that our students benefit from the latest developments in medical science and practice. The faculty's dedication to both teaching and research creates an environment of academic excellence that motivates students to achieve their highest potential."
      },
      {
        id: 5,
        title: 'Screening Campaign',
       images: [
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80'
        ],
        content: "Our faculty's ongoing commitment to community health is reflected in the free health screening campaigns we conduct regularly in rural areas of Luxor. This month, we organized comprehensive health screening camps that reached over 500 community members, providing vital health education and services. Our medical students and faculty volunteers worked together to provide screening for chronic diseases, health counseling, and referrals for those needing specialized care. These initiatives reflect our commitment to serving the local community and improving public health outcomes. We believe that medical professionals have a responsibility to give back to society and contribute to the overall wellbeing of the communities they serve. The positive response from the community encourages us to expand these programs further in the coming months."
      },
      {
        id: 6,
        title: ' Medical Conference 2024',
         images: [
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80'
        ],
        content: "Join us for our annual international medical conference featuring keynote speeches from leading medical professionals worldwide. This premier event brings together researchers, clinicians, and educators to share innovations and best practices in modern medicine. The conference will feature multiple sessions covering the latest advances in various medical specialties, including cardiology, oncology, neurology, and infectious diseases. International speakers from renowned medical institutions will share their expertise and research findings. Participants will have opportunities to network with medical professionals from around the world and engage in meaningful discussions about the future of healthcare. Registration is now open for this important event that promises to be highly informative and inspiring for all participants."
      }
    ];
  }

  initializeSlides(): void {
    this.articles.forEach(article => {
      this.currentSlides[article.id] = 0;
    });
  }

  nextSlide(articleId: number): void {
    const article = this.articles.find(a => a.id === articleId);
    if (article) {
      const currentIndex = this.currentSlides[articleId] || 0;
      this.currentSlides[articleId] = (currentIndex + 1) % article.images.length;
    }
  }

  prevSlide(articleId: number): void {
    const article = this.articles.find(a => a.id === articleId);
    if (article) {
      const currentIndex = this.currentSlides[articleId] || 0;
      this.currentSlides[articleId] = (currentIndex - 1 + article.images.length) % article.images.length;
    }
  }

  goToSlide(articleId: number, index: number): void {
    this.currentSlides[articleId] = index;
  }

  getCurrentImage(article: Article): string {
    const index = this.currentSlides[article.id] || 0;
    return article.images[index];
  }

  getCurrentImageIndex(articleId: number): number {
    return this.currentSlides[articleId] || 0;
  }
}
