import { Component, Input, OnInit }  from '@angular/core';
import { ActivatedRoute, Params }    from '@angular/router';
import { Location }                  from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero }             from '../shared/hero.model';
import { HeroMockService }  from '../shared/hero-mock.service';
import { HeroHttpService }  from '../shared/hero-http.service';

@Component ({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})
export class HeroDetailComponent implements OnInit {
  // Declare your property as an input property by preceding it with the @Input decorator.
  // Used when you need to receive an object from a parent component property binding,
  // like this: <hero-detail [hero]="selectedHero"></hero-detail>
  // @Input() hero: Hero;
  hero: Hero;

  /**
   * Constructor.
   */
  constructor(
    // private heroMockService: HeroMockService,
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
        // .switchMap((params: Params) => this.heroMockService.getHero(+params['id']))
        .switchMap((params: Params) => this.heroHttpService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
  }

  /**
   * Method that navigates backward one step in the browser's history stack
   * using the Location service you injected previously.
   */
  goBack() {
    this.location.back();
  }

  /**
   * Persists item changes.
   */
  save() {
    this.heroHttpService.update(this.hero)
        .then(() => this.goBack());           // navigates back to the previous view
  }
}
