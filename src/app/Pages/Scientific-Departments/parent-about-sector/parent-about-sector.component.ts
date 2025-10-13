import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SectorHeaderComponent } from '../../sectors/SharedComponents/sector-header/sector-header.component';
import { VisionMissionGoalsComponent } from '../../sectors/SharedComponents/vision-mission-goals/vision-mission-goals.component';
import { Department } from '../../../Models/departments';
import { ScientificDepartmentsService } from '../../../services/scientific-departments.service';
import { DirectorMessageComponent } from '../../sectors/SharedComponents/director-message/director-message.component';
import { SectorServicesComponent } from '../../sectors/SharedComponents/sector-services/sector-services.component';
import { SectorDepartmentsComponent } from '../../sectors/SharedComponents/sector-departments/sector-departments.component';
import { StaffMembersComponent } from '../../StaffMembers/staff-members.component';

@Component({
  selector: 'app-parent-about-department',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SectorHeaderComponent,
    DirectorMessageComponent,
    VisionMissionGoalsComponent,
    SectorServicesComponent,
    SectorDepartmentsComponent,
    StaffMembersComponent
  ],
  templateUrl: './parent-about-sector.component.html',
  styleUrls: ['./parent-about-sector.component.css']
})
export class ParentAboutSectorComponent implements OnInit {
  department?: Department;
  departmentId!: string;
  activeTab: string = 'about';

  constructor(
    private route: ActivatedRoute,
    private scientificDepartmentsService: ScientificDepartmentsService
  ) {}

  ngOnInit(): void {
    // Walk up the ActivatedRoute chain to find 'id' or 'name' param (robust for nested routes)
    const extractParam = () => {
      let r: ActivatedRoute | null = this.route;
      while (r) {
        const pm = r.snapshot.paramMap;
        if (pm.has('id') || pm.has('name')) {
          return pm.get('id') || pm.get('name') || '';
        }
        r = r.parent as ActivatedRoute | null;
      }
      return '';
    };

    // subscribe to route changes and react
    this.route.paramMap.subscribe(() => {
      const idOrName = extractParam();
      if (!idOrName) {
        this.department = undefined;
        return;
      }

      if (/^\d+$/.test(idOrName)) {
        this.departmentId = idOrName;
        this.loadDepartmentData();
      } else {
        // resolve name slug to a department directly from the list
        this.scientificDepartmentsService.getAllDepartments().subscribe({
          next: (list) => {
            const found = list.find(d => d.Name && d.Name.toLowerCase().includes(idOrName.toLowerCase()));
            if (found) {
              this.department = found;
              this.departmentId = found.Id;
            } else {
              this.department = undefined;
              this.departmentId = '';
            }
          },
          error: () => {
            this.department = undefined;
            this.departmentId = '';
          }
        });
      }
    });
  }

  loadDepartmentData(): void {
    this.scientificDepartmentsService.getById(this.departmentId).subscribe({
      next: (data: Department | undefined) => {
        this.department = data;
        // DEBUG: log resolved department so we can inspect in browser console
        console.log('[ParentAboutSector] loaded departmentId=', this.departmentId, 'department=', this.department);
      },
      error: (error: any) => {
        console.error('Error loading department data:', error);
      }
    });
  }

  get mainImage() {
    return this.department?.DepartmentImages?.find(img => img.Field === 'MainImage') || this.department?.DepartmentImages?.[0];
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  get directorForView() {
    if (!this.department) return undefined;
    // If the department model already has a Director, return it; otherwise build from manager/image
    // Cast to any to satisfy the director component shape
    const dir = (this.department as any).Director;
    if (dir) return dir;
    return {
      Name: this.department.manager || '',
      Title: 'Head of Department',
      Message: this.department.AboutDepartment?.About || this.department.description || '',
      ImageUrl: this.department.image || ''
    } as any;
  }
}
