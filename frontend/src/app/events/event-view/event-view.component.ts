import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import { Event } from '../models/event'
 
@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {

  events: Array<Event>;
  eventService: EventService;

  latitude = 42.2929;
  longitude = 32.222;

  constructor(eventService: EventService) { 
    this.eventService = eventService;

    let eventsObs$: Observable<Array<Event>> = eventService.getEvents();
    eventsObs$.subscribe(events => {
      this.events = events;
    });

    console.log(this.events);

  }

  ngOnInit() {
    console.log(this.eventService.getEvents());
  }

}
