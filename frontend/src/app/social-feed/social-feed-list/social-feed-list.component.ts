import { Component, OnInit } from '@angular/core';
import { SocialFeedCreateUpdateComponent } from "../social-feed-create-update/social-feed-create-update.component";
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-social-feed-list',
  templateUrl: './social-feed-list.component.html',
  styleUrls: ['./social-feed-list.component.scss']
})
export class SocialFeedListComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
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
      // this.getTodo();
    })
  }
}
