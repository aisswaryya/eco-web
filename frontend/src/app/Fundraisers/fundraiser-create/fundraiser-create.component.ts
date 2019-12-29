/**
 * Component to create fundraisers
 */
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

import {Fundraiser} from '../../models/fundraiser';
import {FundraiserServicesService} from '../../services/fundraiser-services.service';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-fundraiser-create',
  templateUrl: './fundraiser-create.component.html',
  styleUrls: ['./fundraiser-create.component.scss']
})
export class FundraiserCreateComponent implements OnInit {

    fundraiserCategory = ['Birthday Fundraisers',
        'Team Campaign',
        'Community Garden',
        'Composting Program',
        'Earth Day Fundraiser',
        'Other'];

    // empty fundraiser object
  fundraiser = new Fundraiser('',
      '',
      true,
      '',
      '',
      '',
      '',
      '',
      0,
      0);

  constructor(private fundraiserService: FundraiserServicesService,
              private router: Router,
              public authService: AuthService,
              private snackBar: MatSnackBar) {
      console.log(this.authService.userProfile);
  }

      ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  /**
   * Function to save fundraiser.
   * Sending auth token as the API is protected
   * @param form
   */
  saveFundraiser(form: NgForm) {
    if (this.authService.isLoggedIn) {
      form.value.emailId = this.authService.userProfile.email;
      this.fundraiserService.createFundraiser(form.value, this.authService.accessToken).subscribe(data => {
        this.openSnackBar('Fundraiser Created', 'Okay');
        console.log(data);
        this.router.navigate(['/my-fundraiser-detail', data.id]);
      }, error => {
        if (error.status === 401) {
          this.openSnackBar('Not authenticated!! Please login to continue', 'Okay');
        }
        console.log(error);
      });
    } else {
      this.authService.login();
    }
  }



}
