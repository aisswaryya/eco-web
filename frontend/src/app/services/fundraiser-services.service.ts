/**
 * Fundraiser Services
 */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Fundraiser} from '../models/fundraiser';

@Injectable({
  providedIn: 'root'
})
export class FundraiserServicesService {

  baseUrl: string;
  fundraiserResource: string;
  fundraiserResourceUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'v1/eco';
    this.fundraiserResource = 'fundraisers';
    this.fundraiserResourceUrl = `${environment.serverBaseURL}/${this.baseUrl}/${this.fundraiserResource}`;
  }

  /**
   * Function to get all fundraisers
   */
  getFundraisers(): Observable<Array<Fundraiser>> {
    return this.http.get<Array<Fundraiser>>(this.fundraiserResourceUrl);
  }

  /**
   * Function to get all Fundraisers by email id
   * @param emailId
   */
  getFundraisersByEmailId(emailId: string): Observable<Array<Fundraiser>> {
    return this.http.get<Array<Fundraiser>>(`${this.fundraiserResourceUrl}?emailId=${emailId}`);
  }

  /**
   * Function to get a fundraiser by Id
   * @param id
   */
  getFundraiser(id: string): Observable<Fundraiser> {
    return this.http.get<Fundraiser>(`${this.fundraiserResourceUrl}/${id}`);
  }

  /**
   * Function to create a fundraiser.
   * Protected at the backend.
   *
   * @param fundraiser
   * @param accessToken
   */
  createFundraiser(fundraiser: Fundraiser = null, accessToken: string): Observable<Fundraiser> {
    let newFundraiser: Fundraiser;
    newFundraiser = fundraiser ? fundraiser : new Fundraiser(
        'Untitled Fundraiser',
        'NONE',
        false,
        '',
        '',
        '',
        '',
        '',
        0,
        0);
    return this.http.post<Fundraiser>(this.fundraiserResourceUrl, newFundraiser,
        {
          headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
        });
  }

  /**
   * Function to update a fundraiser.
   * Protected at the backend. Send bearer token
   * @param id
   * @param data
   * @param accessToken
   */
  updateFundraiser(id: string, data: Fundraiser, accessToken: string): Observable<Fundraiser> {
    return this.http.put<Fundraiser>(`${this.fundraiserResourceUrl}/${id}`, data, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
    });
  }

  /**
   * Function to delete the fundraiser. Protected at the back end.
   * @param id
   * @param accessToken
   */
  deleteFundraiser(id: string, accessToken: string) {
    return this.http.delete(`${this.fundraiserResourceUrl}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
    });
  }

}
