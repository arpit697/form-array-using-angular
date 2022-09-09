import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { MatButtonModule } from '@angular/material/button';
const material = [
  MatButtonModule
]

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    material
  ],
  exports: [
    ButtonsComponent
  ]
})
export class ButtonsModule { }
