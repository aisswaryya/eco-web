import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundraiserListComponent } from './fundraiser-list/fundraiser-list.component';
import { FundraiserDetailComponent } from './fundraiser-detail/fundraiser-detail.component';
import { MyFundraiserListComponent } from './my-fundraiser-list/my-fundraiser-list.component';
import { MyFundraiserDetailComponent } from './my-fundraiser-detail/my-fundraiser-detail.component';
import { FundraiserCreateComponent } from './fundraiser-create/fundraiser-create.component';
import { DonationCreateComponent } from './donation-create/donation-create.component';
import { MyDonationsListComponent } from './my-donations-list/my-donations-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DonationServicesService} from './services/donation-services.service';
import {FundraiserServicesService} from './services/fundraiser-services.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {CustomMaxDirective} from './helpers/custom-max.validator.directive';
import {CustomMinDirective} from './helpers/custom-min-validator.directive';
import {AngularRaveModule} from 'angular-rave';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent} from './navigation/header/header.component';
import { SidenavListComponent }from './navigation/sidenav-list/sidenav-list.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent} from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import {PetitionService} from './services/petition.service';

// @ts-ignore
import {MatBadgeModule} from '@angular/material/badge';
import {SignatureService} from './services/signature.service';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EditFundraiserComponent } from './edit-fundraiser/edit-fundraiser.component';


import {NgbModule , NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventService } from './events/services/event.service';
import { EventViewComponent } from './events/event-view/event-view.component';
import { EventComponent } from './events/event/event.component';
import { AttendeeService } from './events/services/attendee.service';
import { MyeventsComponent } from './event/myevents/myevents.component';
import { MyEventsComponent } from './events/my-events/my-events.component';
import { AttendeeComponent } from './events/attendee/attendee.component';
import { MyAttendeeComponent } from './events/my-attendee/my-attendee.component';



@NgModule({
  declarations: [
    AppComponent,
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
    MyAttendeeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatBadgeModule,
    AppRoutingModule,
    HttpClientModule,
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
    })
  ],
  providers: [
    DonationServicesService,
    FundraiserServicesService,
    EventService,
    AttendeeService,
    AuthService,
    PetitionService,
    SignatureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
