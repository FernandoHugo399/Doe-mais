import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CarouselComponent } from './carousel/carousel.component';
import { CallComponent } from './call/call.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CallComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxUsefulSwiperModule
  ]
})
export class HomeModule { }
