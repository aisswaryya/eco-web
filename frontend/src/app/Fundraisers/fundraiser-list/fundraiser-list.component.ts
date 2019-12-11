import { Component, OnInit } from '@angular/core';
import {FundraiserServicesService} from '../../services/fundraiser-services.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-fundraiser-list',
  templateUrl: './fundraiser-list.component.html',
  styleUrls: ['./fundraiser-list.component.scss']
})
export class FundraiserListComponent implements OnInit {

  fundraisers: any = [];

  constructor(private fundraiserService: FundraiserServicesService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getFundraisers();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getFundraisers() {
    this.fundraiserService.getFundraisers().subscribe(data => {
      this.fundraisers = data;
    }, error => {
      console.log(error);
      this.openSnackBar('Error fetching Fundraisers', 'Okay');
    });
  }

}
