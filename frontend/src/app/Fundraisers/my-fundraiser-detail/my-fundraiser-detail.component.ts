import { Component, OnInit } from '@angular/core';
import {Fundraiser} from '../../models/fundraiser';
import {ActivatedRoute, Router} from '@angular/router';
import {FundraiserServicesService} from '../../services/fundraiser-services.service';
import {DonationServicesService} from '../../services/donation-services.service';
import {AuthService} from '../../auth/auth.service';
import {MatDialog} from '@angular/material';
import {MessageBox, MessageBoxButton} from '../../helpers/shared/message-box';

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
              private dialog: MatDialog) {
    this.fundraiserId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getFundraiser();
    this.getDonationsByFundraiserId();
  }

  getFundraiser() {
    this.fundraiserService.getFundraiser(this.fundraiserId).subscribe(data => {
      this.fundraiser = data;
    }, error => {
      console.log(error);
      alert('Failed to get fundraiser with id:' + this.fundraiserId);
    });
  }

  getDonationsByFundraiserId() {
    this.donationService.getDonationsByFundraiserId(this.fundraiserId).subscribe(data => {
      this.donations = data;
    }, error => {
      console.log(error);
      alert('Error fetching Donations');
    });
  }

  onShowClick() {
    this.width = (this.width !== undefined && this.width !== 'px') ? this.width + 'px' : '1000px';
    MessageBox.show(this.dialog, 'Are you sure you want to delete this Fundraiser', 'Delete Fundraiser', this.information,
      this.button, this.allow_outside_click, this.style, this.width).subscribe( result => {
      const respone = (result === undefined) ? 'none' : result.result;
      MessageBox.show(this.dialog, `User response : ${respone}`);
    });
    this.width = this.width.replace('px', '');
  }

  deleteFundraiser() {
    this.fundraiserService.deleteFundraiser(this.fundraiserId, this.authService.accessToken).subscribe(data => {
      console.log(data);
      this.router.navigate(['/my-fundraisers-list']);
    }, error => {
      console.log(error);
    });
  }

}

