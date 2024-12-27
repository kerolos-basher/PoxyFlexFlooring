import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-epoxy-marble-floors-and-walls',
  standalone: true,
  imports: [CommonModule, ModalComponent, RouterModule],
  templateUrl: './epoxy-marble-floors-and-walls.component.html',
  styleUrl: './epoxy-marble-floors-and-walls.component.scss'
})
export class EpoxyMarbleFloorsAndWallsComponent {
  isTextVisible: boolean = false;

  sections = [
    {
      type: 'image',
      url: 'assets/images/MarbleChurch/4.jpg',
      title: 'Epoxy Marble Floors & Walls',
      subtitle: 'Epoxy Marble Floors & Walls',
      redirectTo: 'epoxy-marble-floors-and-walls'
    },
    {
      type: 'image',
      url: 'assets/images/MarbleChurch/1.jpg',
      title: 'Epoxy Marble Floors & Walls',
      subtitle: 'Epoxy Marble Floors & Walls',
      service:'Let us see the condition of the floors before our team intervened and after we added a touch of beauty by Jackys Home Decor',
      redirectTo: 'epoxy-marble-floors-and-walls'
    },
    {
      type: 'image',
      url: 'assets/images/MarbleChurch/2.jpg',
      title: 'Epoxy Marble Floors & Walls',
      subtitle: 'Epoxy Marble Floors & Walls',
      service:'if you are looking to renovate your residential space or design unique flooring for your commercial area, our team is ready to assist you.',
      redirectTo: 'epoxy-marble-floors-and-walls'
    },
    {
      type: 'image',
      url: 'assets/images/MarbleChurch/3.jpg',
      title: 'Epoxy Marble Floors & Walls',
      service:'Epoxy designs with marble touches, suitable for all spaces and adding a touch of luxury.',
      subtitle: 'Epoxy Marble Floors & Walls',
      redirectTo: 'epoxy-marble-floors-and-walls'
    },
    {
      type: 'image',
      url: 'assets/images/MarbleChurch/5.jpg',
      title: 'Epoxy Marble Floors & Walls',
      subtitle: 'Epoxy Marble Floors & Walls',
      redirectTo: 'epoxy-marble-floors-and-walls'
    },
    {
      type: 'image',
      url: 'assets/images/MarbleChurch/6.jpg',
      title: 'Epoxy Marble Floors & Walls',
      subtitle: 'Epoxy Marble Floors & Walls',
      service:'Transforming Floors, Walls, and Spaces Beyond Imagination',
      redirectTo: 'epoxy-marble-floors-and-walls'
    }
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
    setTimeout(() => {
      this.isTextVisible = true;
    }, 1000);
    if (typeof window !== 'undefined') {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Adds a smooth scrolling effect
      });
    }
  }

}
