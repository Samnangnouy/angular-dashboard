import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlertRoutingModule } from './sweet-alert-routing.module';
import { SweetAlertComponent } from './components/sweet-alert/sweet-alert.component';

@NgModule({
  declarations: [
    SweetAlertComponent
  ],
  imports: [
    CommonModule,
    SweetAlertRoutingModule
  ]
})
export class SweetAlertModule { }
