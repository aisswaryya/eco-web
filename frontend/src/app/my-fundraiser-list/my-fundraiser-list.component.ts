import { Component, OnInit } from '@angular/core';
import {FundraiserServicesService} from '../services/fundraiser-services.service';

@Component({
  selector: 'app-my-fundraiser-list',
  templateUrl: './my-fundraiser-list.component.html',
  styleUrls: ['./my-fundraiser-list.component.scss']
})
export class MyFundraiserListComponent implements OnInit {

  fundraisers: any = [];

  constructor(private fundraiserService: FundraiserServicesService) { }

  ngOnInit() {
    this.getFundraisersByEmail();
  }

  getFundraisersByEmail() {
    this.fundraiserService.getFundraisersByEmailId('thushu22@gmail.com').subscribe(data => {
      this.fundraisers = data;
    }, error => {
      console.log(error);
      alert('Error fetching Fundraisers');
    });
  }

}
