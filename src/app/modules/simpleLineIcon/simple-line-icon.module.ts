import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLineIconRoutingModule } from './simple-line-icon-routing.module';
import { SimpleLineIconComponent } from './components/simple-line-icon/simple-line-icon.component';

@NgModule({
  declarations: [
    SimpleLineIconComponent
  ],
  imports: [
    CommonModule,
    SimpleLineIconRoutingModule
  ]
})
export class SimpleLineIconModule { }
