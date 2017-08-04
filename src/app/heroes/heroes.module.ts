import { NgModule }                          from '@angular/core';
import { CommonModule }                      from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { BrowserAnimationsModule }           from '@angular/platform-browser/animations';

// third party imports
// import { MdButtonModule, MdCheckboxModule, ... }  from '@angular/material';

// layouts
import { HeroListComponent }    from './hero-list.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';

import { FormsFundamentalsComponent }       from './fundamentals/forms-fundamentals.component';
import { HeroDetailFormTemplateComponent }  from './hero/hero-detail-form-template.component';
import { HeroDetailFormReactiveComponent }  from './hero/hero-detail-form-reactive.component';
import { KeyUpv1Component, KeyUpv2Component, KeyUpv3Component, KeyUpv4Component } from './shared/keyup.component';
import { LoopbackComponent }                from './shared/keyup.component';
import { SubmittedComponent }               from './shared/submitted.component';
import { ForbiddenValidatorDirective }      from './shared/forbidden-name.directive';

// other imports
// ...

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    // MdButtonModule, MdCheckboxModule, …
  ],
  declarations: [
    HeroListComponent,
    HeroSearchComponent,

    FormsFundamentalsComponent,
    HeroDetailFormTemplateComponent,
    HeroDetailFormReactiveComponent,
    KeyUpv1Component, KeyUpv2Component, KeyUpv3Component, KeyUpv4Component,
    LoopbackComponent,
    SubmittedComponent,
    ForbiddenValidatorDirective,
  ],
  exports: [
    /** HeroDetailFormTemplateComponent,
    HeroDetailFormReactiveComponent,
    SubmittedComponent,
    ForbiddenValidatorDirective, */
    // MdButtonModule, MdCheckboxModule, …
  ]
})
export class HeroesModule { }
