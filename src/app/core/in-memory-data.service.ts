import { InMemoryDbService } from 'angular-in-memory-web-api';

/**
 * Note: The in-memory web API is only useful in the early stages of development
 * and for demonstrations.
 */
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 100,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice', power: 'Really Smart' },
      { id: 12, name: 'Narco', power: 'Super Flexible' },
      { id: 13, name: 'Bombasto', power: 'Super Hot' },
      { id: 14, name: 'Celeritas', power: 'Weather Changer' },
      { id: 15, name: 'Magneta', power: 'Super Flexible' },
      { id: 16, name: 'RubberMan', power: 'Weather Changer' },
      { id: 17, name: 'Dynama', power: 'Super Hot' },
      { id: 18, name: 'Dr IQ', power: 'Really Smart' },
      { id: 19, name: 'Magma', power: 'Super Hot' },
      { id: 20, name: 'Tornado', power: 'Weather Changer' }
    ];
    return {heroes};
  }
}
