/**
 * Component to show all fundraisers created by a user
 */
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {FundraiserServicesService} from '../../services/fundraiser-services.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-my-fundraiser-list',
  templateUrl: './my-fundraiser-list.component.html',
  styleUrls: ['./my-fundraiser-list.component.scss']
})
export class MyFundraiserListComponent implements OnInit {

  fundraisers: any = [];

  constructor(private fundraiserService: FundraiserServicesService,
              public authService: AuthService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getFundraisersByEmail();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /**
   * Function to get all fundraisers by email
   */
  getFundraisersByEmail() {
    this.fundraiserService.getFundraisersByEmailId(this.authService.userProfile.email).subscribe(data => {
      this.fundraisers = data;
    }, error => {
      console.log(error);
      this.openSnackBar('Error fetching Fundraisers', 'Okay');
    });
  }

}
