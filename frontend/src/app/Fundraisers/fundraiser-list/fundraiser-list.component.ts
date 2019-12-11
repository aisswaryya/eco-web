/**
 * Fundraiser list component
 */
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {FundraiserServicesService} from '../../services/fundraiser-services.service';

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

  /**
   * Function to get a list of all fundraisers
   */
  getFundraisers() {
    this.fundraiserService.getFundraisers().subscribe(data => {
      this.fundraisers = data;
    }, error => {
      console.log(error);
      this.openSnackBar('Error fetching Fundraisers', 'Okay');
    });
  }

}
