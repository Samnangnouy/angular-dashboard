import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarRoutingModule } from './avatar-routing.module';
import { AvatarComponent } from './components/avatar/avatar.component';


@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    AvatarRoutingModule
  ]
})
export class AvatarModule { }
