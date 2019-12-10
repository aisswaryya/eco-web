import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import { Event } from '../models/event'
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {

  @Input() 
  isMyEvents : string;

  /**
   * Holds all the events that need to be displayed on the screen
   */
  events: Array<Event>;

  /**
   * event sevice instance to get event
   */
  eventService: EventService;

  /**
   * the following two are used to close other more info boxes of markers
   */
  infoWindowOpened = null
  previous_info_window = null

  /**
   * Default latitude and longitude position of the map window on load
   */
  latitude = 42.33611930000001;
  longitude = -71.07718549999998;


  constructor(eventService: EventService, public authService: AuthService) {
    //Injecting the event service
    this.eventService = eventService;

    console.log(this.isMyEvents);

    if(this.isMyEvents !== 'undefined'){
    
      //Getting all events based on emailId
      let eventsObs$: Observable<Array<Event>> = 
        eventService.getEventByAttendeeEmailId(authService.userProfile.email);
      eventsObs$.subscribe(events => {
        this.events = events;
      });

    } else {

      //Getting all events
      let eventsObs$: Observable<Array<Event>> = eventService.getEvents();
      eventsObs$.subscribe(events => {
        this.events = events;
      });

    }

    console.log(this.events);
  }

  ngOnInit() {
    console.log(this.eventService.getEvents());
  }

  /**
   * Called whenever the more info button is called
   * Scrolls smoothly the window to the div that is selected
   * @param eventId the id of the div to which the scroll has to go to
   */
  clickedInfoMarker(eventId) {
    //code to scroll smoothly
    document.getElementById(eventId).scrollIntoView(
      { behavior: "smooth", block: "start", inline: "nearest" }
    );
  }

  /**
   * setting the current and previous selected windows
   * Used to close the previous marker when a new marker is selected
   * @param infoWindow the InfoWindow object of a marker that is clicked
   */
  select_marker(infoWindow) {
    if (this.previous_info_window == null)
      this.previous_info_window = infoWindow;
    else {
      this.infoWindowOpened = infoWindow;
      this.previous_info_window.close();
    }
    this.previous_info_window = infoWindow;
  }

  /**
   * Closing the previous windows that are stored in the previous_info_window
   */
  close_window() {
    if (this.previous_info_window != null) {
      this.previous_info_window.close();
    }
  }
}
