import { InstitutionsService } from './../../../services/institutions/institutions.service';
import { Component, OnInit } from '@angular/core';
import { Institution } from 'src/app/services/institutions/institutions.model';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss']
})
export class InstitutionsComponent implements OnInit{
  public institutions!: Institution[]

  config: SwiperOptions = {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    breakpoints: {
      380: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 60
      },
      610: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      860: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      980: {
        slidesPerView: 4,
        spaceBetween: 60
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 70
      }
    }
  };

  constructor(private InstitutionsService: InstitutionsService) { }

  ngOnInit(): void {
    this.getAllInstitutions()
  }

  getAllInstitutions(): void {
    this.InstitutionsService.getAllInstitutions()
    .subscribe( res =>  this.institutions = res )
  }
}
