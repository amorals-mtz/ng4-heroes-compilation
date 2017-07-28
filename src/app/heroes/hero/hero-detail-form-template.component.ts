/**
 * This component includes a form to maintain personal information about heroes.
 */
import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { Location }                from '@angular/common';
import { NgForm }                  from '@angular/forms';
import { ActivatedRoute, Params }  from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Hero }             from '../shared/models/hero.model';
import { HeroMockService }  from '../shared/hero-mock.service';
import { HeroHttpService }  from '../shared/hero-http.service';

@Component ({
  selector: 'hero-detail-form-template',
  templateUrl: './hero-detail-form-template.component.html',
  /** styleUrls: [ './hero-detail.component.scss' ] */
})
export class HeroDetailFormTemplateComponent implements OnInit, AfterViewChecked {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  hero: Hero;
  submitted = false;

  heroForm: NgForm;
  @ViewChild('heroForm') currentForm: NgForm;

  formErrors = {
    'name': '',
    'power': ''
  };
  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'power': {
      'required': 'Power is required.'
    }
  };

  /**
   * Constructor.
   *
   * @param {HeroHttpService} heroHttpService - Injects a data service to get and save real data.
   */
  constructor(
    /** private heroMockService: HeroMockService, */
    private heroHttpService: HeroHttpService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    // Use the 'params' Observable to extract the id parameter value from the ActivatedRoute.
    this.route.params
        // If a user re-navigates to this component while a getHero request is still processing,
        // switchMap cancels the old request and then calls HeroService.getHero() again.
        //
        // The item id is a number. Route parameters are always strings. So the route parameter value is converted
        // to a number with the JavaScript (+) operator.
        /** .switchMap((params: Params) => this.heroMockService.getHero(+params['id'])) */
        .switchMap((params: Params) => this.heroHttpService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
  }

  /**
   * Angular calls the ngAfterViewChecked() lifecycle hook method
   * when anything changes in the view.
   */
  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.heroForm) { return; }
    this.heroForm = this.currentForm;
    if (this.heroForm) {
      this.heroForm.valueChanges
          .subscribe(data => this.onValueChanged(data));
    }
  }

  /**
   * Handler that looks for validation errors after every keystroke.
   */
  onValueChanged(data?: any) {
    if (!this.heroForm) { return; }
    const form = this.heroForm.form;

    // iterates over the fields of the component's formErrors object
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      // acquire the field's corresponding form control
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.submitted = true;
  }

  /**
   * Method that navigates backward one step in the browser's history stack
   * using the Location service you injected previously.
   */
  goBack() {
    this.location.back();
  }

  addHero() {
    this.hero = new Hero(42, '', '');
  }

  /**
   * `diagnostic` property to return a JSON representation of the model.
   * TODO: Remove this when we're done.
   */
  get diagnostic() {
    return JSON.stringify(this.hero);
  }

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] && form.controls['name'].value; // Dr. IQ
  }
}
