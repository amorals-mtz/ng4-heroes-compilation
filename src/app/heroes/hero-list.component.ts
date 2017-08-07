import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// rxjs-imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Hero }                    from './shared/models/hero.model';
import { HeroMockPromiseService }  from './shared/hero-mock-promised.service';
import { HeroHttpPromiseService }  from './shared/hero-http-promised.service';

@Component({
  templateUrl: './hero-list.component.html',
  styleUrls: [ './hero-list.component.scss' ]
})
export class HeroListComponent implements OnInit {

  /*heroes: Promise<Hero[]>; */
  heroes: Observable<Hero[]>;

  selectedId: number = null;
  selectedHero: Hero;

  /**
   * Constructor.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    /*private service: HeroMockPromiseService */
    private service: HeroHttpPromiseService
  ) { }

  ngOnInit() {
    // Check if any optional route parameters are included.
    this.heroes = this.route.paramMap
        .switchMap((params: ParamMap) => {
            // (+) before `params.get()` turns the string into a number
            this.selectedId = +params.get('id');
            return this.getHeroes();
        });
  }

  getHeroes() {
    // Call the Synchronous method HeroMockService.getHeroesSync() to get the list of mock heroes.
    /*this.heroes = this.service.getHeroesSync(); */

    // Call the Asynchronous method HeroMockService.getHeroesAsync() to get the list of mock heroes.
    /*this.service.getHeroesAsync()
        .then(heroes => this.heroes = heroes); */

    /*this.service.getHeroesSlowly()
        .then(heroes => this.heroes = heroes); */
    /*this.service.getHeroes()
        .then(heroes => this.heroes = heroes); */

    // TODO: Enable this service to work with Observables
    return this.service.getHeroes();
  }

  /**
   * Adds the new item to the array.
   */
  add(name: string) {
    name = name.trim();
    if (!name) { return; }  // if given name is non-blank

    // TODO: Fix the service to add new items
    /*this.service.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        }); */
  }

  delete(hero: Hero) {
    // TODO: Fix the service to delete items
    /*this.service.delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        }); */
  }

  isSelected(hero: Hero) {
    return hero.id === this.selectedId;
  }

  onSelect(hero: Hero) {
    this.selectedId = hero.id;
    this.selectedHero = hero;
  }

  gotoDetail() {
    // nav-to-detail
    this.router.navigate(['/hero', this.selectedHero.id]);
  }
}
