import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SparklineComponent } from './components/sparkline/sparkline.component';

const routes: Routes = [
  {
    path: '',
    component: SparklineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SparklineRoutingModule { }
