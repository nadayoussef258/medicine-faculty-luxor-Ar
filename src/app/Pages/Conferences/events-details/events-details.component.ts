import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ConferenceService } from '../../../services/conference.service';
import { EventsContentComponent } from "../events-content/events-content.component";
import { RelatedEventsComponent } from "../related-events/related-events.component";
import { ProgressSpinner } from "primeng/progressspinner";
import { Conference } from '../../../Models/conference';

@Component({
  selector: 'app-events-details',
  standalone: true,
  imports: [CommonModule, EventsContentComponent, RelatedEventsComponent, ProgressSpinner],
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailComponent implements OnInit {
 conferenceId: string = '';
  conference: Conference | undefined;
  relatedConferences: Conference[] = [];
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private conferenceService: ConferenceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.conferenceId = params['id'];
      this.loadConferenceDetail();
    });
  }

  loadConferenceDetail(): void {
    this.loading = true;

    // جلب تفاصيل المؤتمر
    const id = parseInt(this.conferenceId);
    this.conference = this.conferenceService.getById(id);
    if (this.conference) {
      this.loadRelatedConferences(this.conference.tags);
    }
    this.loading = false;
  }

  loadRelatedConferences(tags: string[]): void {
    this.relatedConferences = this.conferenceService.getRelatedByTags(tags, parseInt(this.conferenceId));
  }

  goBack(): void {
    window.history.back();
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
