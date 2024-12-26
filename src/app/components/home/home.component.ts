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
      type: 'image',
      url: 'assets/images/home.jpg',
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
      url: 'assets/images/ChurchMarble.jpg',
      title: 'Metallic Finish Floors',
      subtitle: 'Metallic Finish Floors',
      redirectTo: 'metallic-finish-floors'
    },
    {
      type: 'image',
      url: 'assets/images/churchMarble2.jpg',
      title: '3D Designs for Floors & Walls',
      subtitle: 'designs-for-floors-walls',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'image',
      url: 'assets/images/Antipoliside/1.jpg',
      title: 'Anti-Slip Solutions',
      subtitle: 'Anti-Slip Solutions',
      redirectTo: 'anti-slip-poolside-solutions'
    }
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
  scrollToSection(index: number): void {
    const sections = document.querySelectorAll('.parallax-section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.activeSection = index; // Update the active section
    }
  }
}