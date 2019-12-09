import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DonationServicesService} from '../services/donation-services.service';
import {Donation} from '../models/donation';
import {NgForm, Validators, FormBuilder, FormControl} from '@angular/forms';
import {PaymentInstance} from 'angular-rave';
import {Fundraiser} from '../models/fundraiser';
import {FundraiserServicesService} from '../services/fundraiser-services.service';
import {AuthService} from '../auth/auth.service';

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
              public authService: AuthService) {
    this.fundraiserId = route.snapshot.paramMap.get('id');
    this.donation.fundraiserId = this.fundraiserId;
    this.donation.emailId = this.authService.userProfile.email;
  }

  ngOnInit() {
    this.getFundraiser();
  }

  saveDonation(form: NgForm) {
    if (this.authService.isLoggedIn) {
      form.value.fundraiserId = this.fundraiserId;
      this.donationService.createDonation(form.value, this.authService.accessToken).subscribe(data => {
        this.fundraiser.collectedAmount += this.donation.amount;
        this.updateTotalAmount();
        this.router.navigate(['/my-donations-list']);
      }, error => {
        alert('Payment Failure');
        console.log(error);
      });
    } else {
      this.authService.login();
    }
  }

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

  getFundraiser() {
    this.fundraiserService.getFundraiser(this.fundraiserId).subscribe(data => {
      this.fundraiser = data;
    }, error => {
      console.log(error);
      alert('Failed to get fundraiser with id:' + this.fundraiserId);
    });
  }


}
