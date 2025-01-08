import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparklineRoutingModule } from './sparkline-routing.module';
import { SparklineComponent } from './components/sparkline/sparkline.component';

@NgModule({
  declarations: [
    SparklineComponent
  ],
  imports: [
    CommonModule,
    SparklineRoutingModule
  ]
})
export class SparklineModule { }
