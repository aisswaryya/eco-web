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

  getFundraisers(): Observable<Array<Fundraiser>> {
    return this.http.get<Array<Fundraiser>>(this.fundraiserResourceUrl);
  }

  getFundraisersByEmailId(emailId: string): Observable<Array<Fundraiser>>{
    return this.http.get<Array<Fundraiser>>(`${this.fundraiserResourceUrl}?emailId=${emailId}`);
  }

  getFundraiser(id: string): Observable<Fundraiser> {
    return this.http.get<Fundraiser>(`${this.fundraiserResourceUrl}/${id}`);
  }

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

  updateFundraiser(id: string, data: Fundraiser, accessToken: string): Observable<Fundraiser> {
    return this.http.put<Fundraiser>(`${this.fundraiserResourceUrl}/${id}`, data, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
    });
  }

  deleteFundraiser(id: string, accessToken: string) {
    return this.http.delete(`${this.fundraiserResourceUrl}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
    });
  }

}
