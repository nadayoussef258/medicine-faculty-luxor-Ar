import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsData } from '../../Models/goals';

 

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent {
  goalsData: GoalsData = {
  subtitle: 'Our Goals',
  title: 'Goals of the Faculty of Medicine - Luxor University',
  description: 'We strive to achieve a set of strategic goals to ensure excellence in medical education, healthcare services, and scientific research.',
  goals: [
    {
      icon: 'pi pi-graduation-cap',
      title: 'Preparing Qualified Graduates',
      description: 'Educating and training graduates who are scientifically and professionally competent, capable of competing in the local, regional, and global healthcare markets, with strong theoretical and practical skills.'
    },
    {
      icon: 'pi pi-search',
      title: 'Promoting Scientific Research',
      description: 'Advancing medical research and innovation by supporting outstanding research projects, fostering medical discoveries, and enhancing international research collaboration.'
    },
    {
      icon: 'pi pi-globe',
      title: 'Community & Sustainable Development',
      description: 'Contributing to sustainable healthcare and community development by addressing public health challenges, providing medical solutions, and strengthening partnerships with the healthcare sector.'
    },
    {
      icon: 'pi pi-star',
      title: 'Academic & Clinical Excellence',
      description: 'Achieving excellence in academic and clinical programs through continuous curriculum development, adopting modern teaching methods, and ensuring high-quality medical education.'
    }
  ]
};

}
