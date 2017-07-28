import { NgModule }                          from '@angular/core';
import { CommonModule }                      from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { HeroDetailFormTemplateComponent }  from './hero/hero-detail-form-template.component';
import { HeroDetailFormReactiveComponent }  from './hero/hero-detail-form-reactive.component';
import { ForbiddenValidatorDirective }      from './shared/forbidden-name.directive';
import { SubmittedComponent }               from './shared/submitted.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeroDetailFormTemplateComponent,
    HeroDetailFormReactiveComponent,
    ForbiddenValidatorDirective,
    SubmittedComponent,
  ],
  exports: [
    HeroDetailFormTemplateComponent,
    HeroDetailFormReactiveComponent,
    ForbiddenValidatorDirective,
    SubmittedComponent,
  ]
})
export class HeroesDetailModule { }
