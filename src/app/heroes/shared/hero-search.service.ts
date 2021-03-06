import { Injectable }  from '@angular/core';
import { Http }        from '@angular/http';

import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }  from './models/hero.model';

@Injectable()
export class HeroSearchService {

  /**
   * Constructor.
   */
  constructor(private http: Http) { }

  search(term: string): Observable<Hero[]> {
    const url = `app/heroes/?name=${term}`;
    return this.http.get(url)
               .map(response => response.json().data as Hero[]);
  }
}
