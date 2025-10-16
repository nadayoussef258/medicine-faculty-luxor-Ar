// services.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ServiceItem } from '../../../Models/home';



@Component({
  selector: 'ck-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  encapsulation: ViewEncapsulation.None // هذا مهم جداً!
})
export class ServicesComponent {
  @Input() services: ServiceItem[] = [
    {
      id: '1',
      type: 'Students',
      category: 'Educational ',
      title: 'medical simulation',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...',
      readMoreUrl: '#'
    },
    {
      id: '2',
      type: 'Medical',
      category: 'Surgery',
      title: 'Cardiothoracic Surgery', 
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...',

      readMoreUrl: '#'
    },
    {
      id: '3',
      type: 'Medical',
      category: 'Health Check',
      title: 'General health check',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...',
  
      readMoreUrl: '#'
    },
    {
      id: '4',
      type: ' Staff',
      category: 'Training ',
      title: 'Training courses ',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...',
      readMoreUrl: '#'
    },
    {
      id: '5', 
      type: 'Medical',
      category: 'Treatment',
      title: 'Treatment of pneumonia',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...',

      readMoreUrl: '#'
    },
    {
      id: '6',
      type: 'Medical',
      category: 'Treatment',
      title: 'Treatment of dermatitis', 
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...',
   
      readMoreUrl: '#'
    }
  ];

  @Input() sectionTitle: string = 'Our Services';
  @Input() showTitle: boolean = true;
  @Input() showAllServicesButton: boolean = true; 
  @Input() allServicesUrl: string = '/services';
  @Input() allServicesText: string = 'All services +';

  @Output() serviceClick = new EventEmitter<ServiceItem>();
  @Output() readMoreClick = new EventEmitter<ServiceItem>();
  @Output() allServicesClick = new EventEmitter<void>();

  constructor() { }

  onServiceClick(service: ServiceItem): void {
    this.serviceClick.emit(service);
  }

  onReadMoreClick(service: ServiceItem, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.readMoreClick.emit(service);
  }

  onAllServicesClick(): void {
    this.allServicesClick.emit();
  }

  trackByFn(index: number, item: ServiceItem): string {
    return item.id || item.title;
  }
}