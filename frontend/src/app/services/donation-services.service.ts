import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Donation} from '../models/donation';

@Injectable({
  providedIn: 'root'
})
export class DonationServicesService {

  baseUrl: string;
  donationResource: string;
  donationResourceUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'v1/eco';
    this.donationResource = 'donations';
    this.donationResourceUrl = `${environment.serverBaseURL}/${this.baseUrl}/${this.donationResource}`;
  }

  getDonations(): Observable<Array<Donation>> {
    return this.http.get<Array<Donation>>(this.donationResourceUrl);
  }

  getDonationsByEmailId(emailId: string): Observable<Array<Donation>>{
    return this.http.get<Array<Donation>>(`${this.donationResourceUrl}?emailId=${emailId}`);
  }

  getDonationsByFundraiserId(fundraiserId: string): Observable<Array<Donation>>{
    return this.http.get<Array<Donation>>(`${this.donationResourceUrl}?fundraiserId=${fundraiserId}`);
  }

  getDonation(id: string): Observable<Donation> {
    return this.http.get<Donation>(`${this.donationResourceUrl}/${id}`);
  }

  createDonation(donation: Donation = null): Observable<Donation> {
    let newDonation: Donation;
    newDonation = donation ? donation : new Donation(
        '',
        '',
        '',
        0);
    return this.http.post<Donation>(this.donationResourceUrl, newDonation);
  }
}
