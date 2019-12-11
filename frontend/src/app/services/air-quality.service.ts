import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {
  private airQualityIndexURl: string;
  private baseURl: string;

  constructor(private http: HttpClient) { 
    this.baseURl = "http://api.airpollutionapi.com/1.0/aqi?APPID=jf34l0t9eeh8slglq2j5kta24q&";
  }

  getAQIStats(latitude: number, longitude: number): Observable<any> {
    let query:string = "lat="+latitude+"&"+"lon="+longitude; 
    this.airQualityIndexURl = this.baseURl + query;
    return this.http.get<any>(this.airQualityIndexURl);
  }
}