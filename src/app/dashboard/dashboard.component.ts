import { Component, OnInit }  from '@angular/core';

import { Hero }             from '../heroes/shared/models/hero.model';
import { HeroMockService }  from '../heroes/shared/hero-mock.service';
import { HeroHttpService }  from '../heroes/shared/hero-http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {

  // Define your provider array property.
  heroes: Hero[] = [];

  /**
   * The constructor itself does nothing. The parameter simultaneously injects
   * the HeroService in the constructor and hold it in a private field.
   *
   * A constructor should not contain complex logic, especially a constructor that calls a server,
   * such as a data access method. The constructor is for simple initializations,
   * like wiring constructor parameters to properties.
   *
   * Injects the 'HeroService' service.
   */
  constructor(
    /** private heroMockService: HeroMockService */
    private heroHttpService: HeroHttpService
  ) { }

  /**
   * Write an 'ngOnInit' method with the initialization logic inside.
   */
  ngOnInit() {

    // Call the service to get items.
    /** this.heroMockService.getHeroesAsync()
        .then(heroes => this.heroes = heroes.slice(1, 5)); */
    this.heroHttpService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
