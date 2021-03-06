
import {google} from '@google/maps'

import { Component } from '@angular/core';
import {ServiceMap} from './map.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  latitude = "";
  longitude = "";
  country = "";
  region = "";
  city = "";
  
  
  location: Object;

  constructor(private map:ServiceMap) {}


  ngOnInit() {
    this.map.getLocation().subscribe((data) => {
      console.log(data);
      this.latitude = data.latitude;
      this.longitude = data.longitude;
      this.country = data.country_name;
      this.region = data.region;
      this.city = data.city;
      
    
    });
  }
}