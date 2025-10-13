import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AboutSector, AddSectorAttachmentDto, AddSectorDetailDto, AddSectorDto, AddSectorStatDto, Department, EditSectorAttachmentDto, EditSectorDetailDto, EditSectorStatDto, NavTab, News, Sector, SectorBasicInfo, SectorDirector, SectorDto, SectorGoal, SectorImage, SectorMission, SectorServices, SectorVision, Statistic } from '../Models/sectors';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SectorService {
private apiUrl = 'api/sectors'; // Replace with actual API

  constructor(private http: HttpClient) {}
  // MOCK DATA ONLY - remove all HttpClient and API_ENDPOINTS usage

  // Sectors
  AddSector(dto: AddSectorDto): Observable<string> {
    return of('Added (Mock)').pipe(delay(500));
  }

  geAlltSectors(): Observable<SectorDto[]> {
    return of([]).pipe(delay(500));
  }

  UpdateSector(dto: AddSectorDto): Observable<string> {
    return of('Updated (Mock)').pipe(delay(500));
  }

  deleteSector(id: string): Observable<string> {
    return of('Deleted (Mock)').pipe(delay(500));
  }

  getById(id: string): Observable<AddSectorDto | undefined> {
    // English mock data for sectors
    const mockSectors: { [key: string]: AddSectorDto } = {
      '1': {
        name: 'Education and Student Affairs',
        subTitle: 'Responsible for managing student affairs and the educational process at the university.'
      },
      '2': {
        name: 'Postgraduate Studies and Research',
        subTitle: 'Supervises master’s and doctoral programs and research projects.'
      },
      '3': {
        name: 'Community Service and Environmental Development',
        subTitle: 'Contributes to local community service and sustainable development.'
      },
      '4': {
        name: 'University Secretary General',
        subTitle: 'Responsible for the administrative and financial affairs of the university.'
      }
    };
    return of(mockSectors[id]).pipe(delay(300));
  }

  // Sector Services
 

  AddSectorService(dto: SectorServices): Observable<string> {
    return of('تمت إضافة الخدمة (Mock)').pipe(delay(500));
  }

  UpdateSectorService(dto: SectorServices): Observable<string> {
    return of('تم تحديث الخدمة (Mock)').pipe(delay(500));
  }

  DeleteSectorService(id: string): Observable<string> {
    return of('تم حذف الخدمة (Mock)').pipe(delay(500));
  }
//   getSectorDetails(sectorId: number): Observable<AboutSector> {
//     return this.http.get<SectorDetailsDto>(`${this.apiUrl}/${sectorId}/details`)
//       .pipe(map(toAppAboutSector));
//   }

//   getSectorImage(sectorId: number): Observable<SectorImage> {
//     return this.http.get<SectorAttachmentDto>(`${this.apiUrl}/${sectorId}/image`)
//       .pipe(map((toAppSectorImage)));
//   }

//  getSectorStats(sectorId: number): Observable<Statistic[]> {
//   return this.http.get<SectorStatsDto[]>(`${this.apiUrl}/${sectorId}/stats`)
//     .pipe(
//       map((dtos: SectorStatsDto[]) => dtos.map(toAppSectorStats)) 
//     ); 
// }





  getSectorImage(sectorId: number): Observable<SectorImage> {
  const mockImages: { [key: number]: SectorImage } = {
    1: { Id: 1, Field: "main", UrlPath: "assets/student.jpeg", SectorId:' 1' },
    2: { Id: 2, Field: "main", UrlPath: "assets/staff.jpg", SectorId: '2' },
    3: { Id: 3, Field: "main", UrlPath: "assets/LAND.png", SectorId: '3' },
    4: { Id: 4, Field: "main", UrlPath: "assets/building.jpg", SectorId: '4' },
  };
  return of(mockImages[sectorId]);
}

 
  getSectorStats(sectorId: string): Observable<Statistic[]> {
  const mockStats: { [key: string]: Statistic[] } = {
    1: [
      { Id: 1, Title: "Number of Departments", Count: 12 },
      { Id: 2, Title: "Number of Students", Count: 15000 },
      { Id: 3, Title: "Number of Employees", Count: 90 }

    ],
    2: [
      { Id: 1, Title: "Master's Programs", Count: 25 },
      { Id: 2, Title: "PhD Programs", Count: 10 },
      { Id: 3, Title: "Number of Employees", Count: 90 }

    ],
    3: [
      { Id: 1, Title: "Community Projects", Count: 40 },
      { Id: 2, Title: "Partnerships", Count: 15 },
      { Id: 3, Title: "Number of Employees", Count: 90 }

    ],
    4: [
      { Id: 1, Title: "Number of Staff", Count: 500 },
      { Id: 2, Title: "Number of Departments", Count: 20 },
      { Id: 3, Title: "Number of Employees", Count: 90 }

    ]
  };
  return of(mockStats[sectorId]);
}
  


  

  




getAllSectorServices(): Observable<SectorServices[]> {
  const mockServices: SectorServices[] = [
    {
      id: '1',
      name: 'Issuance of Enrollment Certificate',
      details: 'Service for issuing enrollment certificates for current students.',
      duration: 'Two days',
      isOnline: true,
      category: 'Certificates',
      fees: 20,
      sectorId: '1',
      applicationUrl: '',
      downloadUrl: '',
      contactPerson: 'Student Affairs Employee',
      contactPhone: '01000000000'
    },
    {
      id: '2',
      name: 'Submitting Appeals',
      details: 'Service for submitting appeals on results.',
      duration: '3 days',
      isOnline: false,
      category: 'Appeals',
      sectorId: '1',
      contactPerson: 'Student Affairs Employee',
      contactPhone: '01000000001'
    }
  ];
  return of(mockServices).pipe(delay(300));
}



getSectorNews(sectorId: string): Observable<News[]> {
  const mockNews: News[] = [
    { id: 1, title: 'Start of Applications for the New Year', summary: 'Applications for the new academic year have been opened.', image: 'assets/slider2.jpg', date: '2024-08-13', category: 'Academic', readTime: '3 minutes',    author: 'University Administration'
 },
    { id: 2, title: 'Exam Results', summary: 'Announcement of results for the second semester exams.', image: 'assets/slider3.jpg', date: '2024-08-10', category: 'Announcements', readTime: '2 minutes',    author: 'University Administration'
 }
  ];
  return of(sectorId === '1' ? mockNews : []).pipe(delay(200));
}


  // CRUD methods for Hero Section
  updateSectorBasicInfo(sectorId: string, info: SectorBasicInfo): Observable<SectorBasicInfo> {
    // Mock update
    return of(info).pipe(delay(500));
  }

  // CRUD methods for Attachments
  getSectorAttachments(sectorId: string): Observable<SectorImage[]> {
    const mockAttachments: { [key: string]: SectorImage[] } = {
      1: [
        { Id: 1, Field: "main", UrlPath: "assets/student.jpeg", SectorId: '1' },
        { Id: 2, Field: "gallery", UrlPath: "assets/building.jpg", SectorId: '1' }
      ],
      2: [
        { Id: 3, Field: "main", UrlPath: "assets/staff.jpg", SectorId: '2' }
      ],
      3: [
        { Id: 4, Field: "main", UrlPath: "assets/LAND.png", SectorId: '3' }
      ],
      4: [
        { Id: 5, Field: "main", UrlPath: "assets/building.jpg", SectorId: '4' }
      ]
    };
    return of(mockAttachments[sectorId] || []);
  }

  addSectorAttachment(dto: AddSectorAttachmentDto): Observable<SectorImage> {
    // Mock add
    const newAttachment: SectorImage = {
      Id: Math.floor(Math.random() * 1000),
      UrlPath: 'assets/' + dto.FilePath.name, // Mock path
      SectorId: dto.SectorId
    };
    return of(newAttachment).pipe(delay(500));
  }

  editSectorAttachment(dto: EditSectorAttachmentDto): Observable<SectorImage> {
    // Mock edit
    const updated: SectorImage = {
      Id: dto.Id,
      UrlPath: dto.FilePath ? 'assets/' + dto.FilePath.name : 'assets/default.jpg',
      SectorId: dto.SectorId
    };
    return of(updated).pipe(delay(500));
  }

  deleteSectorAttachment(id: number): Observable<void> {
    // Mock delete
    return of(void 0).pipe(delay(500));
  }

  // CRUD methods for Details
  addSectorDetail(dto: AddSectorDetailDto): Observable<AboutSector> {
    // Mock add
    const newDetail: AboutSector = {
      Id: Math.floor(Math.random() * 1000),
      Title: dto.Title,
      About: dto.About,
      SectorId: dto.SectorId
    };
    return of(newDetail).pipe(delay(500));
  }

  editSectorDetail(dto: EditSectorDetailDto): Observable<AboutSector> {
    // Mock edit
    const updated: AboutSector = {
      Id: dto.Id,
      Title: dto.Title,
      About: dto.About,
      SectorId: dto.SectorId
    };
    return of(updated).pipe(delay(500));
  }

  deleteSectorDetail(id: number): Observable<void> {
    // Mock delete
    return of(void 0).pipe(delay(500));
  }

  // CRUD methods for Stats
  addSectorStat(dto: AddSectorStatDto): Observable<Statistic> {
    // Mock add
    const newStat: Statistic = {
      Id: Math.floor(Math.random() * 1000),
      Title: dto.Title,
      Count: dto.Count,
      SectorId: dto.SectorId
    };
    return of(newStat).pipe(delay(500));
  }

  editSectorStat(dto: EditSectorStatDto): Observable<Statistic> {
    // Mock edit
    const updated: Statistic = {
      Id: dto.Id,
      Title: dto.Title,
      Count: dto.Count,
      SectorId: dto.SectorId
    };
    return of(updated).pipe(delay(500));
  }

  deleteSectorStat(id: number): Observable<void> {
    // Mock delete
    return of(void 0).pipe(delay(500));
  }

  // Add new sector
  // private sectors: AddSectorDto[] = [
  //   { Name: 'شئون التعليم والطلاب', SubTitle: 'وصف مختصر 1' },
  //   { Name: 'الدراسات العليا والبحوث', SubTitle: 'وصف مختصر 2' },
  //   { Name: 'خدمة المجتمع وتنمية البيئة', SubTitle: 'وصف مختصر 3' },
  //   { Name: 'أمين عام الجامعة', SubTitle: 'وصف مختصر 4' }
  // ];

  // addSector(dto: AddSectorDto): Observable<any> {
  //   // Add the new sector to the local array (mock)
  //   this.sectors.push(dto);
  //   return of({ success: true, sector: dto }).pipe(delay(500));
  // }

  // getSectors(): Observable<AddSectorDto[]> {
  //   return of(this.sectors).pipe(delay(500));
  // }


  getSectorById(sectorId: string): Observable<Sector> {
    // return this.http.get<Sector>(`${this.apiUrl}/${sectorId}`);
    
    // Mock data للتجربة
    return of(this.getMockSector(sectorId));
  }

  getAboutSector(sectorId: string): Observable<AboutSector> {
    return this.http.get<AboutSector>(`${this.apiUrl}/${sectorId}/about`);
  }

  getSectorImages(sectorId: string): Observable<SectorImage[]> {
    return this.http.get<SectorImage[]>(`${this.apiUrl}/${sectorId}/images`);
  }

  getStatistics(sectorId: string): Observable<Statistic[]> {
    return this.http.get<Statistic[]>(`${this.apiUrl}/${sectorId}/statistics`);
  }

  getDirector(sectorId: string): Observable<SectorDirector> {
    return this.http.get<SectorDirector>(`${this.apiUrl}/${sectorId}/director`);
  }

  getVision(sectorId: string): Observable<SectorVision> {
    return this.http.get<SectorVision>(`${this.apiUrl}/${sectorId}/vision`);
  }

  getMission(sectorId: string): Observable<SectorMission> {
    return this.http.get<SectorMission>(`${this.apiUrl}/${sectorId}/mission`);
  }

  getGoals(sectorId: string): Observable<SectorGoal[]> {
    return this.http.get<SectorGoal[]>(`${this.apiUrl}/${sectorId}/goals`);
  }

  private getMockSector(id: string): Sector {
    switch (id) {
      case '1':
        return {
          Id: '1',
          Name: 'Education and Student Affairs Sector',
      AboutSector: {
        Id: 1,
        Title: 'About the Sector',
        About: 'The Education and Student Affairs Sector is one of the most important sectors in the Faculty of Medicine, as it focuses on developing the educational process and improving the level of services provided to students. The sector works to achieve academic excellence through advanced educational programs that keep pace with the latest global standards in medical education.',
        SectorId: '1'
      },
      SectorImages: [
        {
          Id: 1,
          Field: 'MainImage',
          UrlPath: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
          SectorId: '1'
        }
      ],
      Statistics: [
        { Id: 1, Title: 'Number of Students', Count: 2500, SectorId: '1' },
        { Id: 2, Title: 'Faculty Members', Count: 180, SectorId: '1' },
        { Id: 3, Title: 'Academic Programs', Count: 12, SectorId: '1' },
       
      ],
      Director: {
        Id: 1,
        Name: 'Mr. Adel Amer Mohammed',
        Title: 'Director of Education and Student Affairs Sector',
        Message: 'I am pleased to welcome you to the Education and Student Affairs Sector at the Faculty of Medicine. We work diligently to provide an excellent educational environment that helps our students achieve their academic and professional goals. We believe in the importance of continuous development and innovation in the educational process to prepare distinguished doctors capable of serving the community.',
        ImageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
        SectorId: '1'
      },
      Vision: {
        Id: 1,
        Vision: 'To be a leading sector in medical education at the regional and international levels, and to contribute to graduating distinguished doctors capable of serving the community and developing the health system.',
        SectorId: '1'
      },
      Mission: {
        Id: 1,
        Mission: 'Providing high-quality medical education based on the latest global standards, providing a supportive environment for students, and developing their scientific, practical, and human capabilities to prepare distinguished medical cadres.',
        SectorId: '1'
      },
      Goals: [
        { Id: 1, Goal: 'Developing academic programs in line with international standards for medical education', OrderIndex: 1, SectorId: '1' },
        { Id: 2, Goal: 'Improving the quality of teaching and clinical training through the use of the latest educational methods', OrderIndex: 2, SectorId: '1' },
        { Id: 3, Goal: 'Supporting students academically, psychologically, and socially to ensure their scientific excellence', OrderIndex: 3, SectorId: '1' },
        { Id: 4, Goal: 'Enhancing scientific research and innovation in various medical fields', OrderIndex: 4, SectorId: '1' },
        { Id: 5, Goal: 'Building local and international partnerships with reputable educational and health institutions', OrderIndex: 5, SectorId: '1' }
      ]
        };
      case '2':
        return {
          Id: '2',
          Name: 'Postgraduate Studies and Research Sector',
          AboutSector: {
            Id: 2,
            Title: 'About the Sector',
            About: 'The Postgraduate Studies and Research Sector oversees master\'s and doctoral programs and research projects at the Faculty of Medicine. It promotes scientific research and provides advanced training opportunities for postgraduate students to contribute to medical knowledge and innovation.',
            SectorId: '2'
          },
          SectorImages: [
            {
              Id: 2,
              Field: 'MainImage',
              UrlPath: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
              SectorId: '2'
            }
          ],
          Statistics: [
            { Id: 5, Title: 'Master\'s Programs', Count: 25, SectorId: '2' },
            { Id: 6, Title: 'PhD Programs', Count: 10, SectorId: '2' },
            { Id: 7, Title: 'Research Projects', Count: 150, SectorId: '2' },
            { Id: 8, Title: 'Publications', Count: 300, SectorId: '2' }
          ],
          Director: {
            Id: 2,
            Name: 'Dr. Fatima Hassan Al-Zahra',
            Title: 'Director of Postgraduate Studies and Research Sector',
            Message: 'Welcome to the Postgraduate Studies and Research Sector. We are committed to fostering a culture of research excellence and providing our postgraduate students with the tools and resources needed to advance medical science and improve healthcare outcomes.',
            ImageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
            SectorId: '2'
          },
          Vision: {
            Id: 2,
            Vision: 'To be a center of excellence in postgraduate medical education and research, producing innovative researchers and leaders in healthcare.',
            SectorId: '2'
          },
          Mission: {
            Id: 2,
            Mission: 'To provide comprehensive postgraduate education, support cutting-edge research, and facilitate the dissemination of knowledge to advance medical practice and public health.',
            SectorId: '2'
          },
          Goals: [
            { Id: 6, Goal: 'Expanding postgraduate programs to meet growing demands', OrderIndex: 1, SectorId: '2' },
            { Id: 7, Goal: 'Increasing research funding and collaborations', OrderIndex: 2, SectorId: '2' },
            { Id: 8, Goal: 'Enhancing publication output and research quality', OrderIndex: 3, SectorId: '2' },
            { Id: 9, Goal: 'Developing advanced research facilities and laboratories', OrderIndex: 4, SectorId: '2' },
            { Id: 10, Goal: 'Promoting interdisciplinary research initiatives', OrderIndex: 5, SectorId: '2' }
          ]
        };
      case '3':
        return {
          Id: '3',
          Name: 'Community Service and Environmental Development Sector',
          AboutSector: {
            Id: 3,
            Title: 'About the Sector',
            About: 'The Community Service and Environmental Development Sector contributes to local community service and sustainable development. It organizes outreach programs, environmental initiatives, and partnerships with community organizations to promote health awareness and environmental responsibility.',
            SectorId: '3'
          },
          SectorImages: [
            {
              Id: 3,
              Field: 'MainImage',
              UrlPath: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
              SectorId: '3'
            }
          ],
          Statistics: [
            { Id: 9, Title: 'Community Projects', Count: 40, SectorId: '3' },
            { Id: 10, Title: 'Partnerships', Count: 15, SectorId: '3' },
            { Id: 11, Title: 'Volunteers', Count: 500, SectorId: '3' },
            { Id: 12, Title: 'Awareness Campaigns', Count: 25, SectorId: '3' }
          ],
          Director: {
            Id: 3,
            Name: 'Dr. Ahmed Mahmoud Al-Rashid',
            Title: 'Director of Community Service and Environmental Development Sector',
            Message: 'Our sector is dedicated to bridging the gap between academia and community. Through our various programs and initiatives, we strive to make a positive impact on public health and environmental sustainability in our local and regional communities.',
            ImageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
            SectorId: '3'
          },
          Vision: {
            Id: 3,
            Vision: 'To be a model of community engagement in medical education, promoting sustainable development and improving community health outcomes.',
            SectorId: '3'
          },
          Mission: {
            Id: 3,
            Mission: 'To engage the community through educational outreach, environmental stewardship, and collaborative partnerships that enhance public health and promote sustainable practices.',
            SectorId: '3'
          },
          Goals: [
            { Id: 11, Goal: 'Increasing community outreach and health education programs', OrderIndex: 1, SectorId: '3' },
            { Id: 12, Goal: 'Developing sustainable environmental initiatives', OrderIndex: 2, SectorId: '3' },
            { Id: 13, Goal: 'Strengthening partnerships with local organizations', OrderIndex: 3, SectorId: '3' },
            { Id: 14, Goal: 'Promoting volunteerism and civic engagement among students', OrderIndex: 4, SectorId: '3' },
            { Id: 15, Goal: 'Monitoring and evaluating community impact of our programs', OrderIndex: 5, SectorId: '3' }
          ]
        };
      case '4':
        return {
          Id: '4',
          Name: 'University Secretary General Sector',
          AboutSector: {
            Id: 4,
            Title: 'About the Sector',
            About: 'The University Secretary General Sector is responsible for the administrative and financial affairs of the university. It manages university policies, legal matters, human resources, and ensures compliance with regulatory requirements.',
            SectorId: '4'
          },
          SectorImages: [
            {
              Id: 4,
              Field: 'MainImage',
              UrlPath: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
              SectorId: '4'
            }
          ],
          Statistics: [
            { Id: 13, Title: 'Administrative Staff', Count: 500, SectorId: '4' },
            { Id: 14, Title: 'Departments Managed', Count: 20, SectorId: '4' },
            { Id: 15, Title: 'Policies Implemented', Count: 150, SectorId: '4' },
            { Id: 16, Title: 'Compliance Audits', Count: 12, SectorId: '4' }
          ],
          Director: {
            Id: 4,
            Name: 'Dr. Sara Abdullah Al-Fayed',
            Title: 'University Secretary General',
            Message: 'As the administrative backbone of our university, we ensure smooth operations and compliance with all regulatory standards. Our dedicated team works tirelessly to support academic excellence and maintain the highest standards of governance.',
            ImageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
            SectorId: '4'
          },
          Vision: {
            Id: 4,
            Vision: 'To be an exemplary administrative sector that supports academic excellence through efficient governance and innovative management practices.',
            SectorId: '4'
          },
          Mission: {
            Id: 4,
            Mission: 'To provide comprehensive administrative support, ensure regulatory compliance, and optimize university operations to facilitate academic and research activities.',
            SectorId: '4'
          },
          Goals: [
            { Id: 16, Goal: 'Streamlining administrative processes and procedures', OrderIndex: 1, SectorId: '4' },
            { Id: 17, Goal: 'Ensuring compliance with national and international standards', OrderIndex: 2, SectorId: '4' },
            { Id: 18, Goal: 'Developing professional development programs for staff', OrderIndex: 3, SectorId: '4' },
            { Id: 19, Goal: 'Implementing digital transformation initiatives', OrderIndex: 4, SectorId: '4' },
            { Id: 20, Goal: 'Enhancing stakeholder communication and engagement', OrderIndex: 5, SectorId: '4' }
          ]
        };
      default:
        return this.getMockSector('1'); // Default to sector 1
    }
  }
}



