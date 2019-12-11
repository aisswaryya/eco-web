import { Component, OnInit } from '@angular/core';
import { CityCoordinates } from "../models/city-coordinates";
import { AirQualityService } from "../services/air-quality.service";
import { CityQualityIdex } from "../models/city-quality-index";

@Component({
  selector: 'app-air-quality-check',
  templateUrl: './air-quality-check.component.html',
  styleUrls: ['./air-quality-check.component.scss']
})
export class AirQualityCheckComponent implements OnInit {

  constructor(private airQualityService:AirQualityService) { }

  citylist: Array<CityCoordinates> = [];
  latitude: number = 42.360081;
  longitude: number = -71.058884;
  cityQualityIndex: CityQualityIdex;
  statsAvailable: boolean = false;

  ngOnInit() {

    this.initializeCitiesOnMap();
    this.clickedInfoMarker("Boston");
  }

    /**
   * the following two are used to close other more info boxes of markers
   */
  infoWindowOpened = null
  previous_info_window = null

  initializeCitiesOnMap() {

    let city1: CityCoordinates = new CityCoordinates("NewYork City", 40.713051, -74.007233);
    let city2: CityCoordinates = new CityCoordinates("Boston", 42.360081, -71.058884);
    let city3: CityCoordinates = new CityCoordinates("New Hampshire", 43.193851, -71.572395);
    let city4: CityCoordinates = new CityCoordinates("Connecticut", 41.603222, -73.087746);

    this.citylist.unshift(city1);
    this.citylist.unshift(city2);
    this.citylist.unshift(city3);
    this.citylist.unshift(city4);
  }
  /**
   * Called whenever the more info button is called
   * Scrolls smoothly the window to the div that is selected
   * @param eventId the id of the div to which the scroll has to go to
   */
  clickedInfoMarker(cityName: string) {
    this.citylist.forEach(city => {
        if(city.cityName === cityName) {
          this.airQualityService.getAQIStats(city.latitude,city.longitude).subscribe((response)=>{
              this.cityQualityIndex = response.data;
              console.log(this.cityQualityIndex);
              this.statsAvailable = true;
          });
        }
    });
  }

  /**
   * setting the current and previous selected windows
   * Used to close the previous marker when a new marker is selected
   * @param infoWindow the InfoWindow object of a marker that is clicked
   */
  select_marker(infoWindow) {
    if (this.previous_info_window == null)
      this.previous_info_window = infoWindow;
    else {
      this.infoWindowOpened = infoWindow;
      this.previous_info_window.close();
    }
    this.previous_info_window = infoWindow;
  }

  /**
   * Closing the previous windows that are stored in the previous_info_window
   */
  close_window() {
    if (this.previous_info_window != null) {
      this.previous_info_window.close();
    }
  }

}
