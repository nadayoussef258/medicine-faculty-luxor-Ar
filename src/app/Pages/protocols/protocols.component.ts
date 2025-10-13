import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedHeroSectionComponent } from "./hero-section/hero-section.component";

interface Protocol {
  id: number;
  partnerInstitution: string;
  typeOfCooperation: string;
  objective: string;
}

@Component({
  selector: 'app-protocols',
  imports: [CommonModule, SharedHeroSectionComponent],
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.css']
})
export class ProtocolsComponent implements OnInit {

  protocols: Protocol[] = [];
  filteredProtocols: Protocol[] = [];
  searchTerm: string = '';
  selectedType: string = 'All';
  cooperationTypes: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadProtocols();
    this.extractCooperationTypes();
  }

  loadProtocols(): void {
    this.protocols = [
      {
        id: 1,
        partnerInstitution: 'Egypt Healthcare Authority – Karnak International Hospital',
        typeOfCooperation: 'Temporary Student Training',
        objective: 'Support clinical training and improve health services'
      },
      {
        id: 2,
        partnerInstitution: 'Healthcare Authority – Fever Hospital',
        typeOfCooperation: 'Academic Exchange & Student Training',
        objective: 'Improve hospital services and participate in health insurance programs'
      },
      {
        id: 3,
        partnerInstitution: 'Shandong Normal University (China)',
        typeOfCooperation: 'Academic & Cultural Exchange',
        objective: 'Joint student programs and research collaboration'
      },
      {
        id: 4,
        partnerInstitution: 'Tiba Technological University',
        typeOfCooperation: 'Educational & Social Innovation',
        objective: 'Support inclusion and scientific activities'
      },
      {
        id: 5,
        partnerInstitution: 'AMIDEAST + Ministry of Higher Education',
        typeOfCooperation: 'Support for People with Disabilities',
        objective: 'Establish support centers at public universities'
      },
      {
        id: 6,
        partnerInstitution: 'National Research Centre',
        typeOfCooperation: 'Research & Development',
        objective: 'Joint research initiatives and academic collaboration'
      }
    ];
    this.filteredProtocols = this.protocols;
  }

  extractCooperationTypes(): void {
    const types = [...new Set(this.protocols.map(p => p.typeOfCooperation))];
    this.cooperationTypes = types.sort();
  }

  filterByType(type: string): void {
    this.selectedType = type;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredProtocols = this.protocols.filter(protocol => {
      const typeMatch = this.selectedType === 'All' || protocol.typeOfCooperation === this.selectedType;
      const searchMatch = this.searchTerm === '' ||
        protocol.partnerInstitution.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        protocol.typeOfCooperation.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        protocol.objective.toLowerCase().includes(this.searchTerm.toLowerCase());
      return typeMatch && searchMatch;
    });
  }

  onSearchChange(term: string): void {
    this.searchTerm = term;
    this.applyFilters();
  }

  getCooperationTypeClass(type: string): string {
    const typeClasses: { [key: string]: string } = {
      'Temporary Student Training': 'type-training',
      'Academic Exchange & Student Training': 'type-exchange',
      'Academic & Cultural Exchange': 'type-cultural',
      'Educational & Social Innovation': 'type-innovation',
      'Support for People with Disabilities': 'type-support',
      'Research & Development': 'type-research'
    };
    return typeClasses[type] || 'type-default';
  }
}
