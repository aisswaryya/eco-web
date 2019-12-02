import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventHomeComponent } from './events/event-home/event-home.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventService } from './events/services/event.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventHomeComponent,
    EventCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GooglePlaceModule,
    HttpClientModule,
    NgbModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4vSXcefSGKfJF9vqQdF_aLjC56JoS5sc'
    })
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
