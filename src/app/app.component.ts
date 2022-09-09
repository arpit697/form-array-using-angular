
import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from './services/http-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AddressArray';
  constructor(private _https:HttpRequestsService){}

ngOnInit(): void {
  /* this.getWholeData() */
}
getWholeData(){
  this._https.get('http://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json').subscribe((response:any) =>{
    console.log(response);
  })
}
}
