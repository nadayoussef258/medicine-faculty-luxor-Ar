import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-departments-grid',
  standalone: true,
  imports: [CommonModule], // ضروري لعمل *ngIf و*ngFor في القالب
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsGridComponent {
  // رقم الصفحة الحالية
  page: number = 1;
  // عدد الكروت في كل صفحة
  pageSize: number = 6;
  // العضو المحدد لعرض تفاصيله في المودال
  selectedStaff: any = null;
  // حالة ظهور المودال
  showModal: boolean = false;

  // إرجاع أعضاء الصفحة الحالية فقط
  get pagedStaff() {
    const start = (this.page - 1) * this.pageSize;
    return this.departmentsData.slice(start, start + this.pageSize);
  }

  // حساب عدد الصفحات الكلي
  get totalPages() {
    return Math.ceil(this.departmentsData.length / this.pageSize);
  }

  // تغيير الصفحة
  setPage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
    }
  }

  // فتح نافذة التفاصيل
  openModal(staff: any): void {
    this.selectedStaff = staff;
    this.showModal = true;
  }

  // إغلاق نافذة التفاصيل
  closeModal(): void {
    this.showModal = false;
    this.selectedStaff = null;
  }

  // Staff members data (example, translated)
  departmentsData = [
  {
    id: 1,
    name: 'Department of Anatomy',
    head: 'Dr. Ahmed Youssef Mohamed',
    description:
      'The Department of Anatomy provides foundational knowledge of the human body structure, essential for medical and surgical education.',
    contactEmail: 'anatomy@medicine.luxor.edu.eg',
    phone: '+20 100 111 1111',
    researchAreas: 'Human Anatomy, Embryology, Neuroanatomy',
    location: 'Building A, 2nd Floor',
    image: 'assets/event1.jpg'
  },
  {
    id: 2,
    name: 'Department of Physiology',
    head: 'Dr. Fatma Hassan Ibrahim',
    description:
      'The Department of Physiology studies the normal functions of the human body and serves as a basis for understanding disease mechanisms.',
    contactEmail: 'physiology@medicine.luxor.edu.eg',
    phone: '+20 100 222 2222',
    researchAreas: 'Neurophysiology, Cardiovascular Physiology, Endocrinology',
    location: 'Building B, 1st Floor',
    image: 'assets/event2.jpg'
  },
  {
    id: 3,
    name: 'Department of Biochemistry',
    head: 'Dr. Sara Mahmoud Ali',
    description:
      'The Biochemistry Department focuses on the chemical processes that occur within the human body and their medical implications.',
    contactEmail: 'biochemistry@medicine.luxor.edu.eg',
    phone: '+20 100 333 3333',
    researchAreas: 'Molecular Biology, Enzymology, Metabolism',
    location: 'Building B, Ground Floor',
    image: 'assets/event3.jpg'
  },
  {
    id: 4,
    name: 'Department of Pathology',
    head: 'Dr. Ali Hassan Mahmoud',
    description:
      'The Department of Pathology studies diseases, their causes, mechanisms, and effects on human tissues and organs.',
    contactEmail: 'pathology@medicine.luxor.edu.eg',
    phone: '+20 100 444 4444',
    researchAreas: 'Histopathology, Cytopathology, Molecular Pathology',
    location: 'Building C, 1st Floor',
    image: 'assets/event1.jpg'
  },
  {
    id: 5,
    name: 'Department of Pharmacology',
    head: 'Dr. Laila Ahmed Nasser',
    description:
      'The Department of Pharmacology focuses on the study of drugs, their actions, interactions, and effects on the human body.',
    contactEmail: 'pharmacology@medicine.luxor.edu.eg',
    phone: '+20 100 555 5555',
    researchAreas: 'Clinical Pharmacology, Toxicology, Drug Development',
    location: 'Building D, 2nd Floor',
    image: 'assets/event3.jpg'
  },
  {
    id: 6,
    name: 'Department of Microbiology and Immunology',
    head: 'Dr. Hanan Tarek Abdelrahman',
    description:
      'The Department studies microorganisms and their interactions with the human immune system, essential for understanding infectious diseases.',
    contactEmail: 'microbiology@medicine.luxor.edu.eg',
    phone: '+20 100 666 6666',
    researchAreas: 'Bacteriology, Virology, Immunopathology',
    location: 'Building E, 1st Floor',
    image: 'assets/event2.jpg'
  },
  {
    id: 7,
    name: 'Department of Internal Medicine',
    head: 'Dr. Mohamed Salem Hassan',
    description:
      'The Department of Internal Medicine provides clinical training in diagnosing and treating adult diseases, including cardiology and endocrinology.',
    contactEmail: 'internalmedicine@medicine.luxor.edu.eg',
    phone: '+20 100 777 7777',
    researchAreas: 'Cardiology, Gastroenterology, Endocrinology',
    location: 'Teaching Hospital, 3rd Floor',
    image: 'assets/event1.jpg'
  },
  {
    id: 8,
    name: 'Department of Surgery',
    head: 'Dr. Ahmed El-Sayed Mahmoud',
    description:
      'The Department of Surgery provides education and hands-on training in general and specialized surgical techniques.',
    contactEmail: 'surgery@medicine.luxor.edu.eg',
    phone: '+20 100 888 8888',
    researchAreas: 'General Surgery, Laparoscopic Surgery, Oncology',
    location: 'Teaching Hospital, 2nd Floor',
    image: 'assets/event1.jpg'
  },
  {
    id: 9,
    name: 'Department of Pediatrics',
    head: 'Dr. Salma Hassan Omar',
    description:
      'The Department of Pediatrics focuses on child health, growth, and development, offering care and research in neonatology and child diseases.',
    contactEmail: 'pediatrics@medicine.luxor.edu.eg',
    phone: '+20 100 999 9999',
    researchAreas: 'Pediatrics, Neonatology, Child Development',
    location: 'Teaching Hospital, 1st Floor',
    image: 'assets/event1.jpg'
  },
  {
    id: 10,
    name: 'Department of Obstetrics and Gynecology',
    head: 'Dr. Reham Ali Abdelaziz',
    description:
      'The Department provides education and clinical training in women’s health, pregnancy care, and reproductive medicine.',
    contactEmail: 'obgyn@medicine.luxor.edu.eg',
    phone: '+20 100 123 4567',
    researchAreas: 'Reproductive Health, Maternal Medicine, Gynecologic Oncology',
    location: 'Teaching Hospital, 4th Floor',
    image: 'assets/event1.jpg'
  }
];

}
