import { Component, OnInit } from '@angular/core';
import { SocialFeedCreateUpdateComponent } from "../social-feed-create-update/social-feed-create-update.component";
import { MatDialog } from '@angular/material';
import { SocialFeedService } from '../../services/social-feed.service';
import { Observable } from "rxjs";
import { SocialFeed } from "../../models/social-feed-model";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-social-feed-list',
  templateUrl: './social-feed-list.component.html',
  styleUrls: ['./social-feed-list.component.scss']
})
export class SocialFeedListComponent implements OnInit {

/**
 *Creates an instance of SocialFeedListComponent.
 * @param {MatDialog} dialog
 * @param {SocialFeedService} socialFeedService
 * @param {AuthService} authService
 * @memberof SocialFeedListComponent
 */
constructor(
    public dialog: MatDialog, private socialFeedService: SocialFeedService, private authService: AuthService
  ) { }

  socialFeedList: Array<SocialFeed>;
  loggedInUserEmailId: string;
  loggedInUserName: string;
  loggedInUserDP: string;
  
  ngOnInit() {
    this.getPosts();
    if(this.authService.isLoggedIn) {
        this.loggedInUserEmailId = this.authService.userProfile.email;
        if(this.authService.userProfile.name)
        this.loggedInUserName = this.authService.userProfile.name;
        else
        this.loggedInUserName = this.authService.userProfile.nickname;
        this.loggedInUserDP = this.authService.userProfile.picture;
    }
  }

  /**
   *
   * Retrieve the list of social feeds
   * @memberof SocialFeedListComponent
   */
  getPosts() {
      if(this.authService.isLoggedIn) {
        // socialfeed.emailId = this.authService.userProfile.email;
        let socialFeedList$: Observable<Array<SocialFeed>> = this.socialFeedService.getSocialfeedList(this.authService.accessToken);
        socialFeedList$.subscribe(socialFeedList => {
          this.socialFeedList = socialFeedList;
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

  /**
   *
   * Invoke create component in a material dialog 
   * @memberof SocialFeedListComponent
   */
  createPost() {
    let dialogRef = this.dialog.open(SocialFeedCreateUpdateComponent, {
      height: '650px',
      width: '500px',
      data: { 
        create: true,
        location:"",
        description:"" 
      }
    });
    dialogRef.afterClosed().subscribe(result => {
        this.getPosts();
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
        this.getPosts();
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
        this.getPosts();
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
