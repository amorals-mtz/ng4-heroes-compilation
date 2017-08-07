/**
 * This component includes a form to maintain personal information about heroes.
 */

import { Component, OnInit, AfterViewChecked, ViewChild, HostBinding } from '@angular/core';
import { Location }  from '@angular/common';
import { NgForm }    from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { slideInDownAnimation } from '../../animations';

// rxjs-imports
import 'rxjs/add/operator/switchMap';

import { Hero }                    from '../shared/models/hero.model';
import { HeroMockPromiseService }  from '../shared/hero-mock-promised.service';
import { HeroHttpPromiseService }  from '../shared/hero-http-promised.service';

@Component ({
  selector: 'hero-detail-form-template',
  templateUrl: './hero-detail-form-template.component.html',
  styleUrls: [ './hero-detail.component.scss' ],
  animations: [ slideInDownAnimation ]
})
export class HeroDetailFormTemplateComponent implements OnInit, AfterViewChecked {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  hero: Hero;
  submitted = false;

  heroForm: NgForm;
  // Inject a template variable by passing the name of that variable as a string.
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
   * @param {HeroHttpService} service - Injects a data service to get and save real data.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    /*private service: HeroMockPromiseService */
    private service: HeroHttpPromiseService
  ) { }

  ngOnInit() {
    console.log('* Init <hero-detail>');

    // Use the 'paramMap' Observable to extract the 'id' parameter value from the ActivatedRoute.
    // DO NOT USE 'params' or 'queryParams', they may be deprecated in a future Angular version.
    // USE 'paramMap' or 'queryParamMap' instead.
    this.route.paramMap
        // If a user re-navigates to this component while a getHero request is still processing,
        // switchMap cancels the old request and then calls HeroService.getHero() again.
        //
        // The item id is a number. Route parameters are always strings. So the route parameter value
        // is converted to a number with the JavaScript (+) operator.
        .switchMap( (params: ParamMap) => this.service.getHero(+params.get('id')) )
        .subscribe( (hero: Hero) => this.hero = hero );


    /* +++++++++++++++++++++++++++++++++ */
    // No-Observable alternative: When you know for certain that your compoennt 'HeroDetailComponent'
    // instance will never, never, ever be re-used, you can simplify the code with the snapshot.

    // (+) converts string 'id' to a number
    /*const _id = +this.route.snapshot.params['id'];

    this.service.getHero(_id)
        .then( (hero: Hero) => this.hero = hero ); */
  }

  /**
   * Angular calls the ngAfterViewChecked() lifecycle hook method
   * when anything changes in the view.
   */
  ngAfterViewChecked() {
    this.formChanged();
  }

  /**
   * When there is a new `heroForm` model, this method subscribes
   * to its valueChanges Observable property.
   */
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
   * The `data` object passed contains the current element values.
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

  /**
   * Return to the heroes list from this detail view sending the viewed 'hero.id'.
   * This is a nice-to-have feature to show the viewed hero as preselected in the list.
   */
  gotoHeroes() {
    const heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

  addHero() {
    this.hero = new Hero(42, '', '');
  }

  /**
   * This property returns a JSON representation of the model.
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
