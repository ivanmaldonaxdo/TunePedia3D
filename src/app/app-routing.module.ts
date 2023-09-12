import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InstrumentDetailComponent } from './pages/instrument-detail/instrument-detail.component';
import { InstrumentosComponent } from './pages/instrumentos/instrumentos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'instruments',
    component: InstrumentosComponent,
  },
  {
    path: 'instrument',
    component: InstrumentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
