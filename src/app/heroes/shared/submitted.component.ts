import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero }                    from './models/hero.model';
import { HeroMockPromiseService }  from './hero-mock-promised.service';
import { HeroHttpPromiseService }  from './hero-http-promised.service';

@Component({
  selector: 'hero-submitted',
  template: `
  <!-- <div [hidden]="!submitted"> -->
  <div *ngIf="submitted">
    <h2>You submitted the following:</h2>
    <div class="row">
      <div class="col-xs-3">Name</div>
      <div class="col-xs-9 pull-left">{{ hero.name }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Alter Ego</div>
      <div class="col-xs-9 pull-left">{{ hero.alterEgo }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Power</div>
      <div class="col-xs-9 pull-left">{{ hero.power }}</div>
    </div>
    <br>
    <br>
    <button class="btn btn-primary" type="button" (click)="save()">Save</button>
    <button class="btn btn-secondary" type="button" (click)="onClick()">Edit</button>
  </div>
  `
})
export class SubmittedComponent {
  // Declare your property as an input property by preceding it with the @Input decorator.
  // Used when you need to receive an object from a parent component property binding,
  // like this: <hero-submitted [hero]="selectedHero"></hero-submitted>
  @Input()  hero: Hero;
  @Input()  submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();

  /**
   * Constructor.
   *
   * @param {HeroHttpService} service - Injects a data service to get and save real data.
   */
  constructor(
    /*private service: HeroMockPromiseService */
    private service: HeroHttpPromiseService
  ) { }


  onClick() {
    this.submittedChange.emit(false);
  }

  /**
   * Persists item changes.
   */
  save() {
    this.service.update(this.hero)
        .then(/*() => this.goBack()*/);    // navigates back to the previous view
  }
}
