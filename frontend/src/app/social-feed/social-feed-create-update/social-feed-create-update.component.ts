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
      data: [null],
      description: [null],
      location: [null]
    });
  }

  selectedFile = null;
  public imagePath;
  imgURL: any;
  public message: string;

  onFileSelected(event) {
    let files = event.target.files;
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

  // onUpload() {
  //   this.http.post('');
  // }
}
