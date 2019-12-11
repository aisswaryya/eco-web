import { Component, OnInit, Input } from '@angular/core';
import { Attendee } from '../../models/attendee';
import { AttendeeService } from '../services/attendee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.scss']
})
export class AttendeeComponent implements OnInit {

  @Input() 
  attendee : Attendee;

  constructor(public attendeeService: AttendeeService,private router: Router) { }

  ngOnInit() {
    
  }

  cancelRegistration(attendee : Attendee){

    console.log(attendee);

    let removedAttendee$: Observable<Array<Attendee>> = this.attendeeService.deleteAttendeeById(attendee.id);
    removedAttendee$.subscribe(removedEvent => {
      console.log(removedEvent);
      this.router.navigate(['/my-event-list']);

    });

  }

}
