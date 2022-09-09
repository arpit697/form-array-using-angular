import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  data !: Array<any> 
  stateData !: Array<any>
  cityData !: Array<any>
  constructor(
    private _https: HttpRequestsService,
    public _fs: FormService
  ) { }
  
  ngOnInit(): void {
    this.getWholeData()
    this._fs.createForm()
    this.createCountryForm()
  }

  getWholeData() {
    this._https.get('http://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json').subscribe((response: any) => {
      this.data = response;
      console.log(this.data);
    });
  }

  country():FormArray{
    return this._fs.form.get('countries') as FormArray
  }
  state(countryInd : number):FormArray{
    return this.country().at(countryInd).get('states') as FormArray
  }
  district(countryInd : number , stateInd :number):FormArray{
    return (<FormArray>this.country().at(countryInd).get('states')).at(stateInd).get('district') as FormArray;
  }
  city(countryInd:number , stateInd : number , districtInd:number):FormArray{
    return (<FormArray>(<FormArray>this.country().at(countryInd).get('states')).at(stateInd).get('district')).at(districtInd).get('city') as FormArray;
  }

  createCountryForm(){
    this.country().push(this._fs.createCountry());
  }

  createStateForm(countryInd : number){
    this.state(countryInd).push(this._fs.createState());
  }

  createDistrictForm(countryInd : number , stateInd :number){
    this.district(countryInd , stateInd).push(this._fs.createDistrict());
  }

  createCityForm(countryInd:number , stateInd : number , districtInd:number){
    this.city(countryInd,stateInd,districtInd).push(this._fs.createCity())
  }

  onCountrySelect(countryData : any){
    this.stateData = countryData.value.states;
    console.log(this.stateData);
  }

  onStateSelect(stateData : any){
    this.cityData = stateData.value.cities;
  }
}
