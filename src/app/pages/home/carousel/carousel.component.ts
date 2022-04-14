import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      bulletClass: `swiper-pagination-bullet`,
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    }
  };

}
