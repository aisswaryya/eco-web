import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Event } from '../models/event';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
/**
 * Event Services
 */
export class EventService {

  /**
   * Event resource
   */
  eventResource: string;

  /**
   * Event resource along with the url
   */
  eventResourceURL: string;


  /**
   * Attendee resource
   */
  attendeeResource: string;

  /**
   * Event resource along with the url
   */
  attendeeResourceURL: string;

  /**
   * Constructor setting the values of the URLs
   */
  constructor(private http: HttpClient) {
    
    this.eventResource = 'events';
    this.eventResourceURL = `${environment.serverBaseURL}/${this.eventResource}`;

    this.attendeeResource = 'attendees';
    this.attendeeResourceURL = `${environment.serverBaseURL}/${this.attendeeResource}`;    

  }

  /**
   * Returns all Events.
   *
   * @return {Observable<Array<Event>>} {Observable event array of events}
   */
  getEvents(): Observable<Array<Event>> {
    return this.http.get<Array<Event>>(this.eventResourceURL);
  }

  /**
   * Returns the Event based on Id.
   *
   * @return {Observable<Array<Event>>} {Observable event array of single event}
   */
  getEventById(id : Number): Observable<Array<Event>> {
    return this.http.get<Array<Event>>(`${this.eventResourceURL}/${id}`);
  }

  /**
   * Creates new Event.
   *
   * @param  {Event} event: Event {new Event object}
   * @return {Observable<Event>} {Observable for saved event object}
   */
  createEvent(event: Event = null): Observable<Event> {
    console.log(this.eventResourceURL);
    return this.http.post<Event>(this.eventResourceURL, event);
  }

  /**
   * 
   * @param event : Removes this particular Event object
   */
  completeEvent(event : Event) : Observable<Event> {

    console.log(this.eventResourceURL+"/"+event.id);

    event.status = EventStatus.COMPLETED;

    return this.http.put<Event>(this.eventResourceURL+"/"+event.id,event);
  }

  /**
   * 
   * @param event : Edits this particular Event object
   */
  editEvent(event : Event) : Observable<Event> {

    console.log(this.eventResourceURL+"/"+event.id);

    return this.http.put<Event>(this.eventResourceURL+"/"+event.id , event);
  }
}
