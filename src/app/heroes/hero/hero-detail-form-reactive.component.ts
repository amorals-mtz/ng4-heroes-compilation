/**
 * This component includes a form to maintain personal information about heroes.
 */
import { Component, OnInit }       from '@angular/core';
import { Location }                from '@angular/common';
import { FormGroup, FormBuilder, Validators }  from '@angular/forms';
import { ActivatedRoute, Params }  from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Hero }                    from '../shared/models/hero.model';
import { HeroMockService }         from '../shared/hero-mock.service';
import { HeroHttpService }         from '../shared/hero-http.service';
import { forbiddenNameValidator }  from '../shared/forbidden-name.directive';

@Component ({
  selector: 'hero-detail-form-reactive',
  templateUrl: './hero-detail-form-reactive.component.html',
  /** styleUrls: [ './hero-detail.component.scss' ] */
})
export class HeroDetailFormReactiveComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  hero: Hero;
  submitted = false;

  heroForm: FormGroup;

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
    // private heroMockService: HeroMockService,
    private heroHttpService: HeroHttpService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
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

    this.buildForm();
  }

  /**
   * Create the Angular form control model explicitly with the help of the FormBuilder class.
   */
  buildForm() {
    // declare the form control model
    this.heroForm = this.fb.group({
      'name': [this.hero.name, [
          // include built-in validators
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24),
          forbiddenNameValidator(/bob/i)
        ]
      ],
      'alterEgo': [this.hero.alterEgo],
      'power':    [this.hero.power, Validators.required]
    });

    this.heroForm.valueChanges
        .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  /**
   * Handler that looks for validation errors after every keystroke.
   */
  onValueChanged(data?: any) {
    if (!this.heroForm) { return; }
    const form = this.heroForm;

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
    // replace the hero object with the combined values of the form:
    this.hero = this.heroForm.value;
  }

  /**
   * Method that navigates backward one step in the browser's history stack
   * using the Location service you injected previously.
   */
  goBack() {
    this.location.back();
  }

  /**
   * Discards pending changes and creates a brand new `hero` model object.
   */
  addHero() {
    this.hero = new Hero(42, '', '');
    this.buildForm();
  }
}
