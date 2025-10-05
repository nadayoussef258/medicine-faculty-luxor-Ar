
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conference-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conference-grid.component.html',
  styleUrl: './conference-grid.component.css'
})
export class conferenceGridComponent {
 
  page: number = 1;
  pageSize: number = 6;

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

  conferenceData = [
    {
      id: 1,
      title: 'International Conference on Artificial Intelligence',
      summary: 'A global conference focusing on the latest trends in AI and Machine Learning, hosted by Luxor University with international experts.',
      image: 'assets/conference1.jpg',
      date: '2024-08-20',
      category: 'Technology',
      duration: '3 days',
      organizer: 'Faculty of Computer Science'
    },
    {
      id: 2,
      title: 'Annual Medical Innovations Summit',
      summary: 'A specialized conference discussing new breakthroughs in healthcare technology and medical research.',
      image: 'assets/conference2.jpg',
      date: '2024-07-15',
      category: 'Medical Science',
      duration: '2 days',
      organizer: 'Faculty of Medicine'
    },
    {
      id: 3,
      title: 'Sustainable Energy Forum 2024',
      summary: 'An event dedicated to promoting renewable energy solutions and sustainable practices in Egypt and beyond.',
      image: 'assets/conference3.jpg',
      date: '2024-06-10',
      category: 'Sustainability',
      duration: '3 days',
      organizer: 'Engineering Department'
    },
    {
      id: 4,
      title: 'Educational Leadership Conference',
      summary: 'A gathering of academic leaders to discuss innovative approaches in higher education management.',
      image: 'assets/conference4.jpg',
      date: '2024-05-25',
      category: 'Education',
      duration: '2 days',
      organizer: 'University Administration'
    },
    {
      id: 5,
      title: 'Global Tourism and Heritage Conference',
      summary: 'A major event showcasing Egypt’s heritage and discussing strategies for sustainable tourism development.',
      image: 'assets/conference5.jpg',
      date: '2024-05-10',
      category: 'Tourism',
      duration: '4 days',
      organizer: 'Faculty of Tourism and Antiquities'
    },
    {
      id: 6,
      title: 'Climate Change and Environmental Protection Conference',
      summary: 'An international conference addressing climate challenges and environmental protection measures.',
      image: 'assets/conference6.jpg',
      date: '2024-04-18',
      category: 'Environment',
      duration: '3 days',
      organizer: 'Environmental Studies Center'
    }
  ];

  constructor(private router: Router) {}

  goToConferenceDetail(conferenceId: number): void {
    this.router.navigate(['/conference/detail', conferenceId]);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}





