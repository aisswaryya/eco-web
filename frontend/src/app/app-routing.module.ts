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
import { NotFoundComponent} from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventViewComponent } from './events/event-view/event-view.component';
import { MyEventsComponent } from './events/my-events/my-events.component';

import {EditFundraiserComponent} from './edit-fundraiser/edit-fundraiser.component';

const routes: Routes = [
  { path: 'fundraiser-list', component: FundraiserListComponent },
  { path: 'fundraiser-detail/:id', component: FundraiserDetailComponent },
  { path: 'fundraiser-create', component: FundraiserCreateComponent, canActivate: [ AuthGuard ]},
  { path: 'event-create', component: EventCreateComponent, canActivate: [ AuthGuard ]},
  { path: 'event-list', component: EventViewComponent
  // , canActivate: [ AuthGuard ]
},
  { path: 'my-event-list', component: MyEventsComponent, canActivate: [ AuthGuard ]},

  { path: 'my-fundraisers-list', component: MyFundraiserListComponent, canActivate: [AuthGuard]},
  { path: 'my-fundraiser-detail/:id', component: MyFundraiserDetailComponent, canActivate: [ AuthGuard ] },
  { path: 'edit-fundraiser/:id', component: EditFundraiserComponent, canActivate: [AuthGuard]},
  { path: 'donate/:id', component: DonationCreateComponent, canActivate: [ AuthGuard ] },
  { path: 'my-donations-list', component: MyDonationsListComponent, canActivate: [ AuthGuard ] },
  { path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard ]},
  { path: 'callback', component: CallbackComponent },
  { path: 'petition', loadChildren: './petition/petition.module#PetitionModule' },
  { path: '404', component: NotFoundComponent },
  { path: '500', component: ServerErrorComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})

export class AppRoutingModule { }

