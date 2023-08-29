import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBaseComponent } from './components/header/header-base/header-base.component';
import { NavBaseComponent } from './components/header/nav-base/nav-base.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBaseComponent,
    NavBaseComponent,
    HomeComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
