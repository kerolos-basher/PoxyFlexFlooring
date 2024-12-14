import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-designs-for-floors-walls',
  standalone: true,
  imports: [CommonModule, ModalComponent, RouterModule],
  templateUrl: './designs-for-floors-walls.component.html',
  styleUrl: './designs-for-floors-walls.component.scss'
})
export class DesignsForFloorsWallsComponent {
  sections = [

    {
      type: 'video',
      url: 'assets/videos/new-watches-2021-homepage-exploration-cover.webm',
      title: 'anti-slip-poolside-solutions',
      subtitle: 'anti-slip-poolside-solutions',
      redirectTo: 'anti-slip-poolside-solutions'
    },
    {
      type: 'image',
      url: 'assets/images/image3.jpg',
      title: 'designs-for-floors-walls',
      subtitle: 'designs-for-floors-walls',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'image',
      url: 'assets/images/image1.jpg',
      title: 'epoxy-flakes-flooring',
      subtitle: 'epoxy-flakes-flooring',
      redirectTo: 'epoxy-flakes-flooring'
    },
    {
      type: 'video',
      url: 'assets/videos/new-watches-2021-homepage-exploration-cover.webm',
      title: 'epoxy-marble-floors-and-walls',
      subtitle: 'epoxy-marble-floors-and-walls',
      redirectTo: 'epoxy-marble-floors-and-walls'
    },
    {
      type: 'image',
      url: 'assets/images/image3.jpg',
      title: 'metallic-finish-floors',
      subtitle: 'metallic-finish-floors',
      redirectTo: 'metallic-finish-floors'
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
