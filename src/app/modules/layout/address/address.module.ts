import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { DorpDownModule } from '../../shared/modules/dorp-down/dorp-down.module';
import { ButtonsModule } from '../../shared/modules/buttons/buttons.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const material = [

  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule

]
@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    DorpDownModule,
    ButtonsModule,
    ReactiveFormsModule,
    material
  ]
})
export class AddressModule { }
