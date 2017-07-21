import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero }               from '../shared/hero.model';
import { HeroSearchService }  from '../shared/hero-search.service';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.scss' ],
  providers: [ HeroSearchService ]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();    // A Subject is a producer of an observable event stream;

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize the heroes property
    this.heroes = this.searchTerms
          .debounceTime(300)        // wait 300ms after each keystroke before considering the term
          .distinctUntilChanged()   // ignore if next search term is same as previous
          .switchMap(term => term   // switch to new observable each time the term changes, it preserves the original request order
                                    // while returning only the observable from the most recent http method call.
                                    // Results from prior calls are canceled and discarded
            // return the http search observable
            ? this.heroSearchService.search(term)
            // or the observable of empty heroes if there was no search term
            : Observable.of<Hero[]>([]))
          .catch(error => {         // intercept a failed observable
            // TODO: add real error handling
            console.log(error);
            return Observable.of<Hero[]>([]);
          });
  }

  // Push a search term into this subject's observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
