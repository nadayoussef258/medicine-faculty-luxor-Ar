import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuTab } from '../../Models/layout';

@Component({
  selector: 'ck-medicine-menu-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './medicine-menu-bar.component.html',
  styleUrls: ['./medicine-menu-bar.component.css']
})
export class MedicineMenuBarComponent {
  @Input() menuTabs: MenuTab[] = [
    {
      id: '1',
      title: 'Home',
      target: '',
      order: 1,
      menuTypeId: 'main',
    },
     {
    id: '2',
    title: 'About the College',
    target: '/about-college',
    order: 2,
    menuTypeId: 'main',
    type: "columns",
    childs: [
      {
        title: 'Overview',
        target: '/overview',
        order: 1,
        menuTypeId: 'sub',
    type: "menu",

        childs: [
                    { title: 'Dean’s Word', target: '/dean-word', order: 1, menuTypeId: 'subsub' },
          { title: 'History', target: '/history', order: 2, menuTypeId: 'subsub' },
          { title: 'Objectives', target: '/objectives', order: 3, menuTypeId: 'subsub' },
          { title: 'Vision & Mission', target: '/vision-mission', order: 4, menuTypeId: 'subsub' }
        ]
      },
      {
        title: 'Management',
        target: '/management',
        order: 2,
        menuTypeId: 'sub',
    type: "menu",

        childs: [
          { title: 'Organizational structure', target: '/structure', order: 1, menuTypeId: 'subsub' },
          // { title: 'Vice Dean (Education)', target: '/vice-dean-education', order: 2, menuTypeId: 'subsub' },
          // { title: 'Vice Dean (Research)', target: '/vice-dean-research', order: 3, menuTypeId: 'subsub' },
          // { title: 'Vice Dean (Community)', target: '/vice-dean-community', order: 4, menuTypeId: 'subsub' },
          // { title: 'Secretary', target: '/secretary', order: 5, menuTypeId: 'subsub' }
        ]
      }
    ]
  },
    {
      id: '3',
      title: 'Sectors',
      target: '/sector',
      order: 3,
      menuTypeId: 'main',
    type: "menu",

      childs: [
        { id: '1', title: 'Education and Students Affairs Sector', target: '/sector/1', order: 1, menuTypeId: 'sub' },
        { id: '2', title: 'Graduate Studies and Research Sector', target: '/sector/2', order: 2, menuTypeId: 'sub' },
        { id: '3', title: 'Community Service and Environmental Affairs Sector', target: '/sector/3', order: 3, menuTypeId: 'sub' }
      ]
    },
    {
      id: '4',
      title: 'Scientific Departments',
      target: '/departments',
      order: 4,
      menuTypeId: 'main',
    type: "columns",

      childs: [
        {
          title: 'Academic Departments',
          target: '/scientific-departments/academic-departments',
          order: 1,
          menuTypeId: 'sub',
          childs: [
            { title: 'Anatomy', target: '/scientific-departments/1', order: 1, menuTypeId: 'subsub' },
            { title: 'Physiology', target: '/scientific-departments/2', order: 2, menuTypeId: 'subsub' },
            { title: 'Biochemistry', target: '/scientific-departments/3', order: 3, menuTypeId: 'subsub' },
            { title: 'Pathology', target: '/scientific-departments/4', order: 4, menuTypeId: 'subsub' },
            { title: 'Pharmacology', target: '/scientific-departments/5', order: 5, menuTypeId: 'subsub' }
          ]
        },
        {
          title: 'Clinical Departments',
          target: '/scientific-departments/clinical-departments',
          order: 2,
          menuTypeId: 'sub',
          childs: [
            { title: 'Internal Medicine', target: '/scientific-departments/6', order: 1, menuTypeId: 'subsub' },
            { title: 'Surgery', target: '/scientific-departments/7', order: 2, menuTypeId: 'subsub' },
            { title: 'Pediatrics', target: '/scientific-departments/8', order: 3, menuTypeId: 'subsub' },
            { title: 'Radiology', target: '/scientific-departments/9', order: 5, menuTypeId: 'subsub' }
          ]
        }
      ]
    },
    {
      id: '5',
      title: 'Centers and Units',
      target: '/units-centers',
      order: 5,
      menuTypeId: 'main',
      type: "menu",
      childs: [
        { title: 'Medical Research Center', target: '/units-centers/1', order: 1, menuTypeId: 'sub' },
        { title: 'Clinical Training Unit', target: '/units-centers/2', order: 2, menuTypeId: 'sub' },
        { title: 'Public Health Unit', target: '/units-centers/3', order: 3, menuTypeId: 'sub' },
        { title: 'Biotechnology Center', target: '/units-centers/4', order: 4, menuTypeId: 'sub' },
        { title: 'Nursing Education Unit', target: '/units-centers/5', order: 5, menuTypeId: 'sub' },
        { title: 'Pharmacy Practice Unit', target: '/units-centers/6', order: 6, menuTypeId: 'sub' },
        { title: 'Medical Imaging Center', target: '/units-centers/7', order: 7, menuTypeId: 'sub' },
        { title: 'Health Informatics Unit', target: '/units-centers/8', order: 8, menuTypeId: 'sub' },
        { title: 'Emergency Medicine Unit', target: '/units-centers/9', order: 9, menuTypeId: 'sub' },
        { title: 'Mental Health Center', target: '/units-centers/10', order: 10, menuTypeId: 'sub' }
      ]
    },
    {
      id: '6',
      title: 'College Journal',
      target: '/journal',
      order: 6,
      menuTypeId: 'main'
    },
    {
      id: '7',
      title: 'Staff Members',
      target: '/staff-members',
      order: 7,
      menuTypeId: 'main'
    }
    ,
    {
      id: '8',
      title: 'Protocols',
      target: '/protocols',
      order: 8,
      menuTypeId: 'main'
    },
    {
      id: '9',
      title: 'News',
      target: '/news',
      order: 9,
      menuTypeId: 'main'
    }
  ];

  @Input() isCollapsed = false;
  @Output() tabSelected = new EventEmitter<MenuTab>();
  isMobile = false;

  ngOnInit() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkMobile.bind(this));
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 991;
    if (this.isMobile) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }

  activeDropdown: string | null = null;

  constructor(private router: Router) {}

  onTabClick(tab: MenuTab, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    // Handle dropdown toggle
    if (tab.childs && tab.childs.length > 0) {
      this.activeDropdown = this.activeDropdown === tab.id ? null : tab.id!;
      return;
    }

    // Handle regular tab selection
    this.selectTab(tab);
  }

  selectTab(tab: MenuTab): void {
    // Update active states
    this.menuTabs.forEach(t => {
      t.isActive = false;
      if (t.childs) {
        t.childs.forEach(child => child.isActive = false);
      }
    });

    tab.isActive = true;
    this.activeDropdown = null;

    // Emit selection event
    this.tabSelected.emit(tab);
  }

  onSubTabClick(subTab: MenuTab, parentTab: MenuTab, event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    // Update active states
    this.menuTabs.forEach(t => {
      t.isActive = false;
      if (t.childs) {
        t.childs.forEach(child => child.isActive = false);
      }
    });

    subTab.isActive = true;
    parentTab.isActive = true;
    this.activeDropdown = null;

    // Emit selection event
    this.tabSelected.emit(subTab);
  }

  toggleMobileMenu(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  closeDropdown(): void {
    this.activeDropdown = null;
  }

  trackByFn(index: number, item: MenuTab): string {
    return item.id || item.title;
  }
}
