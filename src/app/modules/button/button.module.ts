import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonRoutingModule
  ]
})
export class ButtonModule { }
