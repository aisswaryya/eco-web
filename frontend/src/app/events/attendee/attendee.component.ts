import { Component, OnInit, Input } from '@angular/core';
import { Attendee } from '../../models/attendee';
import { AttendeeService } from '../../services/attendee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.scss']
})
export class AttendeeComponent implements OnInit {

  /**
   *
   *  The attendee object to be displayed
   * @type {Attendee}
   * @memberof AttendeeComponent
   */
  @Input()
  attendee: Attendee;

  /**
   *Creates an instance of AttendeeComponent.
   * @param {AttendeeService} attendeeService
   * @param {Router} router
   * @memberof AttendeeComponent
   */
  constructor(public attendeeService: AttendeeService, private router: Router,
    public authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit() {}

  /**
   *
   * Called to cancel the current registration
   * @param {Attendee} attendee
   * @memberof AttendeeComponent
   */
  cancelRegistration(attendee: Attendee) {

    console.log(attendee);

    //calling the attendee service
    let removedAttendee$: Observable<Array<Attendee>> = this.attendeeService.deleteAttendeeById(attendee.id, this.authService.accessToken);
    
    removedAttendee$.subscribe(removedEvent => {

      //snackbar to display message
      this.openSnackBar("Cancelled the registration of the event Successfully!","okay");
      //navigating to my attendee list
      this.router.navigate(['/my-event-list']);
    });
  }


  /**
   * Snackbar code
   * @param {string} message
   * @param {string} action
   * @memberof AttendeeComponent
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {//4000 ms
      duration: 4000,
    });
  }

}
