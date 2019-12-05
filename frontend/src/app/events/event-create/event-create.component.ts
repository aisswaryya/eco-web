import { Component, OnInit, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceDirective, GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { GoogleMap } from '@agm/core/services/google-maps-types';

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


  latitude = 42.2929;
  longitude = 32.222;

  constructor(eventService: EventService, private calendar: NgbCalendar) {
    this.eventService = eventService;
  }

  /**
   * The Event model used in two way binding
   */
  eventModel = new Event();

  /**
   * The onSubmit method which is called when submit is clicked in the form
   */
  postData(){

    console.log(this.eventModel.time);

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

          this.eventModel.lat = address.geometry.location.lat();
          this.eventModel.lng = address.geometry.location.lng();

          console.log(this.eventModel);

    }


}

