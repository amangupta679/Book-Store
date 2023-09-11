import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slides = [
    { imageUrl: 'https://via.placeholder.com/800x400?text=Slide+1' },
    { imageUrl: 'https://via.placeholder.com/800x400?text=Slide+2' },
    { imageUrl: 'https://via.placeholder.com/800x400?text=Slide+3' },
    { imageUrl: 'https://via.placeholder.com/800x400?text=Slide+4' }
    
  ];

  currentIndex = 0;


  constructor() { }

  ngOnInit(): void {
    this.startAutoplay();
  }

  startAutoplay() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }


nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

}
