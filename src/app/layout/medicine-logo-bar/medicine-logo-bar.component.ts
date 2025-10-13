import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

export interface LogoDto {
      id?:string;
  logoPath: string;
  logoAltText: string;
  title?: string;
  subtitle?: string;
}

export interface ContactDto{
      id?:string;

  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  facebook?: string;
}

@Component({
  selector: 'ck-medicine-logo-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './medicine-logo-bar.component.html',
  styleUrls: ['./medicine-logo-bar.component.css']
})
export class MedicineLogoBarComponent {
  @Input() logoData: LogoDto = {
    logoPath: 'assets/logo.png',
    logoAltText: 'Faculty Logo',
    title: 'Faculty of Medicine'
  };
  @Input() Address: string='Address';
  @Input() Phone: string='Phone';


  @Input() contactInfo: ContactDto = {
    address: 'Luxor - New Tiba City - next to the city hall',
    phone: '(555) 555-1234',
    email: 'faculty.medicine@medicine.luxor.edu.eg',
    website: 'http://www.luxor.edu.eg',
    facebook: 'https://www.facebook.com/كلية الطب جامعة-الاقصر/112526971198533/',
  };

  constructor(private router: Router) { }

  openLocation(): void {
    window.open(' https://maps.app.goo.gl/BMJvNXCY6eSSU7JA7', '_blank');
  }

  openPhone(phone: string): void {
    if (phone) {
      window.open(`tel:${phone}`, '_self');
    }
  }

  openEmail(): void {
    if (this.contactInfo.email) {
      window.open(`mailto:${this.contactInfo.email}`, '_self');
    }
  }
}
