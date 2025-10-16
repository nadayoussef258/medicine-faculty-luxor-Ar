import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Department } from '../../../Models/departments';

@Component({
  selector: 'app-departments-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class DepartmentsHeroSectionComponent {
  @Input() department: Department | undefined;

  get heroData() {
    return {
      title: this.department?.Name || 'Faculty Departments',
      subtitle: this.department?.description || 'Get to know the faculty departments at Luxor University'
    };
  }
}
