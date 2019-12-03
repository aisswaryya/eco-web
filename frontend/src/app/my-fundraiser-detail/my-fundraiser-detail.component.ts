import { Component, OnInit } from '@angular/core';
import {Fundraiser} from '../models/fundraiser';
import {ActivatedRoute} from '@angular/router';
import {FundraiserServicesService} from '../services/fundraiser-services.service';
import {DonationServicesService} from '../services/donation-services.service';

@Component({
  selector: 'app-my-fundraiser-detail',
  templateUrl: './my-fundraiser-detail.component.html',
  styleUrls: ['./my-fundraiser-detail.component.scss']
})
export class MyFundraiserDetailComponent implements OnInit {
  fundraiserId: string;
  fundraiser: Fundraiser;
  donations: any = [];

  constructor(private route: ActivatedRoute,
              private fundraiserService: FundraiserServicesService,
              private donationService: DonationServicesService) {
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
      alert('Error fetching Fundraisers');
    });
  }

}
