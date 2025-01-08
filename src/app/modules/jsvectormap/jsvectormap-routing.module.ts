import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsvectormapComponent } from './components/jsvectormap/jsvectormap.component';

const routes: Routes = [
  {
    path: '',
    component: JsvectormapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsvectormapRoutingModule { }
