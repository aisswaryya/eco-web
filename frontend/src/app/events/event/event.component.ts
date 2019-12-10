import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../models/event';
import { Attendee } from '../models/attendee';
import { AttendeeService } from '../services/attendee.service';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() 
  event : Event = new Event();

  @Input()
  myEmail : String;
  
  attendeeService : AttendeeService;

  constructor(attendeeService: AttendeeService) {

    this.attendeeService = attendeeService;
    console.log(">>"+this.myEmail);
  }

  ngOnInit() {
    console.log(this.event);
  }
  
  addAttendee(e : Event){

    console.log(e);

    let attendee = new Attendee(e._id,"FLoyed","floyedpinto08@gmail.com");

    


    let newAttendee$: Observable<Attendee> = this.attendeeService.createAttendee(attendee);
    newAttendee$.subscribe(newAttendee => {
      console.log(newAttendee);
    });

  }



}
