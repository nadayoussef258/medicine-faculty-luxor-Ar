import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterContactInfo, FooterPost, FooterQuickLink } from '../../Models/layout';



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
    { text: 'Home', url: '/'},
    { text: 'Centers and Units', url: '/centers-units'},
    { text: 'College Journal', url: '/journal'},
    { text: 'Staff Members', url: '/staff-members'},
    { text: 'News', url: '/news'}
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


  @Output() linkClick = new EventEmitter<{type: string, item: any}>();
  constructor() { }

  onLinkClick(type: string, item: any): void {
    this.linkClick.emit({ type, item });
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
