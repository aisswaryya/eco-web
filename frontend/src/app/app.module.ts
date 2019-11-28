import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventHomeComponent } from './events/event-home/event-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventHomeComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4vSXcefSGKfJF9vqQdF_aLjC56JoS5sc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
