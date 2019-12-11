/**
 * Component to edit fundraiser
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

import {FundraiserServicesService} from '../../services/fundraiser-services.service';
import {Fundraiser} from '../../models/fundraiser';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-edit-fundraiser',
  templateUrl: './edit-fundraiser.component.html',
  styleUrls: ['./edit-fundraiser.component.scss']
})
export class EditFundraiserComponent implements OnInit {
  fundraiserId: string;
  fundraiser: Fundraiser;
  // fundraiser categories options
  fundraiserCategory = [
    'Birthday Fundraisers',
    'Team Campaign',
    'Community Garden',
    'Composting Program',
    'Earth Day Fundraiser',
    'Other'
  ];

  constructor(private route: ActivatedRoute,
              private fundraiserService: FundraiserServicesService,
              private router: Router,
              public authService: AuthService,
              private snackBar: MatSnackBar) {
    this.fundraiserId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getFundraiser();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /**
   * Function to get fundraiser
   */
  getFundraiser() {
    this.fundraiserService.getFundraiser(this.fundraiserId).subscribe(data => {
      this.fundraiser = data;
    }, error => {
      console.log(error);
      this.openSnackBar('Failed to get fundraiser with id:' + this.fundraiserId, 'Okay');
    });
  }

  /**
   * Function called on update submit button click.
   * @param form
   */
  update(form: NgForm) {
    // check for authentication token
    if (this.authService.isLoggedIn) {
      form.value.emailId = this.authService.userProfile.email;
      this.fundraiserService.updateFundraiser(this.fundraiserId, form.value, this.authService.accessToken).subscribe(data => {
        this.openSnackBar('Fundraiser Updated', 'Okay');
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
