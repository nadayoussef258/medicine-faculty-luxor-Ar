import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConferenceService } from '../../../services/conference.service';
import { Conference } from '../../../Models/conference';

@Component({
  selector: 'app-medicine-upcoming-conference',
  standalone: true,
  imports: [CommonModule, RouterModule],
   templateUrl: './medicine-upcoming-conference.component.html',
  styleUrls: ['./medicine-upcoming-conference.component.css']
})
export class MedicineUpcomingConferenceComponent implements OnInit {
  conference: Conference | undefined;

  constructor(private conferenceService: ConferenceService) {}

  ngOnInit(): void {
    this.conference = this.conferenceService.getById(15);
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
