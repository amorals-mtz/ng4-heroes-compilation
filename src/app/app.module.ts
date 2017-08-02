import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';                // <--- NgModel lives here
import { HttpModule }     from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';    // <--- Routing Module

// Imports for loading & configuring the in-memory web API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './core/in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroesDetailModule }   from './heroes/heroes-detail.module';
import { HeroSearchComponent }  from './heroes/hero-search/hero-search.component';
import { HeroMockService }      from './heroes/shared/hero-mock.service';
import { HeroHttpService }      from './heroes/shared/hero-http.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,                // <--- import this before binding with [(ngModel)]
    HttpModule,                 // <--- import providers for HTTP services
    InMemoryWebApiModule.forRoot(InMemoryDataService),    // <-- simulates communication with a remote server
    HeroesDetailModule,
    AppRoutingModule,           // <--- import your own routing configurations last
  ],
  // The 'declarations' array contains a list of application components,
  // pipes, and directives that belong to the module.
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroSearchComponent,
  ],
  // The 'declarations' array contains a list of application components,
  // pipes, and directives that belong to the module.
  providers: [
    HeroMockService,
    HeroHttpService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
