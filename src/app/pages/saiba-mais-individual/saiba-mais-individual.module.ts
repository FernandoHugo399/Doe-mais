import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaibaMaisIndividualRoutingModule } from './saiba-mais-individual-routing.module';
import { SaibaMaisIndividualComponent } from './saiba-mais-individual.component';


@NgModule({
  declarations: [
    SaibaMaisIndividualComponent
  ],
  imports: [
    CommonModule,
    SaibaMaisIndividualRoutingModule
  ]
})
export class SaibaMaisIndividualModule { }
