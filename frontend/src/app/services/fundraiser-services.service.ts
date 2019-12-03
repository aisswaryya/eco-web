import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  createFundraiser(fundraiser: Fundraiser = null): Observable<Fundraiser> {
    let newFundraiser: Fundraiser;
    newFundraiser = fundraiser ? fundraiser : new Fundraiser(
        'Untitled Fundraiser',
        'NONE',
        false,
        '',
        '',
        '',
        0,
        0);
    return this.http.post<Fundraiser>(this.fundraiserResourceUrl, newFundraiser);
  }

  updateFundraiser(id: string, data: Fundraiser): Observable<Fundraiser> {
    return this.http.put<Fundraiser>(`${this.fundraiserResourceUrl}/${id}`, data);
  }

  deleteFundraiser(id: string) {
    return this.http.delete(`${this.fundraiserResourceUrl}/${id}`);
  }

}
