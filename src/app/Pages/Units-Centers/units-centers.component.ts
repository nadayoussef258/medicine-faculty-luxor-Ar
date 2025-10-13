import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute, Router } from '@angular/router';
import { DepartmentsHeroSectionComponent } from './hero-section/hero-section.component';
// TabMenuComponent removed - using sidebar from parent-about-sector instead
import { ParentAboutSectorComponent as UnitsParentAboutComponent } from './parent-about-sector/parent-about-sector.component';
import { CommonModule } from '@angular/common';
import { UnitsCentersService, UnitCenter } from '../../services/units-centers.service';

@Component({
  selector: 'app-units-centers',
  standalone: true,
  imports: [RouterOutlet, DepartmentsHeroSectionComponent, CommonModule],
  templateUrl: './units-centers.component.html',
  styleUrls: ['./units-centers.component.css']
})
export class UnitsCentersComponent implements OnInit {
  tabs = [
    { title: 'About', link: 'organizational-structure' },
    { title: 'Course Descriptions', link: 'course-descriptions' },
    { title: 'Job Description Guide', link: 'job-description-guide' },
    { title: 'Academic Standards', link: 'academic-standards' },
    { title: 'Current', link: 'current' }
  ];

  unitId: string = '';
  unitData: UnitCenter | undefined;
  currentRoute: string = '';

  constructor(private route: ActivatedRoute, private unitsCentersService: UnitsCentersService, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.unitId = params.get('id') || 'centers';
      this.loadUnitData();
    });
  }

  loadUnitData() {
    this.unitsCentersService.getById(this.unitId).subscribe({
      next: (resp: UnitCenter | undefined) => {
        if (resp) {
          this.unitData = resp;
        } else {
          // fallback mock
          this.unitData = { id: this.unitId, name: this.unitId, subTitle: '' };
        }
      },
      error: () => {
        this.unitData = { id: this.unitId, name: this.unitId, subTitle: '' };
      }
    });
    this.currentRoute = 'organizational-structure';
  }

  onTabSelected(route: string) {
    this.currentRoute = route;
    this.router.navigate([route], { relativeTo: this.route });
  }
}
