import { MatIconModule } from '@angular/material/icon';
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
    ContateNosRoutingModule,
    MatIconModule
  ]
})
export class ContateNosModule { }
