import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() 
  event : Event = new Event();
  

  constructor() { }

  ngOnInit() {
    console.log(this.event);
  }

}
