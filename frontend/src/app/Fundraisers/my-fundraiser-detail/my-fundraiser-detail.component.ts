/**
 * Component to display details of personal fundraisers
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

import {Fundraiser} from '../../models/fundraiser';
import {FundraiserServicesService} from '../../services/fundraiser-services.service';
import {DonationServicesService} from '../../services/donation-services.service';
import {AuthService} from '../../auth/auth.service';
import { MessageBoxButton} from '../../helpers/shared/message-box';

@Component({
  selector: 'app-my-fundraiser-detail',
  templateUrl: './my-fundraiser-detail.component.html',
  styleUrls: ['./my-fundraiser-detail.component.scss']
})
export class MyFundraiserDetailComponent implements OnInit {
  fundraiserId: string;
  fundraiser: Fundraiser;
  donations: any = [];

  // alertBox components
  title;
  message;
  information;
  button;
  style;
  // tslint:disable-next-line:variable-name
  allow_outside_click;
  width;
  buttons = [
    {value: MessageBoxButton.OkCancel, display: 'Ok/Cancel'},
  ];

  constructor(private route: ActivatedRoute,
              private fundraiserService: FundraiserServicesService,
              private donationService: DonationServicesService,
              private router: Router,
              public authService: AuthService,
              private snackBar: MatSnackBar) {
    this.fundraiserId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getFundraiser();
    this.getDonationsByFundraiserId();
  }

  /**
   * get fundraiser object by Id
   */
  getFundraiser() {
    this.fundraiserService.getFundraiser(this.fundraiserId).subscribe(data => {
      this.fundraiser = data;
    }, error => {
      console.log(error);
      alert('Failed to get fundraiser with id:' + this.fundraiserId);
    });
  }

  /**
   * Get all donations by fundraiser
   */
  getDonationsByFundraiserId() {
    this.donationService.getDonationsByFundraiserId(this.fundraiserId).subscribe(data => {
      this.donations = data;
    }, error => {
      console.log(error);
      alert('Error fetching Donations');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /**
   * Function to delete fundraiser. API is protected
   * Hence sending bearer token
   */
  deleteFundraiser() {
    this.fundraiserService.deleteFundraiser(this.fundraiserId, this.authService.accessToken).subscribe(data => {
      console.log(data);
      this.openSnackBar('Fundraiser Deleted', 'Okay');
      this.router.navigate(['/my-fundraisers-list']);
    }, error => {
      console.log(error);
    });
  }

}

