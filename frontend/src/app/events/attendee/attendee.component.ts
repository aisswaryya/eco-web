import { Component, OnInit, Input } from '@angular/core';
import { Attendee } from '../models/attendee';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.scss']
})
export class AttendeeComponent implements OnInit {

  @Input() 
  attendee : Attendee;

  constructor() { }

  ngOnInit() {
  }

}
