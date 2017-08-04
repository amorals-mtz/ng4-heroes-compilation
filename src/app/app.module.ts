import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';                // <--- NgModel lives here
import { HttpModule }     from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router }         from '@angular/router';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';    // <--- Routing Module

import { HeroesModule }         from './heroes/heroes.module';

import { DashboardComponent }           from './dashboard/dashboard.component';
import { CrisisListComponent }          from './crisis-center/crisis-list.component';
import { FormsFundamentalsComponent }   from './fundamentals/forms-fundamentals.component';
import { KeyUpv1Component, KeyUpv2Component, KeyUpv3Component, KeyUpv4Component } from './fundamentals/shared/keyup.component';
import { LoopbackComponent }            from './fundamentals/shared/keyup.component';
import { ComposeMessageComponent }      from './shared/compose-message.component';
import { PageNotFoundComponent }        from './shared/not-found.component';

import { DialogService }        from './shared/dialog.service';

import { HeroMockService }      from './heroes/shared/hero-mock.service';
import { HeroHttpService }      from './heroes/shared/hero-http.service';

// Imports for loading & configuring the in-memory web API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './core/in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,                // <--- import this before binding with [(ngModel)]
    HttpModule,                 // <--- import providers for HTTP services
    BrowserAnimationsModule,
    HeroesModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),    // <-- simulates communication with a remote server
    AppRoutingModule,           // <--- import your own routing configurations last (ORDER MATTERS)
  ],
  // The 'declarations' array contains a list of application components,
  // pipes, and directives that belong to the module.
  declarations: [
    AppComponent,
    DashboardComponent,
    CrisisListComponent,
    FormsFundamentalsComponent,
    KeyUpv1Component, KeyUpv2Component, KeyUpv3Component, KeyUpv4Component,
    LoopbackComponent,
    ComposeMessageComponent,
    PageNotFoundComponent,
  ],
  // The 'declarations' array contains a list of application components,
  // pipes, and directives that belong to the module.
  providers: [
    HeroMockService,
    HeroHttpService,
    DialogService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
