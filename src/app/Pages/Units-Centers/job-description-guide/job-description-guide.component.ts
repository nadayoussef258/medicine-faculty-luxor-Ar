import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UnitsCentersService, UnitCenter } from '../../../services/units-centers.service';

@Component({
  selector: 'app-job-description-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-description-guide.component.html',
  styleUrls: ['./job-description-guide.component.css']
})
export class JobDescriptionGuideComponent implements OnInit {

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
