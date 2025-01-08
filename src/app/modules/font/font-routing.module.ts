import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontComponent } from './components/font/font.component';

const routes: Routes = [
  {
    path: '',
    component: FontComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FontRoutingModule { }
