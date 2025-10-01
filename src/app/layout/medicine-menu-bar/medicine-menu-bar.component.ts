import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

export interface MenuTab {
  id?: string;
  title: string;
  target: string;
  order: number;
  menuTypeId: string;
  parentId?: string | null;
  childs?: MenuTab[];
  fragment?: string;
  icon?: string;
  isActive?: boolean;
}

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
    childs: [
      {
        title: 'Overview',
        target: '/overview',
        order: 1,
        menuTypeId: 'sub',
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
      childs: [
        {
          title: 'Academic Departments',
          target: '/academic-departments',
          order: 1,
          menuTypeId: 'sub',
          childs: [
            { title: 'Anatomy', target: '/anatomy', order: 1, menuTypeId: 'subsub' },
            { title: 'Physiology', target: '/physiology', order: 2, menuTypeId: 'subsub' },
            { title: 'Biochemistry', target: '/biochemistry', order: 3, menuTypeId: 'subsub' },
            { title: 'Pathology', target: '/pathology', order: 4, menuTypeId: 'subsub' },
            { title: 'Pharmacology', target: '/pharmacology', order: 5, menuTypeId: 'subsub' }
          ]
        },
        {
          title: 'Clinical Departments',
          target: '/clinical-departments',
          order: 2,
          menuTypeId: 'sub',
          childs: [
            { title: 'Internal Medicine', target: '/internal-medicine', order: 1, menuTypeId: 'subsub' },
            { title: 'Surgery', target: '/surgery', order: 2, menuTypeId: 'subsub' },
            { title: 'Pediatrics', target: '/pediatrics', order: 3, menuTypeId: 'subsub' },
            { title: 'Obstetrics and Gynecology', target: '/obgyn', order: 4, menuTypeId: 'subsub' },
            { title: 'Radiology', target: '/radiology', order: 5, menuTypeId: 'subsub' }
          ]
        }
      ]
    },
    {
      id: '5',
      title: 'Centers and Units',
      target: '/centers-units',
      order: 5,
      menuTypeId: 'main',
      childs: [
        { title: 'Centers', target: '/centers', order: 1, menuTypeId: 'sub' },
        { title: 'Units', target: '/units', order: 2, menuTypeId: 'sub' }
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
    },
    {
      id: '8',
      title: 'News',
      target: '/news',
      order: 8,
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
