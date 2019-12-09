import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialFeedListComponent } from './social-feed/social-feed-list/social-feed-list.component';
import { SocialFeedDetailComponent } from './social-feed/social-feed-detail/social-feed-detail.component';
import { SocialFeedCreateUpdateComponent } from './social-feed/social-feed-create-update/social-feed-create-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { SocialFeedService } from "./social-feed/social-feed.service";
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SocialFeedListComponent,
    SocialFeedDetailComponent,
    SocialFeedCreateUpdateComponent,
    BlogComponent,
    BlogDetailComponent,
    BlogsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ SocialFeedService ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ SocialFeedCreateUpdateComponent ]
})
export class AppModule { }
