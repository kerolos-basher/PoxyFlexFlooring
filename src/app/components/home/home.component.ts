import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, ModalComponent,RouterModule]
})
export class HomeComponent implements OnInit {
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
    document.body.classList.add('modal-open');
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


    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar-container');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        navbar?.classList.add('hide');
      } else {
        // Scrolling up
        navbar?.classList.remove('hide');
      }
      lastScrollY = window.scrollY;
    });

  }
  ngOnInit(): void {
    if (this.isBrowser) {
      this.onWindowScroll();
    }
  }

}