import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Attendee } from '../models/attendee';
import { Event } from '../models/event';


import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
/**
 * Attendee Services
 */
export class AttendeeService {

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
    
    this.attendeeResource = 'v1/eco/attendees';
    this.attendeeResourceURL = `${environment.serverBaseURL}/${this.attendeeResource}`;    

  }

  /**
   * Creates new Attendee.
   *
   * @param  {Attendee} event: Attendee {new Attendee object}
   * @return {Observable<Attendee>} {Observable for saved Attendee object}
   */
  createAttendee(attendee: Attendee = null): Observable<Attendee> {
    console.log(this.attendeeResourceURL);
    return this.http.post<Attendee>(this.attendeeResourceURL, attendee);
  }

  /**
   * Returns all the Attendees based on Event Id.
   *
   * @return {Observable<Array<Attendee>>} {Observable attendee array of single event}
   */
  getAttendeesByEventId(eventId : string): Observable<Array<Attendee>> {
    return this.http.get<Array<Attendee>>(`${this.attendeeResourceURL}/?eventId=${eventId}`);
  }


  /**
   * Returns all the Attendees based on Event Id.
   *
   * @return {Observable<Array<Attendee>>} {Observable attendee array of single event}
   */
  getAttendeesByEmailId(emailId : string): Observable<Array<Attendee>> {
    return this.http.get<Array<Attendee>>(`${this.attendeeResourceURL}/?emailId=${emailId}`);
  }

}
