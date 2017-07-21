import { Injectable }  from '@angular/core';

import { Hero }        from './hero.model';
import { HEROES }      from './mock-heroes';

// The @Injectable() decorator tells TypeScript to emit metadata about the service.
// The metadata specifies that Angular may need to inject other dependencies into this service.
@Injectable()
export class HeroMockService {

  /**
   * Synchronous method which returns a list of mock 'heroes' immediately.
   */
  getHeroesSync(): Hero[] {
    return HEROES;
  }

  /**
   * Asynchronous method which returns a resolved Promise with the results or an error.
   */
  getHeroesAsync(): Promise<Hero[]> {

    // When using a remote server, users don't have to wait for the server to respond;
    // additionally, you aren't able to block the UI during the wait.
    //
    // To coordinate the view with the response, you can use Promises, which is an asynchronous technique
    // that changes the signature of your methods.
    return Promise.resolve(HEROES);
  }

  /**
   * Method to simulate a slow connection.
   */
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
        // Simulate server latency with 2 second delay
        setTimeout(() => resolve(this.getHeroesAsync()), 2000);
    });
  }

  /**
   * ...
   */
  getHero(id: number): Promise<Hero> {
    return this.getHeroesAsync()
        .then(heroes => heroes.find(hero => hero.id === id));
  }
}
