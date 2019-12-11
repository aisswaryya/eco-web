import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../models/event';
import { Attendee } from '../../models/attendee';
import { AttendeeService } from '../../services/attendee.service';
import { EventService } from '../../services/event.service';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { EventStatus } from '../EventStatus';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  /**
   * Router Information
   * @type {Router}
   * @memberof EventComponent
   */
  public get router(): Router {
    return this._router;
  }

  /**
   * @memberof EventComponent
   */
  public set router(value: Router) {
    this._router = value;
  }

  /**
   *
   * Input from the list screen to display
   * @type {Event}
   * @memberof EventComponent
   */
  @Input()
  event: Event = new Event();

  /**
   *
   * variable to check if my event needs to be displayed
   * @type {String}
   * @memberof EventComponent
   */
  @Input()
  isMyEvents: String;

/**
 *Creates an instance of EventComponent.
 * @param {AttendeeService} attendeeService
 * @param {AuthService} authService
 * @param {EventService} eventService
 * @param {Router} _router
 * @param {MatSnackBar} snackBar
 * @memberof EventComponent
 */
constructor(private attendeeService: AttendeeService, private authService: AuthService,
    private eventService: EventService, private _router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {}

  addAttendee(e: Event) {

    console.log(e);

    //check if the user is logged in
    if (this.authService.isLoggedIn) {

      //creating a new event based on the parameters entered
      let attendee = new Attendee(e._id, this.event.name, this.authService.userProfile.email, this.event.dateOfEvent);

      //calling the event service to create the event
      let newAttendee$: Observable<Attendee> = this.attendeeService.createAttendee(attendee, this.authService.accessToken);
      newAttendee$.subscribe(newAttendee => {
        
        this.openSnackBar("Registered to " + this.event.name + " successfully.", "okay");
           
        //hiding button
        this.event.amIAttending = true;

      });

    } else {
      //force login the user
      this.authService.login();
    }
  }

/**
 *
 * Modifying the status of the event to cancelled and also deleting the attendees
 * @param {Event} e
 * @memberof EventComponent
 */
cancelEvent(e: Event) {

    //setting the status to cancelled
    e.status = EventStatus.CANCELLED;

    //modifying the event object
    let modifiedEvent$: Observable<Event> = this.eventService.modifyEvent(e, this.authService.accessToken);
    
    modifiedEvent$.subscribe(newEvent => {

      //navigate to the list screen
      this.router.navigate(['/my-event-list']);
    });
  }

  /**
   *
   * Snack bar code
   * @param {string} message
   * @param {string} action
   * @memberof EventComponent
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {//4000 ms
      duration: 4000,
    });
  }



}
