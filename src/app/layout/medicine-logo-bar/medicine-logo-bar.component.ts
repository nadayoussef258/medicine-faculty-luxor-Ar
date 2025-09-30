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
    address: '525 W Slauson Ave, LA, CA 90056, USA',
    phone: '(555) 555-1234',
    email: 'info@medicare.com',
  };

  constructor(private router: Router) { }

  openLocation(): void {
    this.router.navigate(['/']);
    // if (this.contactInfo.address) {
    //   // This would typically open a map service
    //   window.open(`https://maps.google.com/?q=${encodeURIComponent(this.contactInfo.address)}`, '_blank');
    // }
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
