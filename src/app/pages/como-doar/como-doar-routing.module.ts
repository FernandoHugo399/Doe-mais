import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComoDoarComponent } from './como-doar.component';

const routes: Routes = [{ path: '', component: ComoDoarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComoDoarRoutingModule { }
