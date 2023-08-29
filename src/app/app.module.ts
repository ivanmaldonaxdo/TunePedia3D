import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBaseComponent } from './components/header/header-base/header-base.component';
import { NavBaseComponent } from './components/header/nav-base/nav-base.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBaseComponent,
    NavBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
