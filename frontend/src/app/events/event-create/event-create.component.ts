import { Component, OnInit, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import {NgbDateStruct, NgbCalendar, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceDirective, GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  /**
   * Event service instance
   */
  eventService : EventService;

  public formControl: FormControl = new FormControl(null);
  

  constructor(eventService: EventService, config: NgbDatepickerConfig
          ,public authService: AuthService) {

    //Injected Event service
    this.eventService = eventService;

    //disabling previous dates than today in datepicker
    const currentDate = new Date();

    config.minDate = {year:currentDate.getFullYear(), month:currentDate.getMonth()+1, day: currentDate.getDate()};
    config.maxDate = {year: 2099, month: 12, day: 31};

    //hiding other dates
    config.outsideDays = 'hidden';
  }

  /**
   * The Event model used in two way binding
   */
  eventModel = new Event();

  /**
   * The onSubmit method which is called when submit is clicked in the form
   */
  postData(){

    this.eventModel.creatorEmailId = this.authService.userProfile.email;

    this.eventModel.hostName = this.authService.userProfile.name;

    console.log(this.authService.userProfile);

    let newEvent$: Observable<Event> = this.eventService.createEvent(this.eventModel);
    newEvent$.subscribe(newEvent => {
      console.log(newEvent);
    });
  }

  ngOnInit() {
    console.log(this.eventService);
  }


  /**
   * The Google map component that calls the handleAddressChange whenever a new address is selected
   */
  @ViewChild("venue",{static: false}) placesRef : GooglePlaceDirective;
    
        public handleAddressChange(address: Address) {

          //Setting the value of venue from the address that is provided by google maps
          this.eventModel.venue = address.formatted_address;

          //Setting the value of lat and lng from the address that is provided by google maps
          this.eventModel.lat = address.geometry.location.lat();
          this.eventModel.lng = address.geometry.location.lng();

          console.log(this.eventModel);

    }


}

