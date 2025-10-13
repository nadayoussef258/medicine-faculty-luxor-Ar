import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SectorHeaderComponent } from '../../sectors/SharedComponents/sector-header/sector-header.component';
import { VisionMissionGoalsComponent } from '../../sectors/SharedComponents/vision-mission-goals/vision-mission-goals.component';

import { OrganizationalStructureComponent } from '../OrganizationalStructure/OrganizationalStructure.component';
import { CourseDescriptionsComponent } from '../course-descriptions/course-descriptions.component';
import { JobDescriptionGuideComponent } from '../job-description-guide/job-description-guide.component';
import { AcademicStandardsComponent } from '../academic-standards/academic-standards.component';
import { UnitCenter } from '../../../services/units-centers.service';
import { UnitsCentersService } from '../../../services/units-centers.service';
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
    VisionMissionGoalsComponent,
    OrganizationalStructureComponent,
    CourseDescriptionsComponent,
    JobDescriptionGuideComponent,
    AcademicStandardsComponent
  ],
  templateUrl: './parent-about-sector.component.html',
  styleUrls: ['./parent-about-sector.component.css']
})
export class ParentAboutSectorComponent implements OnInit {
  unit?: UnitCenter;
  departmentName!: string; // kept for backwards compatibility
  unitId!: string;
  activeTab: string = 'about';

  constructor(
    private route: ActivatedRoute,
    private unitsCentersService: UnitsCentersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      // For units-centers route the parent param is 'id'
      this.unitId = params['id'] || params['name'];
      this.departmentName = this.unitId;
      this.loadDepartmentData();
    });
  }

  loadDepartmentData(): void {
    this.unitsCentersService.getById(this.unitId).subscribe({
      next: (data) => {
        this.unit = data;
      },
      error: (error) => {
        console.error('Error loading unit data:', error);
      }
    });
  }

  get mainImage() {
    // Units don't have images for now
    return null;
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  navigateTo(tab: string): void {
    this.setActiveTab(tab);
    const id = this.unitId || this.departmentName || 'centers';
    // navigate to /units-centers/:id/:tab
    this.router.navigate(['/units-centers', id, tab]).catch(err => console.error('Navigation error', err));
  }

  get goalsFormatted(): { Id: number; Goal: string; OrderIndex: number }[] {
    if (!this.unit?.goals) return [];
    return this.unit.goals.map((goal, index) => ({ Id: index + 1, Goal: goal, OrderIndex: index }));
  }
}
