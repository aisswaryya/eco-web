import { Component, OnInit } from '@angular/core';
import {FundraiserServicesService} from '../services/fundraiser-services.service';

@Component({
  selector: 'app-fundraiser-list',
  templateUrl: './fundraiser-list.component.html',
  styleUrls: ['./fundraiser-list.component.scss']
})
export class FundraiserListComponent implements OnInit {

  fundraisers: any = [];

  constructor(private fundraiserService: FundraiserServicesService) { }

  ngOnInit() {
    this.getFundraisers();
  }

  getFundraisers() {
    this.fundraiserService.getFundraisers().subscribe(data => {
      this.fundraisers = data;
    }, error => {
      console.log(error);
      alert('Error fetching Fundraisers');
    });
  }

}
