/**
 * This component includes a form to maintain personal information about heroes.
 */
import { Component, OnInit }       from '@angular/core';
import { Location }                from '@angular/common';
import { FormGroup, FormBuilder, Validators }  from '@angular/forms';
import { ActivatedRoute, Params }  from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Hero }                    from '../shared/models/hero.model';
import { HeroMockPromiseService }  from '../shared/hero-mock-promised.service';
import { HeroHttpPromiseService }  from '../shared/hero-http-promised.service';
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
   * @param {HeroHttpService} service - Injects a data service to get and save real data.
   */
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    /*private heroMockService: HeroMockPromiseService */
    private service: HeroHttpPromiseService
  ) { }

  ngOnInit() {
    // Use the 'params' Observable to extract the id parameter value from the ActivatedRoute.
    this.route.params
        // If a user re-navigates to this component while a getHero request is still processing,
        // switchMap cancels the old request and then calls HeroService.getHero() again.

        // The item id is a number. Route parameters are always strings. So the route parameter value is converted
        // to a number with the JavaScript (+) operator.
        .switchMap((params: Params) => this.service.getHero(+params['id']))
        .subscribe(hero => {
          this.hero = hero;
          this.buildForm();    // Call the `buildForm` method here because that's when you'll have the hero data.
         });
  }

  /**
   * Create the Angular form control model explicitly with the help of the FormBuilder class.
   */
  buildForm() {
    // When using Reactive Forms the component class is now responsible for defining and managing
    // the form control model.

    // Angular no longer derives the control model from the template so you can no longer query for it.
    // Declare the form control model explicitly with the help of the FormBuilder class.
    // Each control spec is a control name with an array value. The first array element is
    // the current value of the corresponding hero field. The optional second value is a validator function
    // or an array of validator functions.
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

  /**
   * Reactive Forms component should not use data binding to automatically update
   * data model properties. The developer decides when and how to update the data model
   * from control values.
   */
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
