import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
// import { FormsModule }    from '@angular/forms';                // <--- NgModel lives here
import { HttpModule }     from '@angular/http';
import { Router }         from '@angular/router';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';    // <--- Routing Module

import { DashboardComponent }      from './dashboard/dashboard.component';
import { HeroListComponent }       from './heroes/hero-list.component';
import { HeroSearchComponent }     from './heroes/hero-search/hero-search.component';
import { CrisisListComponent }     from './crisis-center/crisis-list.component';
import { FormsFundamentalsComponent }       from './heroes/fundamentals/forms-fundamentals.component';
import { HeroDetailFormTemplateComponent }  from './heroes/hero/hero-detail-form-template.component';
import { HeroDetailFormReactiveComponent }  from './heroes/hero/hero-detail-form-reactive.component';
import { KeyUpv1Component, KeyUpv2Component, KeyUpv3Component, KeyUpv4Component } from './heroes/shared/keyup.component';
import { LoopbackComponent }                from './heroes/shared/keyup.component';
import { SubmittedComponent }               from './heroes/shared/submitted.component';
import { ForbiddenValidatorDirective }      from './heroes/shared/forbidden-name.directive';
import { ComposeMessageComponent } from './shared/compose-message.component';
import { PageNotFoundComponent }   from './shared/not-found.component';

import { DialogService }           from './shared/dialog.service';

import { HeroMockService }      from './heroes/shared/hero-mock.service';
import { HeroHttpService }      from './heroes/shared/hero-http.service';

// Imports for loading & configuring the in-memory web API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './core/in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    // FormsModule,                // <--- import this before binding with [(ngModel)]
    HttpModule,                 // <--- import providers for HTTP services
    InMemoryWebApiModule.forRoot(InMemoryDataService),    // <-- simulates communication with a remote server
    AppRoutingModule,           // <--- import your own routing configurations last
  ],
  // The 'declarations' array contains a list of application components,
  // pipes, and directives that belong to the module.
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroListComponent,
    HeroSearchComponent,
    CrisisListComponent,
    FormsFundamentalsComponent,
    HeroDetailFormTemplateComponent,
    HeroDetailFormReactiveComponent,
    KeyUpv1Component, KeyUpv2Component, KeyUpv3Component, KeyUpv4Component,
    LoopbackComponent,
    SubmittedComponent,
    ForbiddenValidatorDirective,
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
