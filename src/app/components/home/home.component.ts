import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent   implements OnInit {
  sections = [
    {
      type: 'image',
      url: 'assets/images/image1.jpg',
      title: 'Day-Date',
      subtitle: 'OYSTER PERPETUAL',
    },
    {
      type: 'video',
      url: 'assets/videos/new-watches-2021-homepage-exploration-cover.webm',
      title: 'A Subtle Glow',
      subtitle: 'PLATINUM',
    },
    {
      type: 'image',
      url: 'assets/images/image3.jpg',
      title: 'Explore More',
      subtitle: '',
    },
    {
      type: 'image',
      url: 'assets/images/image1.jpg',
      title: 'Day-Date',
      subtitle: 'OYSTER PERPETUAL',
    },
    {
      type: 'video',
      url: 'assets/videos/new-watches-2021-homepage-exploration-cover.webm',
      title: 'A Subtle Glow',
      subtitle: 'PLATINUM',
    },
    {
      type: 'image',
      url: 'assets/images/image3.jpg',
      title: 'Explore More',
      subtitle: '',
    },
  ];

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
        this.activeSection = index;
      }

      if (section instanceof HTMLElement) {
        const offset = window.scrollY * 0.5; 
        section.style.backgroundPositionY = `${offset}px`;
      }
    });
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.onWindowScroll();
    }
  }
}