import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss']
})
export class InstitutionsComponent {

  config: SwiperOptions = {
    slidesPerView:5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 70

  };
}
