import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @ViewChild('videoModal', { static: true }) videoModal: any;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  isSmallScreen= false;
  constructor(private modalService: NgbModal,private breakpointObserver: BreakpointObserver) { }

  @Output() close = new EventEmitter<void>();
  images2: string[] = [
    '/assets/images/PoolModal/Flax3.jpg',
    '/assets/images/PoolModal/Flax4.jpg',
    '/assets/images/PoolModal/Flax2.jpg',
    '/assets/images/PoolModal/Flax1.jpg',
    '/assets/images/PoolModal/Flax6.jpg',
    '/assets/images/PoolModal/Flax8.jpg',
    '/assets/images/PoolModal/Flax9.jpg'
  ];
  images: string[] = [
    '/assets/images/PoolModal/8.jpg',
    '/assets/images/PoolModal/9.jpg',
    '/assets/images/PoolModal/2.jpg',
    '/assets/images/PoolModal/3.jpg',
    '/assets/images/PoolModal/4.jpg',
    '/assets/images/PoolModal/5.jpg',
    '/assets/images/PoolModal/6.jpg',
  ];
  activeSlideIndex = 0;
  activeSlideIndex2 = 0;
  imagesPerView = 4;
  isFullScreen = false;

  ngOnInit() {
    this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .subscribe(result => {
      this.isSmallScreen = result.matches; // True if screen matches 'Small' or 'XSmall'
    });
  }

  openVideo() {
    const video = this.videoPlayer.nativeElement;

    // Request Fullscreen with type assertions for Safari or older browsers
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen(); // Safari support
    } else if ((video as any).msRequestFullscreen) {
      (video as any).msRequestFullscreen(); // IE support
    }

    video.play(); // Start playing the video
    this.isFullScreen = true;
  }

  toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen(); // Exit fullscreen
      this.videoPlayer.nativeElement.pause(); // Pause video
      this.videoPlayer.nativeElement.currentTime = 0; // Reset video
      this.isFullScreen = false; // Update state
    } else {
      this.openVideo(); // Re-enter fullscreen if needed
    }
  }

  prevSlide() {
    if (this.activeSlideIndex > 0) {
      this.activeSlideIndex--;
    } else {
      //this.activeSlideIndex = this.images.length - 1; // Loop to last slide
    }
  }
  
  // Navigate to the next slide
  nextSlide() {
    if (this.activeSlideIndex < this.images.length - 1) {
      this.activeSlideIndex++;
    } else {
     // this.activeSlideIndex = 0; // Loop back to first slide
    }
  }



  prevSlide2() {
    if (this.activeSlideIndex2 > 0) {
      this.activeSlideIndex2--;
    } else {
      //this.activeSlideIndex = this.images.length - 1; // Loop to last slide
    }
  }
  
  // Navigate to the next slide
  nextSlide2() {
    if (this.activeSlideIndex2 < this.images2.length - 1) {
      this.activeSlideIndex2++;
    } else {
     // this.activeSlideIndex = 0; // Loop back to first slide
    }
  }

  closeModal() {
    this.close.emit();
  }

  closeVideo() {
    const video = this.videoPlayer.nativeElement;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset video to start
    this.isFullScreen = false; // Hide video
  }
  handleFullscreenChange() {
    if (!document.fullscreenElement) {
      // Fullscreen mode has been exited
      this.closeVideo();
    }
  }
  openModal() {
    this.modalService.open(this.videoModal, { size: 'lg', centered: true });
  }
  
}
