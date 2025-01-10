import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { RouterModule } from '@angular/router';
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
  faPinterestP,
  faWeibo
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderModalComponent } from "../slider-modal/slider-modal.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, ModalComponent, RouterModule, FontAwesomeModule, SliderModalComponent]
})
export class HomeComponent implements OnInit {
 
  sections = [
    {
      type: 'image',
      url: 'assets/images/PoolModal/home.jpg',
      title: 'Epoxy Flakes Flooring',
      subtitle: 'Epoxy Flakes Flooring',
      redirectTo: 'modal'
    },
    {
      type: 'image',
      url: 'assets/images/MarbleChurch/4.jpg',
      title: 'Epoxy Marble Floors & Walls',
      subtitle: 'Epoxy Marble Floors & Walls',
      redirectTo: 'epoxy-marble-floors-and-walls'
    },
    {
      type: 'image',
      url: 'assets/images/metalic/m1.jpg',
      title: 'Metallic Finish Floors',
      subtitle: 'Metallic Finish Floors',
      redirectTo: 'metallic-finish-floors'
    },
    {
      type: 'image',
      url: 'assets/images/3D.jpg',
      title: '3D Designs for Floors & Walls',
      subtitle: '3D Designs for Floors & Walls',
      images: [
        'assets/images/3D1.jpg',
        'assets/images/3D2.jpg',
        'assets/images/3D3.jpg'
      ],
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'image',
      url: 'assets/images/Antipoliside/Anti1.jpg',
      title: 'Anti-Slip Feature',
      subtitle: 'Anti-Slip Solutions',
      redirectTo: 'anti-slip-poolside-solutions'
    }
  ];

  isModalOpen = false;
  // sliderImages: string[] = [];
  activeSection = 0;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.onWindowScroll();
    }
  }

  openModal() {
    console.log('openModal called'); // Debugging log
    this.isModalOpen = true;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.classList.remove('modal-open');
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.isBrowser) return;

    const sections = document.querySelectorAll('.parallax-section');
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        this.activeSection = index;
      }
    });
  }

  scrollToSection(index: number): void {
    const sections = document.querySelectorAll('.parallax-section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.activeSection = index;
    }
  }

  isSliderModalOpen = false;
  sliderImages: string[] = [];

  openSliderModal(images: string[]) {
    if (images && images.length > 0) {
      this.sliderImages = images;
      this.isSliderModalOpen = true;
      document.body.classList.add('modal-open');
    } else {
      console.warn('No images available for this slider modal.');
    }
  }
  
  closeSliderModal() {
    this.isSliderModalOpen = false;
    this.sliderImages = [];
    document.body.classList.remove('modal-open');
  }
}