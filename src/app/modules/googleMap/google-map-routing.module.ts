import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapComponent } from './components/google-map/google-map.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleMapRoutingModule { }
