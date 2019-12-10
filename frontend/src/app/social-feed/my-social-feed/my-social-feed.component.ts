import { Component, OnInit } from '@angular/core';
import { SocialFeedService } from "../../services/social-feed.service";
import { AuthService } from "../../auth/auth.service";
import { SocialFeed } from 'src/app/models/social-feed-model';

@Component({
  selector: 'app-my-social-feed',
  templateUrl: './my-social-feed.component.html',
  styleUrls: ['./my-social-feed.component.scss']
})
export class MySocialFeedComponent implements OnInit {

  constructor(private socialFeedService: SocialFeedService, private authService:AuthService) { }
  private socialFeeds: Array<SocialFeed>;

  ngOnInit() {
    this.getSocialFeedsByEmail();
  }

  getSocialFeedsByEmail() {
    this.socialFeedService.getSocialFeedsByEmailId((this.authService.userProfile.email).subscribe(data => {
      this.socialFeeds = data;
    }, 
    error => {
      console.log(error);
      alert('Error fetching Fundraisers');
    }));
  }
}
