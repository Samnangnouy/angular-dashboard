import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleLineIconComponent } from './components/simple-line-icon/simple-line-icon.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleLineIconComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleLineIconRoutingModule { }
