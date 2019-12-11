import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialFeedListComponent } from './social-feed/social-feed-list/social-feed-list.component';
import { SocialFeedCreateUpdateComponent } from './social-feed/social-feed-create-update/social-feed-create-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { SocialFeedService } from "./services/social-feed.service";
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { SharedModule} from './helpers/shared/shared.module';
import { FundraiserListComponent } from './Fundraisers/fundraiser-list/fundraiser-list.component';
import { FundraiserDetailComponent } from './Fundraisers/fundraiser-detail/fundraiser-detail.component';
import { MyFundraiserListComponent } from './Fundraisers/my-fundraiser-list/my-fundraiser-list.component';
import { MyFundraiserDetailComponent} from './Fundraisers/my-fundraiser-detail/my-fundraiser-detail.component';
import { FundraiserCreateComponent } from './Fundraisers/fundraiser-create/fundraiser-create.component';
import { DonationCreateComponent } from './Donations/donation-create/donation-create.component';
import { MyDonationsListComponent } from './Donations/my-donations-list/my-donations-list.component';
import { HttpClientModule } from '@angular/common/http';
import {DonationServicesService} from './services/donation-services.service';
import {FundraiserServicesService} from './services/fundraiser-services.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {CustomMaxDirective} from './helpers/custom-max.validator.directive';
import {CustomMinDirective} from './helpers/custom-min-validator.directive';
import {AngularRaveModule} from 'angular-rave';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback.component';
import { HeaderComponent} from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent} from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import {PetitionService} from './services/petition.service';

// @ts-ignore
import {MatBadgeModule} from '@angular/material/badge';
import {SignatureService} from './services/signature.service';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EditFundraiserComponent } from './Fundraisers/edit-fundraiser/edit-fundraiser.component';
import { DateAgoPipe } from './helpers/pipes/date-ago.pipe';
import { MySocialFeedComponent } from "./social-feed/my-social-feed/my-social-feed.component";
import {ProgressBarModule} from 'angular-progress-bar';
import { SimpleDialogComponent } from './helpers/simple-dialog/simple-dialog.component';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MessageBox} from './helpers/shared/message-box';


import {NgbModule , NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventService } from './services/event.service';
import { EventViewComponent } from './events/event-list-view/event-view.component';
import { EventComponent } from './events/event/event.component';
import { AttendeeService } from './services/attendee.service';
import { MyeventsComponent } from './event/myevents/myevents.component';
import { MyEventsComponent } from './events/my-events/my-events.component';
import { AttendeeComponent } from './events/attendee/attendee.component';
import { AirQualityCheckComponent } from './air-quality-check/air-quality-check.component';
import { MyAttendeeComponent } from './events/my-attendee-list/my-attendee.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SocialFeedListComponent,
    SocialFeedCreateUpdateComponent,
    BlogDetailComponent,
    BlogsListComponent,
    FundraiserListComponent,
    FundraiserDetailComponent,
    MyFundraiserListComponent,
    MyFundraiserDetailComponent,
    FundraiserCreateComponent,
    DonationCreateComponent,
    MyDonationsListComponent,
    NavBarComponent,
    CustomMaxDirective,
    CustomMinDirective,
    CallbackComponent,
    HeaderComponent,
    SidenavListComponent,
    LayoutComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MyProfileComponent,
    EventCreateComponent,
    EventViewComponent,
    EventComponent,
    MyEventsComponent,
    EditFundraiserComponent,
    AttendeeComponent,
    MyAttendeeComponent,
    EditFundraiserComponent,
    DateAgoPipe,
    MySocialFeedComponent,
    SimpleDialogComponent,
    AirQualityCheckComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatBadgeModule,
    AppRoutingModule,
    FormsModule,
    AngularRaveModule.forRoot({
      key: 'FLWPUBK_TEST-15175d68b5f7a725f15d52f5c1d5316e-X',
      isTest: true,
    }),
    GooglePlaceModule,
    NgbModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ //maps API key
      apiKey: 'AIzaSyD4vSXcefSGKfJF9vqQdF_aLjC56JoS5sc'
    }),
    ProgressBarModule
  ],
  providers: [
    SocialFeedService,
    DonationServicesService,
    FundraiserServicesService,
    EventService,
    AttendeeService,
    AuthService,
    PetitionService,
    SignatureService,
    {provide: MAT_DIALOG_DATA, useValue: {}},
    MessageBox
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ SocialFeedCreateUpdateComponent ]
})
export class AppModule { }
