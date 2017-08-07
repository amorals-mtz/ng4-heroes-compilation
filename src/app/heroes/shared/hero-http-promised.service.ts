import { Injectable }     from '@angular/core';
import { Http, Headers }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero }  from './models/hero.model';

@Injectable()
export class HeroHttpPromiseService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private heroesUrl = 'api/heroes';   // URL to web API

  /**
   * Constructor.
   */
  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)                          // 'http.get' returns an RxJS Observable
               .toPromise()                                       // converte the Observable to a Promise
               .then(response => response.json().data as Hero[])  // extract the data within the response
               .catch(this.handleError);                          // catch server failures and pass them to an error handler
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().data as Hero)
               .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
               .toPromise()
               .then(res => res.json().data as Hero)
               .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
               .toPromise()
               .then(() => hero)
               .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
               .toPromise()
               .then(() => null)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);    // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
