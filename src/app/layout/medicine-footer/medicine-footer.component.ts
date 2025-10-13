import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

export interface FooterContactInfo {
  logoPath: string;
  logoAlt: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export interface FooterQuickLink {
  text: string;
  url: string;
  icon?: string;
}

export interface FooterPost {
  title: string;
  url: string;
  date: string;
}

export interface FooterSocialLink {
  icon: string;
  url: string;
  title: string;
}

export interface FooterCopyright {
  text: string;
  links: Array<{
    text: string;
    url: string;
  }>;
}

@Component({
  selector: 'ck-medicine-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './medicine-footer.component.html',
  styleUrls: ['./medicine-footer.component.css']
})
export class MedicineFooterComponent {
  @Input() contactInfo: FooterContactInfo = {
    logoPath: 'assets/logo.png',
    logoAlt: 'MEDICARE',
    description: 'Faculty of Medicine – Luxor University: Shaping future doctors with knowledge, compassion, and innovation.',
    address: "Luxor - New Tiba City - next to the city hall",
    phone: '(094) 123 4567 - (094) 123 4568',
    email: 'faculty.medicine@medicine.luxor.edu.eg'
  };

  @Input() quickLinks: FooterQuickLink[] = [
    { text: 'Home', url: '/', icon: '+' },
    // { text: 'About the College', url: '/about-college', icon: '+' },
    // { text: 'Sectors', url: '/sector', icon: '+' },
    // { text: 'Scientific Departments', url: '/departments', icon: '+' },
    { text: 'Centers and Units', url: '/centers-units', icon: '+' },
    { text: 'College Journal', url: '/journal', icon: '+' },
    { text: 'Staff Members', url: '/staff-members', icon: '+' },
    { text: 'News', url: '/news', icon: '+' }
  ];

  @Input() latestPosts: FooterPost[] = [
    {
      title: 'Opening of the Center of Excellence in Scientific Research',
      url: '/news/detail/1',
      date: '2024-08-13'
    },
    {
      title: 'Signing of Cooperation Agreement with a German University',
      url: '/news/detail/2',
      date: '2024-08-10'
    },
    {
      title: 'Launch of Master’s Program in Artificial Intelligence',
      url: '/news/detail/3',
      date: '2024-08-08'
    }
  ];

 

  @Input() showNewsletter: boolean = false; // Newsletter section is not included

  @Output() linkClick = new EventEmitter<{type: string, item: any}>();
  @Output() socialClick = new EventEmitter<FooterSocialLink>();
  @Output() newsletterSubmit = new EventEmitter<string>();

  newsletterEmail: string = '';

  constructor() { }

  onLinkClick(type: string, item: any): void {
    this.linkClick.emit({ type, item });
  }

  onSocialClick(socialLink: FooterSocialLink): void {
    this.socialClick.emit(socialLink);
  }

  onNewsletterSubmit(): void {
    if (this.newsletterEmail.trim()) {
      this.newsletterSubmit.emit(this.newsletterEmail);
      this.newsletterEmail = '';
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  trackByFn(index: number, item: any): any {
    return item.id || item.title || item.text || index;
  }
}
