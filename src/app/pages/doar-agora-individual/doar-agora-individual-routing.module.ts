import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoarAgoraIndividualComponent } from './doar-agora-individual.component';

const routes: Routes = [{ path: '', component: DoarAgoraIndividualComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoarAgoraIndividualRoutingModule { }
