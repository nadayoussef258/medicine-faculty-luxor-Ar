import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-departments-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class DepartmentsHeroSectionComponent {
  @Input() heroData: { title?: string; subtitle?: string } = {
    title: 'Faculty Departments',
    subtitle: 'Get to know the faculty departments at Luxor University'
  };
}
