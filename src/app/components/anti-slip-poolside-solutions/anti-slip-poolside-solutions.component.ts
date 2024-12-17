import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-anti-slip-poolside-solutions',
  standalone: true,
  imports: [CommonModule, ModalComponent, RouterModule],
  templateUrl: './anti-slip-poolside-solutions.component.html',
  styleUrl: './anti-slip-poolside-solutions.component.scss'
})
export class AntiSlipPoolsideSolutionsComponent {
  sections = [

    {
      type: 'video',
      url: 'assets/videos/MarbleVideo.mp4',
      title: 'Epoxy Marble Floors & Walls',
      subtitle: 'anti-slip-poolside-solutions',
      redirectTo: 'anti-slip-poolside-solutions'
    },
    {
      type: 'image',
      url: 'assets/images/ChurchMarble.jpg',
      title: 'Epoxy Marble Floors & Wallss',
      subtitle: 'designs-for-floors-walls',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'image',
      url: 'assets/images/churchMarble2.jpg',
      title: 'Epoxy Marble Floors & Wallss',
      subtitle: 'designs-for-floors-walls',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'video',
      url: 'assets/videos/MarbleVideo.mp4',
      title: 'epoxy-marble-floors-and-walls',
      subtitle: 'epoxy-marble-floors-and-walls',
      redirectTo: 'epoxy-marble-floors-and-walls'
    },
    {
      type: 'image',
      url: 'assets/images/churchMarble3.jpg',
      title: 'Epoxy Marble Floors & Wallss',
      subtitle: 'designs-for-floors-walls',
      redirectTo: 'designs-for-floors-walls'
    },
  ];
  isModalOpen = false;
  selectedSection: any;

  openModal() {

    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  activeSection = 0;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @HostListener('window:scroll', [])

  onWindowScroll(): void {
    if (!this.isBrowser) return;

    const sections = document.querySelectorAll('.parallax-section');

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        this.activeSection = index; // تحديث القسم النشط
      }
    });
  }
  ngOnInit(): void {
    if (this.isBrowser) {
      this.onWindowScroll();
    }
  }

}
