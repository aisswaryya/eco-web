import { Component, OnInit, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Event } from '../../models/event';
import { EventService } from '../../services/event.service';
import { Observable } from 'rxjs';
import { NgbDateStruct, NgbCalendar, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceDirective, GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { EventStatus } from '../EventStatus';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  /**
   *
   * @type {FormControl} object used to store the information of the form
   * @memberof EventCreateComponent
   */
  public formControl: FormControl = new FormControl(null);


  constructor(private eventService: EventService, private config: NgbDatepickerConfig
    , private authService: AuthService, private router: Router
    , private snackBar: MatSnackBar) {

    //disabling previous dates than today in datepicker
    const currentDate = new Date();

    //condiguring the date picker
    config.minDate = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1, day: currentDate.getDate() };
    config.maxDate = { year: 2099, month: 12, day: 31 };

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
  postData() {

    //setting the createor email by the authservice
    this.eventModel.creatorEmailId = this.authService.userProfile.email;

    //setting the createor host name by the authservice
    this.eventModel.hostName = this.authService.userProfile.name;

    //setting the status as UPCOMING by default
    this.eventModel.status = EventStatus.UPCOMING;

    console.log(this.authService.userProfile);

    //calling the eventservice to create the new event
    let newEvent$: Observable<Event> = this.eventService.createEvent(this.eventModel, this.authService.accessToken);
    newEvent$.subscribe(newEvent => {
      console.log(newEvent);

      //snackbar for displaying success message
      this.openSnackBar("The Event " + this.eventModel.name + " Registered successfully!", "okay");

      //navigate to list all events
      this.router.navigate(['/event-list']);
    });
  }

  ngOnInit() {
  }


  /**
   * The Google map component that calls the handleAddressChange whenever a new address is selected
   */
  @ViewChild("venue", { static: false }) placesRef: GooglePlaceDirective;

  public handleAddressChange(address: Address) {

    //Setting the value of venue from the address that is provided by google maps
    this.eventModel.venue = address.formatted_address;

    //Setting the value of lat and lng from the address that is provided by google maps
    this.eventModel.lat = address.geometry.location.lat();
    this.eventModel.lng = address.geometry.location.lng();

    console.log(this.eventModel);

  }

  /**
   * Snackbar code to call
   * @param {string} message
   * @param {string} action
   * @memberof EventCreateComponent
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}

