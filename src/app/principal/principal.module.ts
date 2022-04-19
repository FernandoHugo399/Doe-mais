import { MenuComponent } from './../components/menu/menu.component';
import { FooterComponent } from './../components/footer/footer.component';
import { NgModule } from '@angular/core';
import { PrincipalRoutingModule } from './principal-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { PrincipalComponent } from './principal.component';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    PrincipalComponent
  ],
  imports: [
    PrincipalRoutingModule,
    MatIconModule
  ],
  providers: []
})
export class PrincipalModule { }
