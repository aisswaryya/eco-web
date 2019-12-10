import { Component, OnInit } from '@angular/core';
import {Fundraiser} from '../models/fundraiser';
import {FundraiserServicesService} from '../services/fundraiser-services.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

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
        'Other'];

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
              private router: Router,
              public authService: AuthService) {
      console.log(this.authService.userProfile);
  }

      ngOnInit() {
  }


  saveFundraiser(form: NgForm) {
    if (this.authService.isLoggedIn) {
      form.value.emailId = this.authService.userProfile.email;
      this.fundraiserService.createFundraiser(form.value, this.authService.accessToken).subscribe(data => {
        alert('Fundraiser Created');
        console.log(data);
        this.router.navigate(['/my-fundraiser-detail', data.id]);
      }, error => {
        if (error.status === 401) {
          alert('Not authenticated!! Please login to continue');
        }
        console.log(error);
      });
    } else {
      this.authService.login();
    }
  }



}
