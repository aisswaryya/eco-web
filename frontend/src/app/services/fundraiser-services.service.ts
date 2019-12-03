import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

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

getFundraisers(): Observable<Array<Fun>>
}
