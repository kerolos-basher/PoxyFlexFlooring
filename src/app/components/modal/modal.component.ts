import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatIconModule, MatButtonModule,CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  images: string[] = [
    '/assets/images/floor1.jpg',
    '/assets/images/Church.jpg',
    '/assets/images/Garage.jpg',
    '/assets/images/Room.jpg',
  ];
  activeSlideIndex = 0;
  
  nextSlide() {
    if (this.activeSlideIndex < this.images.length - 1) {
      this.activeSlideIndex++;
    } else {
      this.activeSlideIndex = 0; // Loop back to the first slide
    }
  }
  
  prevSlide() {
    if (this.activeSlideIndex > 0) {
      this.activeSlideIndex--;
    } else {
      this.activeSlideIndex = this.images.length - 1; // Loop to the last slide
    }
  }
  closeModal() {
    this.close.emit();
  }
}
