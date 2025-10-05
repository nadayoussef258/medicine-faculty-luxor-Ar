import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conference-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class conferenceHeroSectionComponent {
  heroData = {
    title: 'Faculty of Medicine Conferences',
    subtitle: 'Stay updated with the upcoming conferences at the Faculty of Medicine',
    backgroundImage: 'assets/slider1.png',
    searchPlaceholder: 'Search for a specific conference...'
  };
}





