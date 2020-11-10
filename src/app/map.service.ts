import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {google} from '@google/maps'
interface Location {
  latitude: string;
  longitude: string;
  country_name: string;
  region: string;
  city: string;
  country_population:string;
  currency_name:string;
}
@Injectable({
  providedIn: "root",
})
export class ServiceMap {
  constructor(private http: HttpClient) {}

  getLocation() {
    return this.http.get<Location>("https://ipapi.co/json/");
  }
}