import { NetworkInterceptor } from './../components/loading/network.interceptor';
import { LoadingComponent } from './../components/loading/loading.component';
import { MenuComponent } from './../components/menu/menu.component';
import { FooterComponent } from './../components/footer/footer.component';
import { NgModule } from '@angular/core';
import { PrincipalRoutingModule } from './principal-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { PrincipalComponent } from './principal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    LoadingComponent,
    MenuComponent,
    FooterComponent,
    PrincipalComponent
  ],
  imports: [
    HttpClientModule,
    PrincipalRoutingModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true
  }]
})
export class PrincipalModule { }
