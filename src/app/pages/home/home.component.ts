import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor() { }

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
