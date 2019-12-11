import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Attendee } from '../models/attendee';

import { environment } from '../../environments/environment';
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
   *Creates an instance of AttendeeService.Constructor setting the values of the URLs
   * @param {HttpClient} http
   * @memberof AttendeeService
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
  createAttendee(attendee: Attendee = null, accessToken: string): Observable<Attendee> {
    return this.http.post<Attendee>(this.attendeeResourceURL, attendee,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
      });
  }

  /**
   * Returns all the Attendees based on Event Id.
   *
   * @return {Observable<Array<Attendee>>} {Observable attendee array of single event}
   */
  getAttendeesByEventId(eventId: string): Observable<Array<Attendee>> {
    return this.http.get<Array<Attendee>>(`${this.attendeeResourceURL}/?eventId=${eventId}`);
  }

  /**
   * Returns all the Attendees based on Event Id.
   *
   * @return {Observable<Array<Attendee>>} {Observable attendee array of single event}
   */
  getAttendeesByEmailId(emailId: string): Observable<Array<Attendee>> {
    return this.http.get<Array<Attendee>>(`${this.attendeeResourceURL}/?emailId=${emailId}`);
  }

  /**
   * Delete the Attendees based on attendee Id.
   *
   * @return {Observable<Array<Attendee>>} {Observable attendee array of single attendee}
   */
  deleteAttendeeById(id: string, accessToken: string): Observable<Array<Attendee>> {
    return this.http.delete<Array<Attendee>>(`${this.attendeeResourceURL}/${id}`,
    {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
    });
  }

}
