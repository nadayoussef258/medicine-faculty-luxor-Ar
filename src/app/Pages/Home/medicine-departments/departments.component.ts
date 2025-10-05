import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface DepartmentItem {
  id?: string;
  title: string;
  description: string;
  iconPath: string;
  iconAlt: string;
}

@Component({
  selector: 'ck-departments',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  encapsulation: ViewEncapsulation.None // This ensures CSS variables and styles are applied globally
})
export class DepartmentsComponent {

   @Input() showAllServicesButton: boolean = true; 
  @Input() allServicesUrl: string = '/departments';
  @Input() allServicesText: string = 'All Departments +';
  @Input() departments: DepartmentItem[] = [
    {
      id: '1',
      title: 'CARDIOLOGY',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas adipisicing.',
      iconPath: 'assets/cardiology.png',
      iconAlt: 'Cardiology Icon'
    },
    {
      id: '2',
      title: 'NEUROLOGY',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas adipisicing.',
            iconPath: 'assets/Neurology.png',

      iconAlt: 'Neurology Icon'
    },
    {
      id: '3',
      title: 'ORTHOPEDICS',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas adipisicing.',
            iconPath: 'assets/Orthopedics.png',

      iconAlt: 'Orthopedics Icon'
    },
    {
      id: '4',
      title: 'CANCER DEPARTMENT',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas adipisicing.',
            iconPath: 'assets/cancer department.png',

      iconAlt: 'Cancer Department Icon'
    },
    {
      id: '5',
      title: 'OPHTHALMOLOGY',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas adipisicing.',
            iconPath: 'assets/Ophthalmology.png',

      iconAlt: 'Ophthalmology Icon'
    },
    {
      id: '6',
      title: 'RESPIRATORY',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas adipisicing.',
            iconPath: 'assets/Respiratory.png',

      iconAlt: 'Respiratory Icon'
    }
  ];

  @Input() sectionTitle: string = 'DEPARTMENTS';
  @Input() showTitle: boolean = true;

  constructor() { }

  onDepartmentClick(department: DepartmentItem): void {
    // Emit event or handle click as needed
    console.log('Department clicked:', department);
  }

  trackByFn(index: number, item: DepartmentItem): string {
    return item.id || item.title;
  }
}