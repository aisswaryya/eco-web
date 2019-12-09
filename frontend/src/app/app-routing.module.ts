import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FundraiserListComponent} from './fundraiser-list/fundraiser-list.component';
import {FundraiserDetailComponent} from './fundraiser-detail/fundraiser-detail.component';
import {FundraiserCreateComponent} from './fundraiser-create/fundraiser-create.component';
import {MyFundraiserListComponent} from './my-fundraiser-list/my-fundraiser-list.component';
import {MyFundraiserDetailComponent} from './my-fundraiser-detail/my-fundraiser-detail.component';
import {DonationCreateComponent} from './donation-create/donation-create.component';
import {MyDonationsListComponent} from './my-donations-list/my-donations-list.component';
import { AuthGuard } from './auth/auth.guard';
import {CallbackComponent} from './callback.component';


const routes: Routes = [
  { path: 'fundraiser-list', component: FundraiserListComponent },
  { path: 'fundraiser-detail/:id', component: FundraiserDetailComponent },
  { path: 'fundraiser-create', component: FundraiserCreateComponent, canActivate: [ AuthGuard ]},
  { path: 'my-fundraisers-list', component: MyFundraiserListComponent, canActivate: [ AuthGuard ] },
  { path: 'my-fundraiser-detail/:id', component: MyFundraiserDetailComponent, canActivate: [ AuthGuard ] },
  { path: 'donate/:id', component: DonationCreateComponent, canActivate: [ AuthGuard ] },
  { path: 'my-donations-list', component: MyDonationsListComponent, canActivate: [ AuthGuard ] },
  { path: 'callback', component: CallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
