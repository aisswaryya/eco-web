import { Component, OnInit } from '@angular/core';
import { SocialFeedCreateUpdateComponent } from "../social-feed-create-update/social-feed-create-update.component";
import { MatDialog } from '@angular/material';
import { SocialFeedService } from '../../services/social-feed.service';
import { Observable } from "rxjs";
import { SocialFeed } from "../../models/social-feed-model";

@Component({
  selector: 'app-social-feed-list',
  templateUrl: './social-feed-list.component.html',
  styleUrls: ['./social-feed-list.component.scss']
})
export class SocialFeedListComponent implements OnInit {

  constructor(
    public dialog: MatDialog, private socialFeedService: SocialFeedService
  ) { }

  socialFeedList: Array<SocialFeed>;
  
  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    let socialFeedList$: Observable<Array<SocialFeed>> = this.socialFeedService.getSocialfeedList();
    socialFeedList$.subscribe(socialFeedList => {
      this.socialFeedList = socialFeedList;
    });
  }

  openUploadSocialFeed() {
    this.createPost();
  }

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
        this.getPosts();
    })
  }

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

  deletePost(feed: SocialFeed) {
    this.socialFeedService.deleteSocialFeed(feed.id).subscribe((response) => {
      console.log("Deleted successfully");
      this.getPosts();
    })
  }
}
