import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContateNosComponent } from './contate-nos.component';

const routes: Routes = [{ path: '', component: ContateNosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContateNosRoutingModule { }
