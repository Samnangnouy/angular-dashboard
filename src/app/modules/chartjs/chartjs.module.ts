import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsRoutingModule } from './chartjs-routing.module';
import { ChartjsComponent } from './components/chartjs/chartjs.component';

@NgModule({
  declarations: [
    ChartjsComponent
  ],
  imports: [
    CommonModule,
    ChartjsRoutingModule
  ]
})
export class ChartjsModule { }
