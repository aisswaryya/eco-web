import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FundraiserListComponent} from './fundraiser-list/fundraiser-list.component';
import {FundraiserDetailComponent} from './fundraiser-detail/fundraiser-detail.component';
import {FundraiserCreateComponent} from './fundraiser-create/fundraiser-create.component';
import {MyFundraiserListComponent} from './my-fundraiser-list/my-fundraiser-list.component';
import {MyFundraiserDetailComponent} from './my-fundraiser-detail/my-fundraiser-detail.component';
import {DonationCreateComponent} from './donation-create/donation-create.component';
import {MyDonationsListComponent} from './my-donations-list/my-donations-list.component';


const routes: Routes = [
  { path: 'fundraiser-list', component: FundraiserListComponent },
  { path: 'fundraiser-detail/:id', component: FundraiserDetailComponent },
  { path: 'fundraiser-create', component: FundraiserCreateComponent},
  { path: 'my-fundraisers-list', component: MyFundraiserListComponent },
  { path: 'my-fundraiser-detail/:id', component: MyFundraiserDetailComponent },
  { path: 'donate', component: DonationCreateComponent },
  { path: 'my-donations-list', component: MyDonationsListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
