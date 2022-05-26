import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituicoesRoutingModule } from './instituicoes-routing.module';
import { InstituicoesComponent } from './instituicoes.component';


@NgModule({
  declarations: [
    InstituicoesComponent
  ],
  imports: [
    CommonModule,
    InstituicoesRoutingModule
  ]
})
export class InstituicoesModule { }
