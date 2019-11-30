import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-feed-list',
  templateUrl: './social-feed-list.component.html',
  styleUrls: ['./social-feed-list.component.scss']
})
export class SocialFeedListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
