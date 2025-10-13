import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ConferenceService } from '../../../services/conference.service';
import { Conference } from '../../../Models/conference';

@Component({
  selector: 'app-conference-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './conference-detail.component.html',
  styleUrls: ['./conference-detail.component.css']
})
export class ConferenceDetailComponent implements OnInit {
  conferenceData: Conference | undefined;
  mainImage: string = '';
  relatedConferences: Conference[] = [];

  constructor(private route: ActivatedRoute, private conferenceService: ConferenceService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.conferenceData = this.conferenceService.getById(id);
    if (this.conferenceData) {
      this.mainImage = this.conferenceData.images[0];
      this.relatedConferences = this.conferenceService.getRelatedByTags(this.conferenceData.tags, this.conferenceData.id);
    }
  }

  setMainImage(imageUrl: string): void {
    this.mainImage = imageUrl;
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
