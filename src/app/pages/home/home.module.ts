import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CarouselComponent } from './carousel/carousel.component';
import { CallComponent } from './call/call.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CallComponent,
    InstitutionsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxUsefulSwiperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class HomeModule { }
