import { PrincipalComponent } from './principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: '',
   component: PrincipalComponent,
   loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
  },
  {
   path: 'quem-somos',
   component: PrincipalComponent,
   loadChildren: () => import('../pages/quem-somos/quem-somos.module').then(m => m.QuemSomosModule)
  },
  {
   path: 'contate-nos',
   component: PrincipalComponent,
   loadChildren: () => import('../pages/contate-nos/contate-nos.module').then(m => m.ContateNosModule)
  },
  {
   path: 'como-doar',
   component: PrincipalComponent,
   loadChildren: () => import('../pages/como-doar/como-doar.module').then(m => m.ComoDoarModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
