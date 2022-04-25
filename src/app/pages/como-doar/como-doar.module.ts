import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComoDoarRoutingModule } from './como-doar-routing.module';
import { ComoDoarComponent } from './como-doar.component';


@NgModule({
  declarations: [
    ComoDoarComponent
  ],
  imports: [
    CommonModule,
    ComoDoarRoutingModule
  ]
})
export class ComoDoarModule { }
