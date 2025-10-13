import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Department, AboutDepartment, DepartmentVision, DepartmentMission, DepartmentGoal, DepartmentImage } from '../Models/departments';

@Injectable({
  providedIn: 'root'
})
export class ScientificDepartmentsService {

  constructor() { }

  getById(id: string): Observable<Department | undefined> {
    // Mock data for scientific departments
    const mockDepartments: { [key: string]: Department } = {
      '1': {
        Id: '1',
        Name: 'Anatomy Department',
        description: 'Study of the structure of the human body.',
        manager: 'Dr. Ahmed Ali',
        email: 'anatomy@faculty.edu',
        phone: '+20 123 456 789',
        sectorId: '1',
        employeesCount: 15,
        location: 'Building A, Floor 2',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
        AboutDepartment: {
          Id: 1,
          About: 'The Anatomy Department provides comprehensive education on human body structures, utilizing modern laboratories and dissection facilities.',
          Title: 'About Anatomy Department',
          DepartmentId: '1'
        } as AboutDepartment,
        Vision: {
          Id: 1,
          Vision: 'To be a leading department in anatomical sciences, advancing knowledge through research and education.',
          DepartmentId: '1'
        } as DepartmentVision,
        Mission: {
          Id: 1,
          Mission: 'To educate students in human anatomy, conduct cutting-edge research, and serve the community with anatomical expertise.',
          DepartmentId: '1'
        } as DepartmentMission,
        Goals: [
          { Id: 1, Goal: 'Provide excellent anatomical education', OrderIndex: 1, DepartmentId: '1' } as DepartmentGoal,
          { Id: 2, Goal: 'Conduct innovative research in anatomy', OrderIndex: 2, DepartmentId: '1' } as DepartmentGoal,
          { Id: 3, Goal: 'Foster collaboration with medical professionals', OrderIndex: 3, DepartmentId: '1' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 1,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
            DepartmentId: '1'
          } as DepartmentImage
        ]
      },
      '2': {
        Id: '2',
        Name: 'Physiology Department',
        description: 'Study of the functions of the human body.',
        manager: 'Dr. Fatima Hassan',
        email: 'physiology@faculty.edu',
        phone: '+20 123 456 790',
        sectorId: '1',
        employeesCount: 12,
        location: 'Building B, Floor 1',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400',
        AboutDepartment: {
          Id: 2,
          About: 'The Physiology Department focuses on understanding bodily functions at cellular, organ, and system levels.',
          Title: 'About Physiology Department',
          DepartmentId: '2'
        } as AboutDepartment,
        Vision: {
          Id: 2,
          Vision: 'To excel in physiological research and education, contributing to medical advancements.',
          DepartmentId: '2'
        } as DepartmentVision,
        Mission: {
          Id: 2,
          Mission: 'To teach physiology principles, conduct research on body functions, and prepare students for medical careers.',
          DepartmentId: '2'
        } as DepartmentMission,
        Goals: [
          { Id: 4, Goal: 'Advance physiological knowledge through research', OrderIndex: 1, DepartmentId: '2' } as DepartmentGoal,
          { Id: 5, Goal: 'Provide comprehensive physiology education', OrderIndex: 2, DepartmentId: '2' } as DepartmentGoal,
          { Id: 6, Goal: 'Integrate physiology with clinical practice', OrderIndex: 3, DepartmentId: '2' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 2,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800',
            DepartmentId: '2'
          } as DepartmentImage
        ]
      },
      '3': {
        Id: '3',
        Name: 'Biochemistry Department',
        description: 'Study of chemical processes in living organisms.',
        manager: 'Dr. Mohamed Salah',
        email: 'biochemistry@faculty.edu',
        phone: '+20 123 456 791',
        sectorId: '1',
        employeesCount: 10,
        location: 'Building C, Floor 3',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400',
        AboutDepartment: {
          Id: 3,
          About: 'The Biochemistry Department explores molecular mechanisms underlying biological processes.',
          Title: 'About Biochemistry Department',
          DepartmentId: '3'
        } as AboutDepartment,
        Vision: {
          Id: 3,
          Vision: 'To be at the forefront of biochemical research and education.',
          DepartmentId: '3'
        } as DepartmentVision,
        Mission: {
          Id: 3,
          Mission: 'To provide in-depth knowledge of biochemistry, conduct innovative research, and train future scientists.',
          DepartmentId: '3'
        } as DepartmentMission,
        Goals: [
          { Id: 7, Goal: 'Conduct groundbreaking biochemical research', OrderIndex: 1, DepartmentId: '3' } as DepartmentGoal,
          { Id: 8, Goal: 'Deliver high-quality biochemistry education', OrderIndex: 2, DepartmentId: '3' } as DepartmentGoal,
          { Id: 9, Goal: 'Promote interdisciplinary collaborations', OrderIndex: 3, DepartmentId: '3' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 3,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800',
            DepartmentId: '3'
          } as DepartmentImage
        ]
      },
      '4': {
        Id: '4',
        Name: 'Pathology Department',
        description: 'Study of the causes and effects of diseases.',
        manager: 'Dr. Sara Ahmed',
        email: 'pathology@faculty.edu',
        phone: '+20 123 456 792',
        sectorId: '1',
        employeesCount: 18,
        location: 'Building D, Floor 4',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400',
        AboutDepartment: {
          Id: 4,
          About: 'The Pathology Department specializes in diagnosing diseases through laboratory analysis of tissues and fluids.',
          Title: 'About Pathology Department',
          DepartmentId: '4'
        } as AboutDepartment,
        Vision: {
          Id: 4,
          Vision: 'To lead in diagnostic pathology and contribute to disease understanding through research.',
          DepartmentId: '4'
        } as DepartmentVision,
        Mission: {
          Id: 4,
          Mission: 'To train pathologists, advance diagnostic techniques, and support clinical decision-making.',
          DepartmentId: '4'
        } as DepartmentMission,
        Goals: [
          { Id: 10, Goal: 'Enhance diagnostic accuracy', OrderIndex: 1, DepartmentId: '4' } as DepartmentGoal,
          { Id: 11, Goal: 'Conduct pathology research', OrderIndex: 2, DepartmentId: '4' } as DepartmentGoal,
          { Id: 12, Goal: 'Collaborate with clinical departments', OrderIndex: 3, DepartmentId: '4' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 4,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
            DepartmentId: '4'
          } as DepartmentImage
        ]
      },
      '5': {
        Id: '5',
        Name: 'Pharmacology Department',
        description: 'Study of drugs and their effects on living organisms.',
        manager: 'Dr. Omar Khaled',
        email: 'pharmacology@faculty.edu',
        phone: '+20 123 456 793',
        sectorId: '1',
        employeesCount: 14,
        location: 'Building E, Floor 1',
        image: 'https://images.unsplash.com/photo-1585399829334-8b7f5c8d7a3e?w=400',
        AboutDepartment: {
          Id: 5,
          About: 'The Pharmacology Department investigates drug actions, interactions, and therapeutic uses.',
          Title: 'About Pharmacology Department',
          DepartmentId: '5'
        } as AboutDepartment,
        Vision: {
          Id: 5,
          Vision: 'To pioneer pharmacological research and education for better therapeutics.',
          DepartmentId: '5'
        } as DepartmentVision,
        Mission: {
          Id: 5,
          Mission: 'To educate on pharmacology, research drug development, and promote rational drug use.',
          DepartmentId: '5'
        } as DepartmentMission,
        Goals: [
          { Id: 13, Goal: 'Advance drug research', OrderIndex: 1, DepartmentId: '5' } as DepartmentGoal,
          { Id: 14, Goal: 'Train pharmacists and physicians', OrderIndex: 2, DepartmentId: '5' } as DepartmentGoal,
          { Id: 15, Goal: 'Ensure safe medication practices', OrderIndex: 3, DepartmentId: '5' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 5,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1585399829334-8b7f5c8d7a3e?w=800',
            DepartmentId: '5'
          } as DepartmentImage
        ]
      },
      '6': {
        Id: '6',
        Name: 'Internal Medicine Department',
        description: 'Diagnosis and treatment of adult diseases.',
        manager: 'Dr. Layla Ibrahim',
        email: 'internal-medicine@faculty.edu',
        phone: '+20 123 456 794',
        sectorId: '2',
        employeesCount: 25,
        location: 'Clinical Building, Floor 3',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400',
        AboutDepartment: {
          Id: 6,
          About: 'The Internal Medicine Department handles comprehensive care for adult patients with various medical conditions.',
          Title: 'About Internal Medicine Department',
          DepartmentId: '6'
        } as AboutDepartment,
        Vision: {
          Id: 6,
          Vision: 'To provide exemplary internal medicine care and training.',
          DepartmentId: '6'
        } as DepartmentVision,
        Mission: {
          Id: 6,
          Mission: 'To diagnose and treat internal diseases, educate residents, and conduct clinical research.',
          DepartmentId: '6'
        } as DepartmentMission,
        Goals: [
          { Id: 16, Goal: 'Deliver high-quality patient care', OrderIndex: 1, DepartmentId: '6' } as DepartmentGoal,
          { Id: 17, Goal: 'Train internal medicine specialists', OrderIndex: 2, DepartmentId: '6' } as DepartmentGoal,
          { Id: 18, Goal: 'Advance internal medicine research', OrderIndex: 3, DepartmentId: '6' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 6,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800',
            DepartmentId: '6'
          } as DepartmentImage
        ]
      },
      '7': {
        Id: '7',
        Name: 'Surgery Department',
        description: 'Surgical treatment of diseases and injuries.',
        manager: 'Dr. Hassan Mahmoud',
        email: 'surgery@faculty.edu',
        phone: '+20 123 456 795',
        sectorId: '2',
        employeesCount: 30,
        location: 'Surgical Wing, Floor 2',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
        AboutDepartment: {
          Id: 7,
          About: 'The Surgery Department performs a wide range of surgical procedures with advanced techniques.',
          Title: 'About Surgery Department',
          DepartmentId: '7'
        } as AboutDepartment,
        Vision: {
          Id: 7,
          Vision: 'To be a center of excellence in surgical care and innovation.',
          DepartmentId: '7'
        } as DepartmentVision,
        Mission: {
          Id: 7,
          Mission: 'To provide surgical expertise, train surgeons, and improve surgical outcomes.',
          DepartmentId: '7'
        } as DepartmentMission,
        Goals: [
          { Id: 19, Goal: 'Perform safe and effective surgeries', OrderIndex: 1, DepartmentId: '7' } as DepartmentGoal,
          { Id: 20, Goal: 'Advance surgical education', OrderIndex: 2, DepartmentId: '7' } as DepartmentGoal,
          { Id: 21, Goal: 'Innovate surgical techniques', OrderIndex: 3, DepartmentId: '7' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 7,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
            DepartmentId: '7'
          } as DepartmentImage
        ]
      },
      '8': {
        Id: '8',
        Name: 'Pediatrics Department',
        description: 'Medical care for infants, children, and adolescents.',
        manager: 'Dr. Nour El-Din',
        email: 'pediatrics@faculty.edu',
        phone: '+20 123 456 796',
        sectorId: '2',
        employeesCount: 22,
        location: 'Pediatric Wing, Floor 1',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
        AboutDepartment: {
          Id: 8,
          About: 'The Pediatrics Department specializes in child health, growth, and development.',
          Title: 'About Pediatrics Department',
          DepartmentId: '8'
        } as AboutDepartment,
        Vision: {
          Id: 8,
          Vision: 'To promote child health and well-being through excellence in pediatrics.',
          DepartmentId: '8'
        } as DepartmentVision,
        Mission: {
          Id: 8,
          Mission: 'To provide pediatric care, educate on child health, and conduct pediatric research.',
          DepartmentId: '8'
        } as DepartmentMission,
        Goals: [
          { Id: 22, Goal: 'Ensure optimal child health', OrderIndex: 1, DepartmentId: '8' } as DepartmentGoal,
          { Id: 23, Goal: 'Train pediatric specialists', OrderIndex: 2, DepartmentId: '8' } as DepartmentGoal,
          { Id: 24, Goal: 'Advance pediatric medicine', OrderIndex: 3, DepartmentId: '8' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 8,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
            DepartmentId: '8'
          } as DepartmentImage
        ]
      },
      '9': {
        Id: '9',
        Name: 'Radiology Department',
        description: 'Medical imaging interpretation and procedures.',
        manager: 'Dr. Karim Abdel',
        email: 'radiology@faculty.edu',
        phone: '+20 123 456 797',
        sectorId: '2',
        employeesCount: 20,
        location: 'Imaging Center, Ground Floor',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
        AboutDepartment: {
          Id: 9,
          About: 'The Radiology Department utilizes advanced imaging technologies for diagnosis and treatment.',
          Title: 'About Radiology Department',
          DepartmentId: '9'
        } as AboutDepartment,
        Vision: {
          Id: 9,
          Vision: 'To lead in radiological imaging and interventional procedures.',
          DepartmentId: '9'
        } as DepartmentVision,
        Mission: {
          Id: 9,
          Mission: 'To provide accurate imaging services, train radiologists, and innovate in radiology.',
          DepartmentId: '9'
        } as DepartmentMission,
        Goals: [
          { Id: 25, Goal: 'Deliver precise diagnostic imaging', OrderIndex: 1, DepartmentId: '9' } as DepartmentGoal,
          { Id: 26, Goal: 'Educate radiology professionals', OrderIndex: 2, DepartmentId: '9' } as DepartmentGoal,
          { Id: 27, Goal: 'Develop advanced imaging techniques', OrderIndex: 3, DepartmentId: '9' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 9,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800',
            DepartmentId: '9'
          } as DepartmentImage
        ]
      }
    };
    return of(mockDepartments[id]).pipe(delay(300));
  }

  getAllDepartments(): Observable<Department[]> {
    return of([
      {
        Id: '1',
        Name: 'Anatomy Department',
        description: 'Study of the structure of the human body.',
        manager: 'Dr. Ahmed Ali',
        email: 'anatomy@faculty.edu',
        phone: '+20 123 456 789',
        sectorId: '1',
        employeesCount: 15,
        location: 'Building A, Floor 2',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400'
      },
      {
        Id: '2',
        Name: 'Physiology Department',
        description: 'Study of the functions of the human body.',
        manager: 'Dr. Fatima Hassan',
        email: 'physiology@faculty.edu',
        phone: '+20 123 456 790',
        sectorId: '1',
        employeesCount: 12,
        location: 'Building B, Floor 1',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400'
      },
      {
        Id: '3',
        Name: 'Biochemistry Department',
        description: 'Study of chemical processes in living organisms.',
        manager: 'Dr. Mohamed Salah',
        email: 'biochemistry@faculty.edu',
        phone: '+20 123 456 791',
        sectorId: '1',
        employeesCount: 10,
        location: 'Building C, Floor 3',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400'
      },
      {
        Id: '4',
        Name: 'Pathology Department',
        description: 'Study of the causes and effects of diseases.',
        manager: 'Dr. Sara Ahmed',
        email: 'pathology@faculty.edu',
        phone: '+20 123 456 792',
        sectorId: '1',
        employeesCount: 18,
        location: 'Building D, Floor 4',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400'
      },
      {
        Id: '5',
        Name: 'Pharmacology Department',
        description: 'Study of drugs and their effects on living organisms.',
        manager: 'Dr. Omar Khaled',
        email: 'pharmacology@faculty.edu',
        phone: '+20 123 456 793',
        sectorId: '1',
        employeesCount: 14,
        location: 'Building E, Floor 1',
        image: 'https://images.unsplash.com/photo-1585399829334-8b7f5c8d7a3e?w=400'
      },
      {
        Id: '6',
        Name: 'Internal Medicine Department',
        description: 'Diagnosis and treatment of adult diseases.',
        manager: 'Dr. Layla Ibrahim',
        email: 'internal-medicine@faculty.edu',
        phone: '+20 123 456 794',
        sectorId: '2',
        employeesCount: 25,
        location: 'Clinical Building, Floor 3',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400'
      },
      {
        Id: '7',
        Name: 'Surgery Department',
        description: 'Surgical treatment of diseases and injuries.',
        manager: 'Dr. Hassan Mahmoud',
        email: 'surgery@faculty.edu',
        phone: '+20 123 456 795',
        sectorId: '2',
        employeesCount: 30,
        location: 'Surgical Wing, Floor 2',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'
      },
      {
        Id: '8',
        Name: 'Pediatrics Department',
        description: 'Medical care for infants, children, and adolescents.',
        manager: 'Dr. Nour El-Din',
        email: 'pediatrics@faculty.edu',
        phone: '+20 123 456 796',
        sectorId: '2',
        employeesCount: 22,
        location: 'Pediatric Wing, Floor 1',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
      },
      {
        Id: '9',
        Name: 'Radiology Department',
        description: 'Medical imaging interpretation and procedures.',
        manager: 'Dr. Karim Abdel',
        email: 'radiology@faculty.edu',
        phone: '+20 123 456 797',
        sectorId: '2',
        employeesCount: 20,
        location: 'Imaging Center, Ground Floor',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400'
      }
    ]).pipe(delay(300));
  }
}
