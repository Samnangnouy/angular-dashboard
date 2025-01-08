import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetRoutingModule } from './widget-routing.module';
import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
  declarations: [
    WidgetComponent
  ],
  imports: [
    CommonModule,
    WidgetRoutingModule
  ]
})
export class WidgetModule { }
