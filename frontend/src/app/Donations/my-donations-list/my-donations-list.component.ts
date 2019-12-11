/**
 * Components to display personal donation list
 */
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {DonationServicesService} from '../../services/donation-services.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-my-donations-list',
  templateUrl: './my-donations-list.component.html',
  styleUrls: ['./my-donations-list.component.scss']
})
export class MyDonationsListComponent implements OnInit {

  donations: any = [];

  constructor( private donationService: DonationServicesService,
               public authService: AuthService,
               private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getDonationsByEmail();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // Get donation by sending emailId of user as query param
  getDonationsByEmail() {
    this.donationService.getDonationsByEmailId(this.authService.userProfile.email).subscribe(data => {
      this.donations = data;
    }, error => {
      console.log(error);
      this.openSnackBar('Error Fetching donations', 'Okay');
    });
  }

}
