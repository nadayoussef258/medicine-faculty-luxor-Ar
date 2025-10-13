import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AboutDepartment, AddDepartmentAttachmentDto, AddDepartmentDetailDto, AddDepartmentDto, AddDepartmentStatDto, Department, DepartmentBasicInfo, DepartmentDirector, DepartmentDto, DepartmentGoal, DepartmentImage, DepartmentMission, DepartmentNavTab, DepartmentNews, DepartmentServices, DepartmentStatistic, DepartmentVision, EditDepartmentAttachmentDto, EditDepartmentDetailDto, EditDepartmentStatDto } from '../Models/departments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'api/departments'; // Replace with actual API

  constructor(private http: HttpClient) {}

  getByName(name: string): Observable<AddDepartmentDto | undefined> {
    const mockDepartments: { [key: string]: AddDepartmentDto } = {
      'anatomy': {
        name: 'Anatomy Department',
        subTitle: 'Study of the structure of the human body.'
      },
      'physiology': {
        name: 'Physiology Department',
        subTitle: 'Study of the functions of the human body.'
      },
      'biochemistry': {
        name: 'Biochemistry Department',
        subTitle: 'Study of chemical processes in living organisms.'
      },
      'pathology': {
        name: 'Pathology Department',
        subTitle: 'Study of diseases and their causes.'
      },
      'pharmacology': {
        name: 'Pharmacology Department',
        subTitle: 'Study of drugs and their effects.'
      },
      'internal-medicine': {
        name: 'Internal Medicine Department',
        subTitle: 'Diagnosis and treatment of internal diseases.'
      },
      'surgery': {
        name: 'Surgery Department',
        subTitle: 'Surgical procedures and treatments.'
      },
      'pediatrics': {
        name: 'Pediatrics Department',
        subTitle: 'Medical care for children.'
      },
      'obstetrics-gynecology': {
        name: 'Obstetrics and Gynecology Department',
        subTitle: 'Care for women during pregnancy and childbirth.'
      },
      'radiology': {
        name: 'Radiology Department',
        subTitle: 'Medical imaging techniques.'
      }
    };
    return of(mockDepartments[name]).pipe(delay(300));
  }

  getDepartmentImage(departmentName: string): Observable<DepartmentImage> {
    const mockImages: { [key: string]: DepartmentImage } = {
      'anatomy': { Id: 1, Field: "main", UrlPath: "assets/anatomy.jpg", DepartmentId: 'anatomy' },
      'physiology': { Id: 2, Field: "main", UrlPath: "assets/physiology.jpg", DepartmentId: 'physiology' },
      'biochemistry': { Id: 3, Field: "main", UrlPath: "assets/biochemistry.jpg", DepartmentId: 'biochemistry' },
      'pathology': { Id: 4, Field: "main", UrlPath: "assets/pathology.jpg", DepartmentId: 'pathology' },
      'pharmacology': { Id: 5, Field: "main", UrlPath: "assets/pharmacology.jpg", DepartmentId: 'pharmacology' },
      'internal-medicine': { Id: 6, Field: "main", UrlPath: "assets/internal-medicine.jpg", DepartmentId: 'internal-medicine' },
      'surgery': { Id: 7, Field: "main", UrlPath: "assets/surgery.jpg", DepartmentId: 'surgery' },
      'pediatrics': { Id: 8, Field: "main", UrlPath: "assets/pediatrics.jpg", DepartmentId: 'pediatrics' },
      'obstetrics-gynecology': { Id: 9, Field: "main", UrlPath: "assets/obgyn.jpg", DepartmentId: 'obstetrics-gynecology' },
      'radiology': { Id: 10, Field: "main", UrlPath: "assets/radiology.jpg", DepartmentId: 'radiology' },
    };
    return of(mockImages[departmentName] || mockImages['anatomy']);
  }

  getDepartmentStats(departmentName: string): Observable<DepartmentStatistic[]> {
    const mockStats: { [key: string]: DepartmentStatistic[] } = {
      'anatomy': [
        { Id: 1, Title: "Faculty Members", Count: 15 },
        { Id: 2, Title: "Students", Count: 200 },
        { Id: 3, Title: "Labs", Count: 5 }
      ],
      'physiology': [
        { Id: 1, Title: "Faculty Members", Count: 12 },
        { Id: 2, Title: "Students", Count: 180 },
        { Id: 3, Title: "Research Projects", Count: 20 }
      ],
      'biochemistry': [
        { Id: 1, Title: "Faculty Members", Count: 10 },
        { Id: 2, Title: "Students", Count: 150 },
        { Id: 3, Title: "Publications", Count: 50 }
      ],
      'pathology': [
        { Id: 1, Title: "Faculty Members", Count: 14 },
        { Id: 2, Title: "Students", Count: 160 },
        { Id: 3, Title: "Cases Studied", Count: 1000 }
      ],
      'pharmacology': [
        { Id: 1, Title: "Faculty Members", Count: 11 },
        { Id: 2, Title: "Students", Count: 140 },
        { Id: 3, Title: "Drug Studies", Count: 30 }
      ],
      'internal-medicine': [
        { Id: 1, Title: "Faculty Members", Count: 20 },
        { Id: 2, Title: "Patients", Count: 5000 },
        { Id: 3, Title: "Specialties", Count: 8 }
      ],
      'surgery': [
        { Id: 1, Title: "Faculty Members", Count: 18 },
        { Id: 2, Title: "Surgeries", Count: 2000 },
        { Id: 3, Title: "Operating Rooms", Count: 6 }
      ],
      'pediatrics': [
        { Id: 1, Title: "Faculty Members", Count: 16 },
        { Id: 2, Title: "Children Patients", Count: 3000 },
        { Id: 3, Title: "Vaccinations", Count: 5000 }
      ],
      'obstetrics-gynecology': [
        { Id: 1, Title: "Faculty Members", Count: 15 },
        { Id: 2, Title: "Deliveries", Count: 1500 },
        { Id: 3, Title: "Prenatal Care", Count: 2000 }
      ],
      'radiology': [
        { Id: 1, Title: "Faculty Members", Count: 13 },
        { Id: 2, Title: "Scans", Count: 10000 },
        { Id: 3, Title: "Equipment", Count: 10 }
      ]
    };
    return of(mockStats[departmentName] || []);
  }

  getAllDepartmentServices(): Observable<DepartmentServices[]> {
    const mockServices: DepartmentServices[] = [
      {
        id: '1',
        name: 'Consultation Service',
        details: 'Medical consultation for patients.',
        duration: '30 minutes',
        isOnline: true,
        category: 'Consultation',
        fees: 50,
        departmentId: 'internal-medicine',
        applicationUrl: '',
        downloadUrl: '',
        contactPerson: 'Dr. Ahmed',
        contactPhone: '01000000000'
      }
    ];
    return of(mockServices).pipe(delay(300));
  }

  getDepartmentNews(departmentName: string): Observable<DepartmentNews[]> {
    const mockNews: DepartmentNews[] = [
      { id: 1, title: 'New Research in Anatomy', summary: 'Latest findings in human anatomy.', image: 'assets/slider2.jpg', date: '2024-08-13', category: 'Research', readTime: '3 minutes', author: 'Dr. Smith' }
    ];
    return of(departmentName === 'anatomy' ? mockNews : []).pipe(delay(200));
  }

  getDepartmentByName(departmentName: string): Observable<Department> {
    return of(this.getMockDepartment(departmentName));
  }

  private getMockDepartment(name: string): Department {
    switch (name) {
      case 'anatomy':
        return {
          Id: 'anatomy',
          Name: 'Anatomy Department',
          AboutDepartment: {
            Id: 1,
            Title: 'About the Department',
            About: 'The Anatomy Department provides comprehensive education in human anatomy, focusing on the structure and function of the human body.',
            DepartmentId: 'anatomy'
          },
          DepartmentImages: [
            {
              Id: 1,
              Field: 'MainImage',
              UrlPath: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
              DepartmentId: 'anatomy'
            }
          ],
          Statistics: [
            { Id: 1, Title: 'Faculty Members', Count: 15, DepartmentId: 'anatomy' },
            { Id: 2, Title: 'Students', Count: 200, DepartmentId: 'anatomy' },
            { Id: 3, Title: 'Labs', Count: 5, DepartmentId: 'anatomy' }
          ],
          Director: {
            Id: 1,
            Name: 'Dr. John Doe',
            Title: 'Head of Anatomy Department',
            Message: 'Welcome to the Anatomy Department. We are dedicated to advancing knowledge in human anatomy.',
            ImageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
            DepartmentId: 'anatomy'
          },
          Vision: {
            Id: 1,
            Vision: 'To be a leading department in anatomical education and research.',
            DepartmentId: 'anatomy'
          },
          Mission: {
            Id: 1,
            Mission: 'To provide excellent education in anatomy and contribute to medical research.',
            DepartmentId: 'anatomy'
          },
          Goals: [
            { Id: 1, Goal: 'Enhance teaching methods', OrderIndex: 1, DepartmentId: 'anatomy' },
            { Id: 2, Goal: 'Increase research output', OrderIndex: 2, DepartmentId: 'anatomy' }
          ]
        };
      case 'physiology':
        return {
          Id: 'physiology',
          Name: 'Physiology Department',
          AboutDepartment: {
            Id: 2,
            Title: 'About the Department',
            About: 'The Physiology Department studies the functions and mechanisms of living organisms.',
            DepartmentId: 'physiology'
          },
          DepartmentImages: [
            {
              Id: 2,
              Field: 'MainImage',
              UrlPath: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
              DepartmentId: 'physiology'
            }
          ],
          Statistics: [
            { Id: 4, Title: 'Faculty Members', Count: 12, DepartmentId: 'physiology' },
            { Id: 5, Title: 'Students', Count: 180, DepartmentId: 'physiology' },
            { Id: 6, Title: 'Research Projects', Count: 20, DepartmentId: 'physiology' }
          ],
          Director: {
            Id: 2,
            Name: 'Dr. Jane Smith',
            Title: 'Head of Physiology Department',
            Message: 'Our department explores the intricate workings of the human body systems.',
            ImageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
            DepartmentId: 'physiology'
          },
          Vision: {
            Id: 2,
            Vision: 'To advance understanding of physiological processes.',
            DepartmentId: 'physiology'
          },
          Mission: {
            Id: 2,
            Mission: 'To educate students in physiology and conduct cutting-edge research.',
            DepartmentId: 'physiology'
          },
          Goals: [
            { Id: 3, Goal: 'Develop innovative teaching techniques', OrderIndex: 1, DepartmentId: 'physiology' },
            { Id: 4, Goal: 'Expand research collaborations', OrderIndex: 2, DepartmentId: 'physiology' }
          ]
        };
      case 'biochemistry':
        return {
          Id: 'biochemistry',
          Name: 'Biochemistry Department',
          AboutDepartment: {
            Id: 3,
            Title: 'About the Department',
            About: 'The Biochemistry Department investigates chemical processes within living organisms.',
            DepartmentId: 'biochemistry'
          },
          DepartmentImages: [
            {
              Id: 3,
              Field: 'MainImage',
              UrlPath: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800',
              DepartmentId: 'biochemistry'
            }
          ],
          Statistics: [
            { Id: 7, Title: 'Faculty Members', Count: 10, DepartmentId: 'biochemistry' },
            { Id: 8, Title: 'Students', Count: 150, DepartmentId: 'biochemistry' },
            { Id: 9, Title: 'Publications', Count: 50, DepartmentId: 'biochemistry' }
          ],
          Director: {
            Id: 3,
            Name: 'Dr. Michael Johnson',
            Title: 'Head of Biochemistry Department',
            Message: 'We bridge chemistry and biology to understand life at the molecular level.',
            ImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
            DepartmentId: 'biochemistry'
          },
          Vision: {
            Id: 3,
            Vision: 'To be at the forefront of biochemical research and education.',
            DepartmentId: 'biochemistry'
          },
          Mission: {
            Id: 3,
            Mission: 'To provide rigorous training in biochemistry and foster scientific discovery.',
            DepartmentId: 'biochemistry'
          },
          Goals: [
            { Id: 5, Goal: 'Strengthen laboratory facilities', OrderIndex: 1, DepartmentId: 'biochemistry' },
            { Id: 6, Goal: 'Increase interdisciplinary research', OrderIndex: 2, DepartmentId: 'biochemistry' }
          ]
        };
      // Add more cases for other departments as needed
      default:
        return this.getMockDepartment('anatomy');
    }
  }

  // Add other CRUD methods similar to sector.service.ts
  AddDepartment(dto: AddDepartmentDto): Observable<string> {
    return of('Added (Mock)').pipe(delay(500));
  }

  geAlltDepartments(): Observable<DepartmentDto[]> {
    return of([]).pipe(delay(500));
  }

  UpdateDepartment(dto: AddDepartmentDto): Observable<string> {
    return of('Updated (Mock)').pipe(delay(500));
  }

  deleteDepartment(id: string): Observable<string> {
    return of('Deleted (Mock)').pipe(delay(500));
  }

  // Add more methods as needed
}
