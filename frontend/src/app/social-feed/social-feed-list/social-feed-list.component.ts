import { Component, OnInit } from '@angular/core';
import { SocialFeedCreateUpdateComponent } from "../social-feed-create-update/social-feed-create-update.component";
import { MatDialog } from '@angular/material';
import { SocialFeedService } from '../social-feed.service';
import { Observable } from "rxjs";
import { SocialFeed } from "../models/social-feed-model";
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-social-feed-list',
  templateUrl: './social-feed-list.component.html',
  styleUrls: ['./social-feed-list.component.scss']
})
export class SocialFeedListComponent implements OnInit {

  constructor(
    public dialog: MatDialog, private socialFeedService: SocialFeedService, private sanitizer: DomSanitizer
  ) { }

  socialFeedList: Array<SocialFeed>;
  private image : any;
  private url: any;
  private readonly imageType : string = 'data:image/PNG;base64,';
  
  ngOnInit() {
    this.getPosts()
  }

  base64ArrayBuffer(arrayBuffer) {
    var base64    = ''
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  
    var bytes         = new Uint8Array(arrayBuffer)
    var byteLength    = bytes.byteLength
    var byteRemainder = byteLength % 3
    var mainLength    = byteLength - byteRemainder
  
    var a, b, c, d
    var chunk
  
    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
  
      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
      d = chunk & 63               // 63       = 2^6 - 1
  
      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
    }
  
    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      chunk = bytes[mainLength]
  
      a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2
  
      // Set the 4 least significant bits to zero
      b = (chunk & 3)   << 4 // 3   = 2^2 - 1
  
      base64 += encodings[a] + encodings[b] + '=='
    } else if (byteRemainder == 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
  
      a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4
  
      // Set the 2 least significant bits to zero
      c = (chunk & 15)    <<  2 // 15    = 2^4 - 1
  
      base64 += encodings[a] + encodings[b] + encodings[c] + '='
    }
    
    return base64
  }

  getPosts() {
    let socialFeedList$: Observable<Array<SocialFeed>> = this.socialFeedService.getSocialfeedList();
    socialFeedList$.subscribe(socialFeedList => {
      this.socialFeedList = socialFeedList;
    });
  }

  createPost() {
    // this.todoService.create=true;
    let dialogRef = this.dialog.open(SocialFeedCreateUpdateComponent, {
      // panelClass: 'todoModal',
      height: '600px',
      width: '500px',
      data: { 
        create: true,
        title:"",
        description:"",
        dueDate:"",
        completed:"no"    
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }
}
