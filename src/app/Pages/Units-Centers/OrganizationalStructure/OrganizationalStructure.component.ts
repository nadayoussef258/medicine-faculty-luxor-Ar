import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Position {
  title: string;
  name: string;
  icon: string;
  color: string;
  email?:string;
  image?: string | null;
}

interface Department {
  title: string;
  head: string;
  icon: string;
  color: string;
}
interface ExpandedNodes {
  [key: string]: boolean;
}
@Component({
  selector: 'app-organizational-structure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './OrganizationalStructure.component.html',
  styleUrls: ['./OrganizationalStructure.component.css']
})


export class OrganizationalStructureComponent implements OnInit {

   expandedNodes: ExpandedNodes = {
    departments: false,
    offices: false
  };

offices: Position[] = [
  {
    title: 'General Manager of the Faculty',
    name: 'Mr. Mohamed Hussein Ali',
    icon: 'fa-briefcase',
    color: '#5D4037',
    
    image: null
  },
  {
    title: 'Director of Student Affairs',
    name: 'Mr. Ahmed Said Mahmoud',
    icon: 'fa-users',
    color: '#FF8F00',
    image: null
  }
];

president: Position = {
  title: 'College Secretary',
  name: 'Mr. Sabreen Abdelgalil',
  icon: 'fa-building',
  color: '#8B0000',
  image: 'assets/manager.png'
};

dean: Position = {
  title: 'Dean of the Faculty',
  name: 'Prof. Dr.Mohamed Shahat Badawy',
  icon: 'fa-graduation-cap',
  color: '#8B0000',
  email:'dean.medicinefaculty@medicine.luxor.edu.eg',
  image: 'assets/dean.png'
};

viceDeans: Position[] = [
  {
    title: 'Vice Dean for Education and Student Affairs',
    name: 'Prof. Dr. Sara Mohamed Hassan',
    icon: 'fa-book-open',
    color: '#1565C0',
  image: 'assets/slider2.jpg'
  },
  {
    title: 'Vice Dean for Postgraduate Studies and Research',
    name: 'Prof. Dr. Khaled Ahmed Ibrahim',
    icon: 'fa-microscope',
    color: '#388E3C',
  image: 'assets/slider2.jpg'
  }
];

departments: Department[] = [
  {
    title: 'Department of Anatomy',
    head: 'Prof. Dr. Mohamed Abdallah',
    icon: 'fa-user-md',
    color: '#B71C1C',
  },
  {
    title: 'Department of Physiology',
    head: 'Prof. Dr. Ahmed Hassan',
    icon: 'fa-user-md',
    color: '#1565C0',
  },
  {
    title: 'Department of Pathology',
    head: 'Prof. Dr. Sami Mahmoud',
    icon: 'fa-user-md',
    color: '#388E3C',
  },
  {
    title: 'Department of Internal Medicine',
    head: 'Prof. Dr. Yasser Abdelaziz',
    icon: 'fa-user-md',
    color: '#00796B',
  },
  {
    title: 'Department of Surgery',
    head: 'Prof. Dr. Omar El-Sayed',
    icon: 'fa-user-md',
    color: '#FF8F00',
  },
  {
    title: 'Department of Obstetrics and Gynecology',
    head: 'Prof. Dr. Mona Ahmed',
    icon: 'fa-user-md',
    color: '#5D4037',
  },
  {
    title: 'Department of Pediatrics',
    head: 'Prof. Dr. Nour El-Din Mohamed',
    icon: 'fa-user-md',
    color: '#B71C1C',
  },
  {
    title: 'Department of Chest Diseases',
    head: 'Prof. Dr. Karim Abdallah',
    icon: 'fa-user-md',
    color: '#1565C0',
  }
];

  toggleNode(nodeId: string): void {
    this.expandedNodes[nodeId] = !this.expandedNodes[nodeId];
  }
    isExpanded(nodeId: string): boolean {
    return this.expandedNodes[nodeId] || false;
  }
  constructor() { }

  ngOnInit() {
  }

}
