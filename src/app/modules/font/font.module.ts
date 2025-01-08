import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontRoutingModule } from './font-routing.module';
import { FontComponent } from './components/font/font.component';

@NgModule({
  declarations: [
    FontComponent
  ],
  imports: [
    CommonModule,
    FontRoutingModule
  ]
})
export class FontModule { }
