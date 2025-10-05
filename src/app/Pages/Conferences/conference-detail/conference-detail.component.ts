import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conference-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conference-detail.component.html',
  styleUrls: ['./conference-detail.component.css']
})
export class ConferenceDetailComponent implements OnInit {
  conferenceData: any = null;
  mainImage: string = '';

  conferenceList = [
    {
      id: 1,
      title: 'International Conference on Artificial Intelligence',
      summary:
        'A global event exploring the latest developments in Artificial Intelligence and Machine Learning, featuring international speakers and researchers.',
      details: [
        'The International Conference on Artificial Intelligence brings together leading experts to discuss advancements in AI, data science, and robotics.',
        'Sessions will include keynote speeches, research paper presentations, and panel discussions on the ethical use of AI.',
        'The event provides a platform for students, academics, and professionals to exchange ideas and build collaborations.'
      ],
      date: new Date('2024-08-20T09:00:00'),
      category: 'Technology',
      organizer: 'Faculty of Computer Science',
      duration: '3 days',
      location: 'Luxor University Convention Hall',
      images: [
        'assets/conference1.jpg',
        'assets/conference2.jpg',
        'assets/conference3.jpg'
      ]
    },
    {
      id: 2,
      title: 'Sustainable Energy Forum 2024',
      summary:
        'An international forum focusing on renewable energy technologies and sustainable environmental practices.',
      details: [
        'The Sustainable Energy Forum 2024 aims to raise awareness about global energy challenges and promote the adoption of green technologies.',
        'Experts from universities and industries will present case studies on solar, wind, and hydrogen energy solutions.',
        'The forum encourages collaboration between academia, government, and private sectors to build a sustainable future.'
      ],
      date: new Date('2024-07-10T10:00:00'),
      category: 'Environment',
      organizer: 'Engineering Department',
      duration: '2 days',
      location: 'Faculty of Engineering Auditorium',
      images: ['assets/conference4.jpg', 'assets/conference5.jpg']
    }
    // You can add more conferences here
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.conferenceData = this.conferenceList.find(
      (conf) => conf.id === id
    );
    if (this.conferenceData && this.conferenceData.images && this.conferenceData.images.length > 0) {
      this.mainImage = this.conferenceData.images[0];
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
