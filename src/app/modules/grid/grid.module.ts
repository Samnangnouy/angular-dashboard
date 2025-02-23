import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './components/grid/grid.component';


@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule
  ]
})
export class GridModule { }
