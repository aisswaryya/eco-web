import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Event } from '../models/event';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { EventStatus } from '../events/EventStatus';

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
    this.eventResource = 'v1/eco/events';
    this.eventResourceURL = `${environment.serverBaseURL}/${this.eventResource}`;   
  }

  //--------------------------------------------------------------------------
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
  createEvent(event: Event = null, accessToken: string): Observable<Event> {
    return this.http.post<Event>(this.eventResourceURL, event,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
      });
  }

  /**
   * Modifies new Event.
   *
   * @param  {Event} event: Event { Event object to be modified}
   * @return {Observable<Event>} {Observable for saved event object}
   */
  modifyEvent(event: Event = null, accessToken: string): Observable<Event> {
    return this.http.put<Event>(this.eventResourceURL+"/"+event._id, event,
    {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
    });
  }

  //--------------------------------------------------------------------------

  
  /**
   * Returns all the Events based on attendee Email Id.
   *
   * @return {Observable<Array<Attendee>>} {Observable attendee array of single event}
   */
  getEventByCreatorEmailId(emailId : string): Observable<Array<Event>> {
    return this.http.get<Array<Event>>(`${this.eventResourceURL}/?creatorEmailId=${emailId}`);
  }

  /**
   * 
   * @param event : Removes this particular Event object
   */
  completeEvent(event : Event) : Observable<Event> {

    event.status = EventStatus.COMPLETED;

    return this.http.put<Event>(this.eventResourceURL+"/"+event._id,event);
  }

  /**
   * 
   * @param event : Edits this particular Event object
   */
  editEvent(event : Event) : Observable<Event> {

    return this.http.put<Event>(this.eventResourceURL+"/"+event._id , event);
  }
}
