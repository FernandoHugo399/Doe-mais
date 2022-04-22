import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContateNosRoutingModule } from './contate-nos-routing.module';
import { ContateNosComponent } from './contate-nos.component';


@NgModule({
  declarations: [
    ContateNosComponent
  ],
  imports: [
    CommonModule,
    ContateNosRoutingModule
  ]
})
export class ContateNosModule { }
