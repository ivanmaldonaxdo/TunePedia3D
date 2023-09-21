import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBtnComponent } from './components/buttons/nav-btn/nav-btn.component';
import { ContentComponent } from './components/content/content.component';
import { NavBaseComponent } from './components/header/nav-base/nav-base.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HomeComponent } from './pages/home/home.component';
import { InstrumentDetailComponent } from './pages/instrument-detail/instrument-detail.component';
import { InstrumentosComponent } from './pages/instrumentos/instrumentos.component';
import { InstrumentMvComponent } from './pages/instrument-mv/instrument-mv.component';
import { HeaderBaseComponent } from './components/header/header-base/header-base.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBaseComponent,
    NavBaseComponent,
    HomeComponent,
    ContentComponent,
    InstrumentosComponent,
    NavBtnComponent,
    InstrumentDetailComponent,
    InstrumentMvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
