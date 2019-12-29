import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {

  isMyEvents: string = "myEvents";

  constructor() { 

    console.log("My event component:"+this.isMyEvents);

  }

  ngOnInit() {
  }

}
