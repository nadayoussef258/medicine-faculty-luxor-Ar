// medical-conference-hero.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'ck-dean-speech',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    
<div class="dean-message-container">
   <div class="section-title">
    <h2>{{ sectionTitle }}</h2>
  </div>

  <div class="content-wrapper">
    <div class="dean-info-card">
      <div class="dean-image-section">
        <div class="image-container">
          <img [src]="deanInfo.image" [alt]="deanInfo.name" class="dean-photo">
          <div class="image-overlay"></div>
        </div>
      </div>
      
      <div class="dean-details">
        <h3 class="dean-name">{{ deanInfo.name }}</h3>
        <p class="dean-title">{{ deanInfo.title }}</p>
        
        <div class="qualifications">
          <h4>Academic Qualifications:</h4>
          <ul class="qualifications-list">
            <li *ngFor="let qualification of deanInfo.qualifications">
              <i class="fas fa-graduation-cap"></i>
              {{ qualification }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="message-section">
      <div class="message-content">
        <div class="quote-icon">
          <i class="fas fa-quote-right"></i>
        </div>
        <div class="message-text" [innerHTML]="displayedMessage"></div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [`
.dean-message-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Poppins', 'Arial', sans-serif;
  direction: ltr;
  text-align: left;
}

.header-section {
  text-align: center;
  margin-bottom: 0.2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #B71C1C;
  margin-bottom: 0.1rem;
  position: relative;
}
.section-title {
  padding-bottom: 60px;
  text-align: center;
}

.section-title h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: var(--departments-text);
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 1px;
}
.title-underline {
  width: 100px;
  height: 4px;
  background: linear-gradient(135deg, #FF8F00, #B71C1C);
  margin: 0 auto;
  border-radius: 2px;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 1.5rem;
  align-items: start;
}

.dean-info-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #FF8F00;
  position: sticky;
  top: 2rem;
}

.dean-image-section {
  text-align: center;
  margin-bottom: 2rem;
}

.image-container {
  position: relative;
  display: inline-block;
}

.dean-photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #B71C1C;
  box-shadow: 0 8px 25px rgba(255, 143, 0, 0.15);
  transition: transform 0.3s ease;
}

.dean-photo:hover {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 143, 0, 0.08), rgba(183, 28, 28, 0.08));
  pointer-events: none;
}

.dean-details {
  text-align: center;
}

.dean-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #5D4037;
  margin-bottom: 0.5rem;
}

.dean-title {
  font-size: 1.1rem;
  color: #FF8F00;
  font-weight: 600;
  margin-bottom: 2rem;
}

.qualifications {
  text-align: left;
  margin-top: 1.5rem;
}

.qualifications h4 {
  font-size: 1.1rem;
  color: #5D4037;
  margin-bottom: 1rem;
  font-weight: 600;
}

.qualifications-list {
  list-style: none;
  padding: 0;
}

.qualifications-list li {
  padding: 0.5rem 0;
  color: #5D4037;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.qualifications-list li i {
  color: #FF8F00;
  font-size: 0.9rem;
}

.message-section {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid #FF8F00;
}

.message-content {
  padding: 3rem;
  position: relative;
}

.quote-icon {
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 3rem;
  color: #FF8F00;
  opacity: 0.7;
}

.message-text {
  font-size: 1.1rem;
  line-height: 2;
  color: #5D4037;
  white-space: pre-line;
  position: relative;
  z-index: 1;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .dean-info-card {
    position: static;
  }
}

@media (max-width: 768px) {
  .dean-message-container {
    padding: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .dean-info-card {
    padding: 1.5rem;
  }
  
  .dean-photo {
    width: 150px;
    height: 150px;
  }
  
  .message-content {
    padding: 2rem;
  }
  
  .message-text {
    font-size: 1rem;
    line-height: 1.8;
  }
}

@media (max-width: 480px) {
  .dean-name {
    font-size: 1.3rem;
  }
  
  .dean-photo {
    width: 120px;
    height: 120px;
  }
  
  .message-content {
    padding: 1.5rem;
  }
}

/* Print Styles */
@media print {
  .dean-message-container {
    box-shadow: none;
    padding: 1rem;
  }
  
  .dean-info-card,
  .message-section {
    box-shadow: none;
    border: 1px solid #ccc;
  }
}
  `]
})
export class MedicalDeanSpeechComponent {
    @Input() sectionTitle: string = `Dean's Message`;
@Input() fullText: string = '';
  @Input() showFull: boolean = true;
  deanInfo = {
    name: 'Prof. Mohamed Shahat Badawy',
    title: 'Dean of the Faculty of Medicine- Luxor University ',
    image: 'assets/dean.png',
    message: `
      I am pleased to inform you about Luxor Medical College, a prestigious institution that is a cornerstone in the distinguished history of medicine in Egypt. We work - God willing - to be a center of science, a sanctuary for healing the sick, and a sanctuary for the values of mercy and human dignity.
The college bears the name of a city that was the capital of a civilization that was associated thousands of years ago with excellence in medicine, and the walls of its temples still reveal secrets in this field, adding to the scientific and humanitarian legacy left by the ancient Egyptian civilization. Then comes the Arab-Islamic civilization, leaving what is recorded in international references of medical achievements that were one of the foundations for the establishment of modern medicine.
Today, we at Luxor Medical College are inspired by this great legacy as we march to enrich this noble profession with a generation of doctors capable of carrying the message of medicine in a spirit of excellence, innovation, and staying abreast of the latest developments. 
The college not only graduates doctors who possess scientific and practical competence, but also instills the values of compassion, generosity, and integrity. 
The college not only educates and trains students, but also extends its role to serve the surrounding community by starting to establish a university hospital that covers the medical needs of the governorate.
And perhaps beyond. We also plan to reach the most remote villages and hamlets through caravans that include high-level staff.
We continue our journey, asking God for success in our mission, and that the college becomes a scientific and medical beacon that has its place among the prestigious medical institutions.

    `,
    qualifications: [
      'PhD in Internal Medicine',
      'Fellowship in Cardiology',
    ]
  };

  constructor() { }
  get displayedMessage(): string {
  if (this.showFull) {
    return this.deanInfo.message;   // النص كامل
  } else {
    // نجيب أول 300 حرف ونضيف "..."
    return this.deanInfo.message.slice(0, 720) + '...';
  }
}
}