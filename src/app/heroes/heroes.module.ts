import { NgModule }                          from '@angular/core';
import { CommonModule }                      from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

// third party imports
// import { MdButtonModule, MdCheckboxModule, ... }  from '@angular/material';

// layouts
import { HeroListComponent }    from './hero-list.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { HeroDetailFormTemplateComponent }  from './hero/hero-detail-form-template.component';
import { HeroDetailFormReactiveComponent }  from './hero/hero-detail-form-reactive.component';
import { SubmittedComponent }               from './shared/submitted.component';
import { ForbiddenValidatorDirective }      from './shared/forbidden-name.directive';

/*import { HeroService } from './hero.service';*/

import { HeroRoutingModule } from './heroes-routing.module';

// other imports
// ...

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    // MdButtonModule, MdCheckboxModule, …
    HeroRoutingModule,
  ],
  declarations: [
    HeroListComponent,
    HeroSearchComponent,
    HeroDetailFormTemplateComponent,
    HeroDetailFormReactiveComponent,
    SubmittedComponent,
    ForbiddenValidatorDirective,
  ],
  exports: [
    HeroSearchComponent,
    /*HeroDetailFormTemplateComponent,
    HeroDetailFormReactiveComponent,
    SubmittedComponent,
    ForbiddenValidatorDirective, */
    // MdButtonModule, MdCheckboxModule, …
  ],
  /*providers: [ HeroService ]*/
})
export class HeroesModule { }
