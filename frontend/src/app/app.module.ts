import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FundraiserListComponent } from './fundraiser-list/fundraiser-list.component';
import { FundraiserDetailComponent } from './fundraiser-detail/fundraiser-detail.component';
import { MyFundraiserListComponent } from './my-fundraiser-list/my-fundraiser-list.component';
import { MyFundraiserDetailComponent } from './my-fundraiser-detail/my-fundraiser-detail.component';
import { FundraiserCreateComponent } from './fundraiser-create/fundraiser-create.component';
import { DonationCreateComponent } from './donation-create/donation-create.component';
import { MyDonationsListComponent } from './my-donations-list/my-donations-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DonationServicesService} from './services/donation-services.service';
import {FundraiserServicesService} from './services/fundraiser-services.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FundraiserListComponent,
    FundraiserDetailComponent,
    MyFundraiserListComponent,
    MyFundraiserDetailComponent,
    FundraiserCreateComponent,
    DonationCreateComponent,
    MyDonationsListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    DonationServicesService,
    FundraiserServicesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
