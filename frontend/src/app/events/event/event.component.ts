import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../models/event';
import { Attendee } from '../models/attendee';
import { AttendeeService } from '../services/attendee.service';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() 
  event : Event = new Event();

  @Input()
  isMyEvents : String;
  
  attendeeService : AttendeeService;
  authService: AuthService

  constructor(attendeeService: AttendeeService, authService: AuthService) {

    this.attendeeService = attendeeService;
    this.authService = authService;
    console.log(">>"+this.isMyEvents);
  }

  ngOnInit() {
    console.log(this.event);
  }
  
  addAttendee(e : Event){

    console.log(e);

    let attendee = new Attendee(e._id,this.event.name
      ,this.authService.userProfile.email,this.event.dateOfEvent);


    let newAttendee$: Observable<Attendee> = this.attendeeService.createAttendee(attendee);
    newAttendee$.subscribe(newAttendee => {
      console.log(newAttendee);
    });

  }



}
