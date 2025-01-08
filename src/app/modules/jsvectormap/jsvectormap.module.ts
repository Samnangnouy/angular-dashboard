import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsvectormapRoutingModule } from './jsvectormap-routing.module';
import { JsvectormapComponent } from './components/jsvectormap/jsvectormap.component';


@NgModule({
  declarations: [
    JsvectormapComponent
  ],
  imports: [
    CommonModule,
    JsvectormapRoutingModule
  ]
})
export class JsvectormapModule { }
