import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SocialFeed } from "../models/social-feed-model";
import { SocialFeedService } from "../social-feed.service";
import { FormBuilder, FormControl, Validators, FormGroup, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-social-feed-create-update',
  templateUrl: './social-feed-create-update.component.html',
  styleUrls: ['./social-feed-create-update.component.scss']
})
export class SocialFeedCreateUpdateComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SocialFeed,
    private _formBuilder: FormBuilder,
    private socialFeedService: SocialFeedService,
    public dialogRef: MatDialogRef<SocialFeedCreateUpdateComponent>) { }
    socialFeedGroup: FormGroup;

  ngOnInit() {
    this.socialFeedGroup = this._formBuilder.group({
      id: this.data.id,
      description: this.data.description,
      location: this.data.location,
      image: this.data.image
    });
  }

  selectedFile: any = null;
  public imagePath;
  imgURL: any;
  public message: string;

  onFileSelected(event) {
    let files = event.target.files;
    this.selectedFile = files[0];
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }

  uploadPost() {
    let file: File = null;
    let socialfeed: SocialFeed = new SocialFeed("","","","","", new Date(), new Date());
    socialfeed.id = "";
    socialfeed.image= this.imgURL;
    socialfeed.description= this.socialFeedGroup.get('description').value;
    socialfeed.location= this.socialFeedGroup.get('location').value;
    socialfeed.emailId= "abc@gmail.com";
    socialfeed.createdDate = new Date();
    socialfeed.updatedDate = new Date();
    this.socialFeedService.createSocialfeed(socialfeed).subscribe((response) => {
      this.dialogRef.close();
   },
   (error) => {
      //catch the error
      console.error("An error occurred, ", error);
   }); 
  }

  updatePost() {
    let file: File = null;
    let socialfeed: SocialFeed = new SocialFeed("","","","","", new Date(), new Date());
    socialfeed.id = this.socialFeedGroup.get('id').value;
    socialfeed.image= this.socialFeedGroup.get('image').value;
    socialfeed.description= this.socialFeedGroup.get('description').value;
    socialfeed.location= this.socialFeedGroup.get('location').value;
    socialfeed.emailId= "abc@gmail.com";
    socialfeed.createdDate = new Date();
    socialfeed.updatedDate = new Date();
    this.socialFeedService.updateSocialFeed(socialfeed).subscribe((response) => {
      //do something with the response
      this.dialogRef.close();
   },
   (error) => {
      //catch the error
      console.error("An error occurred, ", error);
   }); 
  }
}
