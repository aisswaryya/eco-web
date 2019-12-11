import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { AttendeeService } from '../../services/attendee.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Attendee } from '../../models/attendee';
/**
 *
 * Component used for listing all the Attendees for the user
 * @export
 * @class MyAttendeeComponent
 * @implements {OnInit}
 */
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


  /**
   *Creates an instance of MyAttendeeComponent.
   * @param {AttendeeService} attendeeService - the injected service
   * @param {AuthService} authService - the injected service
   * @param {Router} router - the injected service used for routing
   * @memberof MyAttendeeComponent - 
   */
  constructor(public attendeeService: AttendeeService, public authService: AuthService,
    private router: Router) {

  }

  /**
   * Inititalizing the attendees object array
   * @memberof MyAttendeeComponent
   */
  ngOnInit() {

    console.log("Fetching Attendees by created EmailId");

    //Getting all events based on emailId
    let attendeesObs$: Observable<Array<Attendee>> =
      this.attendeeService.getAttendeesByEmailId(this.authService.userProfile.email);
    attendeesObs$.subscribe(attendees => {
      this.attendees = attendees;
    });

  }

}
