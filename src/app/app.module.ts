import { LoadingComponent } from './components/loading/loading.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page404Component } from './pages/page404/page404.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NetworkInterceptor } from './components/loading/network.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  /* providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true
  }], */
  bootstrap: [AppComponent]
})
export class AppModule { }
