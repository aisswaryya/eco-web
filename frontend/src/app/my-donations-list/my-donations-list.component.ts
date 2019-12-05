import { Component, OnInit } from '@angular/core';
import {DonationServicesService} from '../services/donation-services.service';

@Component({
  selector: 'app-my-donations-list',
  templateUrl: './my-donations-list.component.html',
  styleUrls: ['./my-donations-list.component.scss']
})
export class MyDonationsListComponent implements OnInit {

  donations: any =[];
  totalDonation = 0;

  constructor( private donationService: DonationServicesService) { }

  ngOnInit() {
    this.getDonationsByEmail();
  }

  getDonationsByEmail() {
    this.donationService.getDonationsByEmailId('thushu22@gmail.com').subscribe(data => {
      this.donations = data;
    }, error => {
      console.log(error);
      alert('Error Fetching donations');
    });
  }

  getTotalDonationAmount() {
    for ( const donation of this.donations) {
      this.totalDonation += donation.amount;
    }
    return this.totalDonation;
  }

}
