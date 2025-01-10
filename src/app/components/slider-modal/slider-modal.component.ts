import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-modal.component.html',
  styleUrl: './slider-modal.component.scss'
})
export class SliderModalComponent {
  @Input() images: string[] = [];
  @Output() close = new EventEmitter<void>();
  activeSlide = 0;

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.activeSlide = (this.activeSlide - 1 + this.images.length) % this.images.length;
  }

  closeModal() {
    this.close.emit();
  }
}