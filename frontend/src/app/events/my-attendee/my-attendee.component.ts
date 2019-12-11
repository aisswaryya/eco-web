import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { AttendeeService } from '../services/attendee.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Attendee } from '../models/attendee';

@Component({
  selector: 'app-my-attendee',
  templateUrl: './my-attendee.component.html',
  styleUrls: ['./my-attendee.component.scss']
})
export class MyAttendeeComponent implements OnInit {

  /**
   * Holds all the events that the user am attending
   */
  attendees: Array<Attendee>;



  constructor(public attendeeService: AttendeeService, public authService: AuthService,
    private router: Router) {

  }

  ngOnInit() {

    console.log("Fetching Attendees by created EmailId");

    console.log(this.attendeeService);

    //Getting all events based on emailId
    let attendeesObs$: Observable<Array<Attendee>> =
      this.attendeeService.getAttendeesByEmailId(this.authService.userProfile.email);
    attendeesObs$.subscribe(attendees => {
      this.attendees = attendees;
    });

  }

}
