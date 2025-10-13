import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentDirector } from '../../../Models/departments';

@Component({
  selector: 'app-director-message',
  standalone: true,
  imports: [CommonModule],
templateUrl: './director-message.component.html',
  styleUrls: ['./director-message.component.css']
})
export class DirectorMessageComponent {
  @Input() director?: DepartmentDirector;
}
