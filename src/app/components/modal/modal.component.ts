import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @ViewChild('videoModal', { static: true }) videoModal: any;

  constructor(private modalService: NgbModal) {}
  
  @Output() close = new EventEmitter<void>();
  images: string[] = [
    '/assets/images/floor1_resized_1000x1000.jpg',
    '/assets/images/Room_resized_1000x1000.jpg',
    //'/assets/images/Garage.jpg',
    //'/assets/images/Room.jpg',
  ];
  activeSlideIndex = 0;
  imagesPerView = 3; 
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


  openModal() {
    this.modalService.open(this.videoModal, { size: 'lg', centered: true });
  }
}
