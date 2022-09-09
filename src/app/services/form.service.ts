import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  form !: FormGroup

  constructor(
    private _fb: FormBuilder
  ) { }

  createForm(){
    this.form = this._fb.group({
      countries : this._fb.array([])
    });
  }

  createCountry(): FormGroup {
    return this._fb.group({
      countryName : [] ,
      states : this._fb.array([])
    });
  }

  createState(): FormGroup {
    return this._fb.group({
      stateName :  [],
      district : this._fb.array([])
    });
  }

  createDistrict():FormGroup {
    return this._fb.group({
      districtName : [], 
      city : this._fb.array([])
    });
  }

  createCity(): FormGroup {
    return this._fb.group({
      cityName: []
    })
  }
}
