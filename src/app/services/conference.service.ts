import { Injectable } from '@angular/core';
import { Conference } from '../Models/conference';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  private conferences: Conference[] = [
    {
      id: 1,
      title: 'International Conference on Artificial Intelligence',
      summary: 'A global conference focusing on the latest trends in AI and Machine Learning, hosted by Luxor University with international experts.',
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
      images: ['assets/event1.jpg', 'assets/event2.jpg', 'assets/event3.jpg'],
      tags: ['AI', 'Machine Learning', 'Technology', 'Innovation']
    },
    {
      id: 2,
      title: 'Annual Medical Innovations Summit',
      summary: 'A specialized conference discussing new breakthroughs in healthcare technology and medical research.',
      details: [
        'The Annual Medical Innovations Summit focuses on cutting-edge developments in medical technology and healthcare delivery.',
        'Topics include telemedicine, personalized medicine, and advanced diagnostic tools.',
        'Leading researchers and clinicians share insights on improving patient outcomes through innovation.'
      ],
      date: new Date('2024-07-15T10:00:00'),
      category: 'Medical Science',
      organizer: 'Faculty of Medicine',
      duration: '2 days',
      location: 'Faculty of Medicine Auditorium',
      images: ['assets/event2.jpg', 'assets/event1.jpg'],
      tags: ['Medical', 'Healthcare', 'Innovation', 'Research']
    },
    {
      id: 3,
      title: 'Sustainable Energy Forum 2024',
      summary: 'An international forum focusing on renewable energy technologies and sustainable environmental practices.',
      details: [
        'The Sustainable Energy Forum 2024 aims to raise awareness about global energy challenges and promote the adoption of green technologies.',
        'Experts from universities and industries will present case studies on solar, wind, and hydrogen energy solutions.',
        'The forum encourages collaboration between academia, government, and private sectors to build a sustainable future.'
      ],
      date: new Date('2024-06-10T09:00:00'),
      category: 'Environment',
      organizer: 'Engineering Department',
      duration: '3 days',
      location: 'Faculty of Engineering Auditorium',
      images: ['assets/event3.jpg', 'assets/event1.jpg'],
      tags: ['Sustainability', 'Energy', 'Environment', 'Renewable']
    },
    {
      id: 4,
      title: 'Educational Leadership Conference',
      summary: 'A gathering of academic leaders to discuss innovative approaches in higher education management.',
      details: [
        'The Educational Leadership Conference brings together deans, department heads, and education administrators.',
        'Discussions cover curriculum development, student engagement, and institutional effectiveness.',
        'Participants learn about best practices in academic leadership and strategic planning.'
      ],
      date: new Date('2024-05-25T09:00:00'),
      category: 'Education',
      organizer: 'University Administration',
      duration: '2 days',
      location: 'University Conference Center',
      images: ['assets/event1.jpg', 'assets/event2.jpg'],
      tags: ['Education', 'Leadership', 'Management', 'Academic']
    },
    {
      id: 5,
      title: 'Global Tourism and Heritage Conference',
      summary: 'A major event showcasing Egypt’s heritage and discussing strategies for sustainable tourism development.',
      details: [
        'The Global Tourism and Heritage Conference highlights Egypt\'s rich cultural heritage and archaeological treasures.',
        'Experts discuss sustainable tourism practices and cultural preservation strategies.',
        'The event promotes Egypt as a leading destination for cultural tourism.'
      ],
      date: new Date('2024-05-10T10:00:00'),
      category: 'Tourism',
      organizer: 'Faculty of Tourism and Antiquities',
      duration: '4 days',
      location: 'Luxor International Convention Center',
      images: ['assets/event3.jpg', 'assets/event2.jpg'],
      tags: ['Tourism', 'Heritage', 'Culture', 'Sustainability']
    },
    {
      id: 6,
      title: 'Climate Change and Environmental Protection Conference',
      summary: 'An international conference addressing climate challenges and environmental protection measures.',
      details: [
        'The Climate Change and Environmental Protection Conference addresses urgent global environmental issues.',
        'Topics include climate adaptation, biodiversity conservation, and sustainable development.',
        'Scientists and policymakers collaborate on solutions for environmental challenges.'
      ],
      date: new Date('2024-04-18T09:00:00'),
      category: 'Environment',
      organizer: 'Environmental Studies Center',
      duration: '3 days',
      location: 'Environmental Science Building',
      images: ['assets/event1.jpg', 'assets/event3.jpg'],
      tags: ['Climate', 'Environment', 'Protection', 'Sustainability']
    },
    {
      id: 15,
      title: '15th International Medical Conference',
      summary: 'Innovation in Medicine and Health - Join us at the 15th International Medical Conference where leading experts and specialists gather to discuss the latest advancements and innovations in healthcare and medical research.',
      details: [
        'The 15th International Medical Conference features cutting-edge research in medical science and healthcare innovation.',
        'Sessions cover advances in diagnostics, treatment modalities, and preventive medicine.',
        'International experts share insights on global health challenges and solutions.'
      ],
      date: new Date('2024-12-15T09:00:00'),
      category: 'Medical Science',
      organizer: 'Faculty of Medicine',
      duration: '3 days',
      location: 'Main Conference Hall - Faculty of Medicine',
      images: ['assets/event1.jpg', 'assets/event2.jpg'],
      tags: ['Medical', 'Healthcare', 'Innovation', 'Research']
    }
  ];

  constructor() { }

  getAll(): Conference[] {
    return this.conferences;
  }

  getById(id: number): Conference | undefined {
    return this.conferences.find(conf => conf.id === id);
  }

  getRelatedByTags(tags: string[], excludeId?: number): Conference[] {
    return this.conferences.filter(conf => {
      if (excludeId && conf.id === excludeId) return false;
      return tags.some(tag => conf.tags.includes(tag));
    });
  }
}
