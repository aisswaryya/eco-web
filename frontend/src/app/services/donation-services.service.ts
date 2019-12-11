/**
 * Donation services
 */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  /**
   * Function to get donations
   */
  getDonations(): Observable<Array<Donation>> {
    return this.http.get<Array<Donation>>(this.donationResourceUrl);
  }

  /**
   * Function to get Donations by Email Id
   * @param emailId
   */
  getDonationsByEmailId(emailId: string): Observable<Array<Donation>> {
    return this.http.get<Array<Donation>>(`${this.donationResourceUrl}?emailId=${emailId}`);
  }

  /**
   * Function to get Donations by fundraiser Id
   * @param fundraiserId
   */
  getDonationsByFundraiserId(fundraiserId: string): Observable<Array<Donation>> {
    return this.http.get<Array<Donation>>(`${this.donationResourceUrl}?fundraiserId=${fundraiserId}`);
  }

  /**
   * Function to get individual donation
   * @param id
   */
  getDonation(id: string): Observable<Donation> {
    return this.http.get<Donation>(`${this.donationResourceUrl}/${id}`);
  }

  /**
   * Function to create donation object.
   * Protected at the backend. Hence sending auth token
   */
  createDonation(donation: Donation = null, accessToken: string): Observable<Donation> {
    let newDonation: Donation;
    newDonation = donation ? donation : new Donation(
        '',
        '',
        '',
        0);
    return this.http.post<Donation>(this.donationResourceUrl, newDonation, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)
    });
  }
}
