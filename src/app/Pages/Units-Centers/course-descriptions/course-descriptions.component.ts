import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UnitsCentersService, UnitCenter } from '../../../services/units-centers.service';

@Component({
  selector: 'app-course-descriptions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-descriptions.component.html',
  styleUrls: ['./course-descriptions.component.css']
})
export class CourseDescriptionsComponent implements OnInit {

  unitId: string = '';
  unit: UnitCenter | undefined;

  constructor(private route: ActivatedRoute, private unitsCentersService: UnitsCentersService) { }

  ngOnInit() {
    this.route.parent?.paramMap.subscribe(params => {
      this.unitId = params.get('id') || '';
      this.loadUnit();
    });
  }

  loadUnit() {
    this.unitsCentersService.getById(this.unitId).subscribe({
      next: (data) => {
        this.unit = data;
      },
      error: (error) => {
        console.error('Error loading unit data:', error);
      }
    });
  }

}
