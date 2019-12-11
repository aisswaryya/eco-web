import { Component, OnInit } from '@angular/core';
import { SocialFeedService } from "../../services/social-feed.service";
import { AuthService } from "../../auth/auth.service";
import { SocialFeed } from 'src/app/models/social-feed-model';
import { SocialFeedCreateUpdateComponent } from "../social-feed-create-update/social-feed-create-update.component";
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-my-social-feed',
  templateUrl: './my-social-feed.component.html',
  styleUrls: ['./my-social-feed.component.scss']
})
export class MySocialFeedComponent implements OnInit {

  constructor(public dialog: MatDialog, private socialFeedService: SocialFeedService, private authService:AuthService) { }
  socialFeedList: Array<SocialFeed>;
  loggedInUserEmailId: string;
  loggedInUserName: string;
  loggedInUserDP: string;
  postsCount: number;

  ngOnInit() {
    this.getSocialFeedsByEmail();
    if(this.authService.isLoggedIn) {
      this.loggedInUserEmailId = this.authService.userProfile.email;
      if(this.authService.userProfile.name)
      this.loggedInUserName = this.authService.userProfile.name;
      else
      this.loggedInUserName = this.authService.userProfile.nickname;
      this.loggedInUserDP = this.authService.userProfile.picture;
    }
  }

  getSocialFeedsByEmail() {
    if(this.authService.isLoggedIn) {
      this.socialFeedService.getSocialFeedsByEmailId(this.authService.userProfile.email, this.authService.accessToken).subscribe(data => {
        this.socialFeedList = data;
        this.postsCount = this.socialFeedList.length;
      }, 
      error => {
        console.log(error);
        alert('Error fetching Fundraisers');
      });
    } 
    else {
      this.authService.login();
    } 
  }

  /**
   *
   * Invoke create component in a material dialog 
   * @memberof SocialFeedListComponent
   */
  createPost() {
    let dialogRef = this.dialog.open(SocialFeedCreateUpdateComponent, {
      height: '600px',
      width: '500px',
      data: { 
        create: true,
        location:"",
        description:"" 
      }
    });
    dialogRef.afterClosed().subscribe(result => {
        this.getSocialFeedsByEmail();
    })
  }

    /**
   *
   * Invoke update component in a material dialog 
   * @param {SocialFeed} feed
   * @memberof SocialFeedListComponent
   */
  updatePost(feed: SocialFeed) {
    let dialogRef = this.dialog.open(SocialFeedCreateUpdateComponent, {
      height: '600px',
      width: '500px',
      data: { 
        create: false,
        location: feed.location,
        description: feed.description,
        image: feed.image,
        id: feed.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
        this.getSocialFeedsByEmail();
    })
  }

  /**
   *
   * Delete a feed from the list
   * @param {SocialFeed} feed
   * @memberof SocialFeedListComponent
   */
  deletePost(feed: SocialFeed) {

    if(this.authService.isLoggedIn) {
      // socialfeed.emailId = this.authService.userProfile.email;
      this.socialFeedService.deleteSocialFeed(feed.id, this.authService.accessToken)
      .subscribe(socialFeedList => {
        console.log("Deleted successfully");
        this.getSocialFeedsByEmail();
      },
      (error) => {
          //catch the error
          console.error("An error occurred, ", error);
      }); 
    } 
    else {
      this.authService.login();
    } 
  }
}

