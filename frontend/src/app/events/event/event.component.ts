import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../models/event';
import { Attendee } from '../../models/attendee';
import { AttendeeService } from '../services/attendee.service';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { EventStatus } from '../EventStatus';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  public get router(): Router {
    return this._router;
  }
  public set router(value: Router) {
    this._router = value;
  }

  @Input() 
  event : Event = new Event();

  @Input()
  isMyEvents : String;
  
  attendeeService : AttendeeService;
  authService: AuthService

  constructor(attendeeService: AttendeeService, authService: AuthService,
    public eventService: EventService, private _router: Router) {

    this.attendeeService = attendeeService;
    this.authService = authService;
    console.log(">>"+this.isMyEvents);
  }

  ngOnInit() {
    console.log(this.event);
  }
  
  addAttendee(e : Event){

    console.log(e);

    if(this.authService.isLoggedIn) {
      
      let attendee = new Attendee(e._id,this.event.name,this.authService.userProfile.email,this.event.dateOfEvent);

      let newAttendee$: Observable<Attendee> = this.attendeeService.createAttendee(attendee);
      newAttendee$.subscribe(newAttendee => {
        console.log(newAttendee);
        this.openSnackBar("Registered to "+ this.event.name +" successfully.", "okay");
      });

    } 
    else {
      this.authService.login();
    }
  }


  cancelEvent(e : Event){


    e.status = EventStatus.CANCELLED;

    console.log(e);

    let modifiedEvent$: Observable<Event> = this.eventService.modifyEvent(e);
    modifiedEvent$.subscribe(newEvent => {
      console.log(newEvent);
      this.router.navigate(['/my-event-list']);

    });

  }



}
