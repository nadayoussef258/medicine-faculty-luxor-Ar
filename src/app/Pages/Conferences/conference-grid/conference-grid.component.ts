
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConferenceService } from '../../../services/conference.service';
import { Conference } from '../../../Models/conference';

@Component({
  selector: 'app-conference-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conference-grid.component.html',
  styleUrl: './conference-grid.component.css'
})
export class conferenceGridComponent implements OnInit {
  page: number = 1;
  pageSize: number = 6;
  conferenceData: Conference[] = [];

  get pagedConferences() {
    const start = (this.page - 1) * this.pageSize;
    return this.conferenceData.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.conferenceData.length / this.pageSize);
  }

  setPage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
    }
  }

  constructor(private router: Router, private conferenceService: ConferenceService) {}

  ngOnInit(): void {
    this.conferenceData = this.conferenceService.getAll();
  }

  goToConferenceDetail(conferenceId: number): void {
    this.router.navigate(['/conference/detail', conferenceId]);
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}





