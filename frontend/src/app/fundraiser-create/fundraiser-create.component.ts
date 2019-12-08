import { Component, OnInit } from '@angular/core';
import {Fundraiser} from '../models/fundraiser';
import {FundraiserServicesService} from '../services/fundraiser-services.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

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
        'Other']

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
              private router: Router) { }

  ngOnInit() {
  }


  saveFundraiser(form: NgForm) {
      form.value.emailId = 'thushu22@gmail.com';
      this.fundraiserService.createFundraiser(form.value).subscribe(data => {
          alert('Fundraiser Created');
          console.log(data);
          this.router.navigate(['/fundraiser-detail', data.id]);
      }, error => {
          console.log(error);
      });
  }



}
