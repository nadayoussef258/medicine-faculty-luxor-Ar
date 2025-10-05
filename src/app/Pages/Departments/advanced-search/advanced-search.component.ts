import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departments-advanced-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './advanced-search.component.html',
  styleUrl: './advanced-search.component.css'
})
export class DepartmentsAdvancedSearchComponent {
  @Output() searchEvent = new EventEmitter<any>();

  searchData = {
    name: '',
    college: '',
    department: '',
    academicRank: ''
  };

  colleges = [
    'Faculty of Medicine'
  ];

  departments = [
    'Surgery Department',
    'Internal Medicine Department',
    'Pediatrics Department',
    'Gynecology and Obstetrics Department',
    'Radiology Department',
    'Pathology Department'
  ];

  academicRanks = [
    'Professor',
    'Associate Professor',
    'Lecturer'
  ];

  performSearch(): void {
    this.searchEvent.emit(this.searchData);
  }

  clearSearch(): void {
    this.searchData = {
      name: '',
      college: '',
      department: '',
      academicRank: ''
    };
    this.searchEvent.emit(this.searchData);
  }
}
