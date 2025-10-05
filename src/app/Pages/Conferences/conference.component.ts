import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { conferenceHeroSectionComponent } from './hero-section/hero-section.component';
import { conferenceGridComponent } from './conference-grid/conference-grid.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';

@Component({
  selector: 'app-conference',
  standalone: true,
  imports: [
    CommonModule,
    conferenceHeroSectionComponent,
    AdvancedSearchComponent,
    conferenceGridComponent
  ],
  templateUrl: './conference.component.html',
  styleUrl: './conference.component.css'
})
export class conferenceComponent {
  onSearch(searchData: any): void {
    // هنا يمكن إضافة منطق البحث
    console.log('Search data:', searchData);
  }
}





