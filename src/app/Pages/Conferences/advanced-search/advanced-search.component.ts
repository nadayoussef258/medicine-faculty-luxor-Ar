import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-advanced-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './advanced-search.component.html',
  styleUrl: './advanced-search.component.css'
})
export class AdvancedSearchComponent {
  @Output() searchEvent = new EventEmitter<any>();

  searchData = {
    title: '',
    year: '',
    month: ''
  };

  

  years = [
    '2024',
    '2023',
    '2022',
    '2021',
    '2020'
  ];

  months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  performSearch(): void {
    this.searchEvent.emit(this.searchData);
  }

  clearSearch(): void {
    this.searchData = {
      title: '',
      year: '',
      month: ''
    };
    this.searchEvent.emit(this.searchData);
  }
}
