import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './drop-down.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const material = [
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  declarations: [
    DropDownComponent
  ],
  imports: [
    CommonModule,
    material
  ],
  exports:[DropDownComponent]
})
export class DorpDownModule { }
