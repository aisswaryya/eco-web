import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SocialFeed } from '../../models/social-feed-model';
import { SocialFeedService } from '../../services/social-feed.service';
import { AuthService } from "../../auth/auth.service";
import { FormBuilder, FormControl, Validators, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GooglePlaceDirective, GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-social-feed-create-update',
  templateUrl: './social-feed-create-update.component.html',
  styleUrls: ['./social-feed-create-update.component.scss']
})
export class SocialFeedCreateUpdateComponent implements OnInit {

/**
 *Creates an instance of SocialFeedCreateUpdateComponent.
 * @param {SocialFeed} data
 * @param {FormBuilder} _formBuilder
 * @param {SocialFeedService} socialFeedService
 * @param {MatDialogRef<SocialFeedCreateUpdateComponent>} dialogRef
 * @memberof SocialFeedCreateUpdateComponent
 */
constructor(
    @Inject(MAT_DIALOG_DATA) public data: SocialFeed,
    private _formBuilder: FormBuilder,
    private socialFeedService: SocialFeedService,
    public dialogRef: MatDialogRef<SocialFeedCreateUpdateComponent>,
    private authService: AuthService) { }
    socialFeedGroup: FormGroup;

  ngOnInit() {
    this.socialFeedGroup = this._formBuilder.group({
      id: this.data.id,
      description: this.data.description,
      location: this.data.location,
      image: this.data.image
    });
    console.log(this.data);
  }

  selectedFile: any = null;
  public imagePath;
  imgURL: any;
  public message: string;
  location: string;

/**
 *
 *
 * @param {*} event
 * @returns
 * @memberof SocialFeedCreateUpdateComponent
 */
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

  /**
   *
   * Upload the post created by user
   * @memberof SocialFeedCreateUpdateComponent
   */
  uploadPost() {
    let file: File = null;
    let socialfeed: SocialFeed = new SocialFeed("","","","","", new Date(), new Date());
    socialfeed.id = "";
    socialfeed.image= this.imgURL;
    socialfeed.description= this.socialFeedGroup.get('description').value;
    socialfeed.location= this.location;
    socialfeed.emailId= "abc@gmail.com";
    socialfeed.createdDate = new Date();
    socialfeed.updatedDate = new Date();
    if(this.authService.isLoggedIn) {
        socialfeed.emailId = this.authService.userProfile.email;
        this.socialFeedService.createSocialfeed(socialfeed, this.authService.accessToken).subscribe((response) => {
          this.dialogRef.close();
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
   * Update a specific post
   * @memberof SocialFeedCreateUpdateComponent
   */
  updatePost() {
    let file: File = null;
    let socialfeed: SocialFeed = new SocialFeed("","","","","", new Date(), new Date());
    socialfeed.id = this.socialFeedGroup.get('id').value;
    socialfeed.image= this.data.image;
    socialfeed.description= this.socialFeedGroup.get('description').value;
    socialfeed.location= this.location;
    socialfeed.emailId= "abc@gmail.com";
    socialfeed.createdDate = new Date();
    socialfeed.updatedDate = new Date();
    if(this.authService.isLoggedIn) {
      socialfeed.emailId = this.authService.userProfile.email;
      this.socialFeedService.updateSocialFeed(socialfeed, this.authService.accessToken).subscribe((response) => {
      //do something with the response
      this.dialogRef.close();
      console.log(response);
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

  cancelPost() {
    this.dialogRef.close();
  }

  @ViewChild("venue",{static: false}) placesRef : GooglePlaceDirective;

  public handleAddressChange(address: Address) {
    // Do some stuff
    this.location = address.formatted_address;
  } 
}
