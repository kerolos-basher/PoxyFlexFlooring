import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-anti-slip-poolside-solutions',
  standalone: true,
  imports: [CommonModule, ModalComponent, RouterModule],
  templateUrl: './anti-slip-poolside-solutions.component.html',
  styleUrl: './anti-slip-poolside-solutions.component.scss'
})
export class AntiSlipPoolsideSolutionsComponent implements OnInit{
  sections = [
    {
      type: 'image',
      url: 'assets/images/Antipoliside/1.jpg',
      title: 'Epoxy Flakes Flooring',
      subtitle: 'Explore more flake flooring options, now with enhanced anti-slip technology for your peace of mind',
      redirectTo: 'anti-slip-poolside-solutions'
    },
    {
      type: 'image',
      url: 'assets/images/Antipoliside/2.jpg',
      title: 'Anti-Slip Poolside Solutions',
      subtitle: 'designs-for-floors-walls',
      service:'Environmentally friendly: Materials used are free from volatile organic compounds',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'image',
      url: 'assets/images/Antipoliside/3.jpg',
      title: 'Anti-Slip Poolside Solutions',
      subtitle: 'designs-for-floors-walls',
      service:'Let us see the condition of the floors before our team intervened and after we added a touch of beauty by Jackys Home Decor',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'image',
      url: 'assets/images/Antipoliside/4.jpg',
      title: 'Anti-Slip Poolside Solutions',
      subtitle: 'designs-for-floors-walls',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'image',
      url: 'assets/images/Antipoliside/5.jpg',
      title: 'Anti-Slip Poolside Solutions',
      subtitle: 'designs-for-floors-walls',
      service:'Easy to clean and maintain: non-porous surfaces that are easy to clean and free from',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'image',
      url: 'assets/images/Antipoliside/6.jpg',
      title: 'Anti-Slip Poolside Solutions',
      subtitle: 'designs-for-floors-walls',
      service:'Durability and strength: Highly resistant to wear and scratches, capable of handling heavy loads, making it perfect for industrial spaces',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'image',
      url: 'assets/images/PoolModal/pool3.jpg',
      title: 'Anti-Slip Poolside Solutions',
      subtitle: 'designs-for-floors-walls',
      service:'Stylish flake flooring with anti-slip protection—perfect for pools and wet areas.',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'image',
      url: 'assets/images/PoolModal/pool2.jpg',
      title: 'Anti-Slip Poolside Solutions',
      subtitle: 'designs-for-floors-walls',
      service:'Dive into safety and style with our flake flooring, designed for poolside perfection.',
      redirectTo: 'designs-for-floors-walls'
    },
    {
      type: 'image',
      url: 'assets/images/PoolModal/pool4.jpg',
      title: 'Anti-Slip Poolside Solutions',
      subtitle: 'designs-for-floors-walls',
      //service:'Durability and strength: Highly resistant to wear and scratches, capable of handling heavy loads, making it perfect for industrial spaces',
      redirectTo: 'designs-for-floors-walls'
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
    if (typeof window !== 'undefined') {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Adds a smooth scrolling effect
      });
    }
  }

}
