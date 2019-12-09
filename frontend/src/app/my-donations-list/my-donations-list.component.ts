import { Component, OnInit } from '@angular/core';
import {DonationServicesService} from '../services/donation-services.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-my-donations-list',
  templateUrl: './my-donations-list.component.html',
  styleUrls: ['./my-donations-list.component.scss']
})
export class MyDonationsListComponent implements OnInit {

  donations: any = [];
  totalDonation = 0;

  constructor( private donationService: DonationServicesService,
               public authService: AuthService ) {
  }

  ngOnInit() {
    this.getDonationsByEmail();
  }

  getDonationsByEmail() {
    this.donationService.getDonationsByEmailId(this.authService.userProfile.email).subscribe(data => {
      this.donations = data;
    }, error => {
      console.log(error);
      alert('Error Fetching donations');
    });
  }

}
