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
    MyDonationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
