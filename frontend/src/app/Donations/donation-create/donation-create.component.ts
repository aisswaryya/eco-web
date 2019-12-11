/**
 * Create Donation Component
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

// import services and models
import {DonationServicesService} from '../../services/donation-services.service';
import {Donation} from '../../models/donation';
import {Fundraiser} from '../../models/fundraiser';
import {FundraiserServicesService} from '../../services/fundraiser-services.service';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-donation-create',
  templateUrl: './donation-create.component.html',
  styleUrls: ['./donation-create.component.scss']
})
export class DonationCreateComponent implements OnInit {

  fundraiserId: string;
  fundraiser: Fundraiser;

  donation = new Donation('', '', '', 1);

  constructor(private route: ActivatedRoute,
              private router: Router,
              private donationService: DonationServicesService,
              private fundraiserService: FundraiserServicesService,
              public authService: AuthService,
              private snackBar: MatSnackBar) {
    this.fundraiserId = route.snapshot.paramMap.get('id');
    this.donation.fundraiserId = this.fundraiserId;
    this.donation.emailId = this.authService.userProfile.email;
  }

  ngOnInit() {
    this.getFundraiser();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // Function called to save donation component
  saveDonation(form: NgForm) {
    if (this.authService.isLoggedIn) {
      form.value.fundraiserId = this.fundraiserId;
      // sending auth token to backend
      this.donationService.createDonation(form.value, this.authService.accessToken).subscribe(data => {
        this.fundraiser.collectedAmount += this.donation.amount;
        this.updateTotalAmount();
        this.router.navigate(['/fundraiser-detail', this.fundraiserId]);
      }, error => {
        this.openSnackBar('Payment Failure', 'Okay');
        console.log(error);
      });
    } else {
      this.authService.login();
    }
  }

  // Updating Total Amount to Fundraiser object
  updateTotalAmount() {
    console.log('Updating fundraiser: ' + this.fundraiser.collectedAmount);
    this.fundraiserService.updateFundraiser(this.fundraiserId, this.fundraiser, this.authService.accessToken).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  paymentFailure() {
    console.log('Payment Failed');
  }

  paymentSuccess(res) {
    console.log('Payment complete', res);
  }

  // Get the fundraiser object by sending in the fundraiser Id
  getFundraiser() {
    this.fundraiserService.getFundraiser(this.fundraiserId).subscribe(data => {
      this.fundraiser = data;
    }, error => {
      console.log(error);
      this.snackBar.open('Failed to get fundraiser with id:' + this.fundraiserId, 'Okay');
    });
  }


}
