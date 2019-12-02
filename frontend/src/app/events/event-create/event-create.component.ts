import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  eventService : EventService;

  constructor(eventService: EventService, private calendar: NgbCalendar) {
    this.eventService = eventService;
  }

  // eventModel = new Event("","","","","","","","","",null,0,false,false,"");
  eventModel = new Event();

  log(x){
    console.log(x);
  }

  postData(){

    console.log(this.eventModel.time);

    let newEvent$: Observable<Event> = this.eventService.createEvent(this.eventModel);
    newEvent$.subscribe(newEvent => {
      console.log(newEvent);
    });
  }

  ngOnInit() {
    console.log(this.eventService);
  }

}


