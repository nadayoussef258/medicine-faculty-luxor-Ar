
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sector-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sector-header.component.html',
  styleUrls: ['./sector-header.component.css']
})
export class SectorHeaderComponent {
  @Input() title!: string;
  @Input() about!: string;
  @Input() imageUrl!: string;
}
