import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaibaMaisIndividualComponent } from './saiba-mais-individual.component';

const routes: Routes = [{ path: '', component: SaibaMaisIndividualComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaibaMaisIndividualRoutingModule { }
