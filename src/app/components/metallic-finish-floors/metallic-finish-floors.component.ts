import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-metallic-finish-floors',
  standalone: true,
  imports: [CommonModule, ModalComponent, RouterModule],
  templateUrl: './metallic-finish-floors.component.html',
  styleUrl: './metallic-finish-floors.component.scss'
})
export class MetallicFinishFloorsComponent {
  sections = [

    {
      type: 'video',
      url: 'assets/videos/MarbleVideo.mp4',
      title: 'Metallic Finish Floors',
      subtitle: 'anti-slip-poolside-solutions',
      redirectTo: 'anti-slip-poolside-solutions'
    },
    {
      type: 'image',
      url: 'assets/images/ChurchMarble.jpg',
      title: 'Metallic Finish Floors',
      subtitle: 'designs-for-floors-walls',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'image',
      url: 'assets/images/churchMarble2.jpg',
      title: 'Metallic Finish Floors',
      subtitle: 'designs-for-floors-walls',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'video',
      url: 'assets/videos/MarbleVideo.mp4',
      title: 'Metallic Finish Floors',
      subtitle: 'epoxy-marble-floors-and-walls',
      redirectTo: 'epoxy-marble-floors-and-walls'
    },
    {
      type: 'image',
      url: 'assets/images/churchMarble3.jpg',
      title: 'Metallic Finish Floors',
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
    if (typeof window !== 'undefined') {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Adds a smooth scrolling effect
      });
    }
  }

}
