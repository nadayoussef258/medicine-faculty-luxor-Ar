import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface UnitCenter {
  id: string;
  name: string;
  subTitle: string;
  about?: string;
  vision?: string;
  mission?: string;
  goals?: string[];
  courseDescriptions?: string;
  jobDescriptionGuide?: string;
  academicStandards?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UnitsCentersService {

  constructor() { }

  getById(id: string): Observable<UnitCenter | undefined> {
    const mockUnitsCenters: { [key: string]: UnitCenter } = {
      '1': {
        id: '1',
        name: 'Medical Research Center',
        subTitle: 'Advancing medical research and innovation.',
        about: 'The Medical Research Center focuses on cutting-edge research in various medical fields.',
        vision: 'To be a leader in medical research globally.',
        mission: 'To conduct innovative research that improves healthcare outcomes.',
        goals: ['Increase research funding', 'Publish high-impact papers', 'Collaborate internationally'],
        courseDescriptions: 'Courses include research methodology, data analysis, and ethics in research.',
        jobDescriptionGuide: 'Roles include research assistants, lab technicians, and project managers.',
        academicStandards: 'Maintain high standards in research integrity and publication.'
      },
      '2': {
        id: '2',
        name: 'Clinical Training Unit',
        subTitle: 'Providing excellent clinical training for students.',
        about: 'The Clinical Training Unit offers hands-on training in clinical settings.',
        vision: 'To produce competent and compassionate healthcare professionals.',
        mission: 'To deliver comprehensive clinical education and training.',
        goals: ['Enhance clinical skills', 'Improve patient care', 'Foster professional development'],
        courseDescriptions: 'Courses cover patient assessment, treatment planning, and clinical procedures.',
        jobDescriptionGuide: 'Positions include clinical instructors, supervisors, and coordinators.',
        academicStandards: 'Adhere to accreditation standards for clinical education.'
      },
      '3': {
        id: '3',
        name: 'Public Health Unit',
        subTitle: 'Promoting public health and wellness.',
        about: 'The Public Health Unit works on community health initiatives and disease prevention.',
        vision: 'A healthier community through proactive health measures.',
        mission: 'To implement public health programs that benefit the population.',
        goals: ['Reduce disease incidence', 'Increase health awareness', 'Strengthen community partnerships'],
        courseDescriptions: 'Courses include epidemiology, health policy, and community health.',
        jobDescriptionGuide: 'Roles encompass health educators, epidemiologists, and program managers.',
        academicStandards: 'Follow guidelines for public health education and practice.'
      },
      '4': {
        id: '4',
        name: 'Biotechnology Center',
        subTitle: 'Innovating in biotechnology for medical applications.',
        about: 'The Biotechnology Center develops new technologies for medical use.',
        vision: 'To lead in biotechnological advancements for medicine.',
        mission: 'To create innovative biotech solutions for healthcare challenges.',
        goals: ['Develop new therapies', 'Advance diagnostic tools', 'Promote biotech research'],
        courseDescriptions: 'Courses in molecular biology, genetic engineering, and biotech applications.',
        jobDescriptionGuide: 'Positions include biotech researchers, lab managers, and tech specialists.',
        academicStandards: 'Uphold standards in biotech research and development.'
      },
      '5': {
        id: '5',
        name: 'Nursing Education Unit',
        subTitle: 'Educating future nurses with excellence.',
        about: 'The Nursing Education Unit provides comprehensive nursing education.',
        vision: 'To be a premier institution for nursing education.',
        mission: 'To prepare skilled nurses who deliver high-quality care.',
        goals: ['Improve nursing curricula', 'Enhance clinical placements', 'Support student success'],
        courseDescriptions: 'Courses in nursing fundamentals, specialties, and ethics.',
        jobDescriptionGuide: 'Roles include nursing instructors, clinical preceptors, and educators.',
        academicStandards: 'Meet accreditation requirements for nursing programs.'
      },
      '6': {
        id: '6',
        name: 'Pharmacy Practice Unit',
        subTitle: 'Advancing pharmacy practice and education.',
        about: 'The Pharmacy Practice Unit focuses on pharmaceutical care and education.',
        vision: 'Excellence in pharmacy education and practice.',
        mission: 'To educate pharmacists who optimize medication therapy.',
        goals: ['Expand clinical pharmacy services', 'Promote rational drug use', 'Advance pharmacy research'],
        courseDescriptions: 'Courses in pharmacology, therapeutics, and pharmacy management.',
        jobDescriptionGuide: 'Positions include pharmacy educators, clinical pharmacists, and managers.',
        academicStandards: 'Adhere to standards for pharmacy education and practice.'
      },
      '7': {
        id: '7',
        name: 'Medical Imaging Center',
        subTitle: 'Providing advanced imaging services and training.',
        about: 'The Medical Imaging Center offers state-of-the-art imaging technology.',
        vision: 'To be a center of excellence in medical imaging.',
        mission: 'To provide accurate diagnostic imaging and educate imaging professionals.',
        goals: ['Upgrade imaging equipment', 'Train skilled technologists', 'Improve diagnostic accuracy'],
        courseDescriptions: 'Courses in radiology, MRI, CT, and ultrasound techniques.',
        jobDescriptionGuide: 'Roles include imaging technologists, radiologists, and supervisors.',
        academicStandards: 'Follow standards for medical imaging education.'
      },
      '8': {
        id: '8',
        name: 'Health Informatics Unit',
        subTitle: 'Integrating technology in healthcare.',
        about: 'The Health Informatics Unit develops health information systems.',
        vision: 'To transform healthcare through informatics.',
        mission: 'To implement effective health IT solutions.',
        goals: ['Develop EHR systems', 'Enhance data security', 'Promote digital health'],
        courseDescriptions: 'Courses in health informatics, data management, and IT systems.',
        jobDescriptionGuide: 'Positions include informatics specialists, data analysts, and IT managers.',
        academicStandards: 'Uphold standards in health informatics education.'
      },
      '9': {
        id: '9',
        name: 'Emergency Medicine Unit',
        subTitle: 'Responding to medical emergencies effectively.',
        about: 'The Emergency Medicine Unit handles urgent medical situations.',
        vision: 'To provide the best emergency care possible.',
        mission: 'To deliver rapid and effective emergency medical services.',
        goals: ['Reduce response times', 'Improve survival rates', 'Train emergency personnel'],
        courseDescriptions: 'Courses in emergency care, trauma management, and resuscitation.',
        jobDescriptionGuide: 'Roles include emergency physicians, nurses, and paramedics.',
        academicStandards: 'Meet standards for emergency medicine training.'
      },
      '10': {
        id: '10',
        name: 'Mental Health Center',
        subTitle: 'Supporting mental health and wellness.',
        about: 'The Mental Health Center provides mental health services and education.',
        vision: 'A society with improved mental health awareness.',
        mission: 'To promote mental wellness and treat mental disorders.',
        goals: ['Increase access to care', 'Reduce stigma', 'Advance mental health research'],
        courseDescriptions: 'Courses in psychiatry, psychology, and mental health counseling.',
        jobDescriptionGuide: 'Positions include psychiatrists, psychologists, and counselors.',
        academicStandards: 'Adhere to standards for mental health education.'
      }
    };
    return of(mockUnitsCenters[id]).pipe(delay(300));
  }
}
