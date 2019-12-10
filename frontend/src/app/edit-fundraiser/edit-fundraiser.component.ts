import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FundraiserServicesService} from '../services/fundraiser-services.service';
import {Fundraiser} from '../models/fundraiser';
import {AuthService} from '../auth/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-fundraiser',
  templateUrl: './edit-fundraiser.component.html',
  styleUrls: ['./edit-fundraiser.component.scss']
})
export class EditFundraiserComponent implements OnInit {
  fundraiserId: string;
  fundraiser: Fundraiser;
  fundraiserCategory = [
    'Birthday Fundraisers',
    'Team Campaign',
    'Community Garden',
    'Composting Program',
    'Earth Day Fundraiser',
    'Other'
  ];

  constructor(private route: ActivatedRoute,
              private fundraiserService: FundraiserServicesService,
              private router: Router,
              public authService: AuthService) {
    this.fundraiserId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getFundraiser();
  }

  getFundraiser() {
    this.fundraiserService.getFundraiser(this.fundraiserId).subscribe(data => {
      this.fundraiser = data;
    }, error => {
      console.log(error);
      alert('Failed to get fundraiser with id:' + this.fundraiserId);
    });
  }

  update(form: NgForm) {
    if (this.authService.isLoggedIn) {
      form.value.emailId = this.authService.userProfile.email;
      this.fundraiserService.updateFundraiser(this.fundraiserId, form.value, this.authService.accessToken).subscribe(data => {
        alert('Fundraiser Updated');
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
