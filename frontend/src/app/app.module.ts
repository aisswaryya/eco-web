import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { SocialFeedListComponent } from './social-feed/social-feed-list/social-feed-list.component';
import { SocialFeedDetailComponent } from './social-feed/social-feed-detail/social-feed-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SocialFeedListComponent,
    SocialFeedDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
