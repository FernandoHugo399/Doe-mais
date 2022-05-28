import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoarAgoraIndividualRoutingModule } from './doar-agora-individual-routing.module';
import { DoarAgoraIndividualComponent } from './doar-agora-individual.component';


@NgModule({
  declarations: [
    DoarAgoraIndividualComponent
  ],
  imports: [
    CommonModule,
    DoarAgoraIndividualRoutingModule
  ]
})
export class DoarAgoraIndividualModule { }
