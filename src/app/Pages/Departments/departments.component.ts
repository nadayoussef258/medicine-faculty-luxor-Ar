import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsHeroSectionComponent } from './hero-section/hero-section.component';
import { DepartmentsAdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { DepartmentsGridComponent } from './departments-grid/departments.component';


@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [
    CommonModule,
    DepartmentsHeroSectionComponent,
    DepartmentsAdvancedSearchComponent,
    DepartmentsGridComponent
  ],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {
  onSearch(searchData: any): void {
    // Handle search logic
    console.log('Search data:', searchData);
  }
}
