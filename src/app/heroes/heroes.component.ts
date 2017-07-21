import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Hero }             from './shared/hero.model';
import { HeroMockService }  from './shared/hero-mock.service';
import { HeroHttpService }  from './shared/hero-http.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.scss' ]
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';

  // Refactor the component's hero property to be of type Hero
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  // The heroes type isn't defined because TypeScript infers it from the HEROES array.
  heroes: Hero[];

  selectedHero: Hero;

  /**
   * Constructor.
   */
  constructor(
    private router: Router,
    /** private heroMockService: HeroMockService */
    private heroHttpService: HeroHttpService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    // Call the Synchronous method to get the list of mock heroes.
    /** this.heroes = this.heroMockService.getHeroesSync(); */

    // Call the Asynchronous method to get the list of mock heroes.
    /** this.heroMockService.getHeroesAsync()
        .then(heroes => this.heroes = heroes); */

    /** this.heroMockService.getHeroesSlowly()
        .then(heroes => this.heroes = heroes); */
    this.heroHttpService.getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  /**
   * Adds the new item to the array.
   */
  add(name: string) {
    name = name.trim();
    if (!name) { return; }  // if given name is non-blank

    this.heroHttpService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
  }

  delete(hero: Hero) {
    this.heroHttpService.delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
