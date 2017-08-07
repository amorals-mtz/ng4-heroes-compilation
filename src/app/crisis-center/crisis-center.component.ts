/**
 * The 'CrisisCenterComponent' it is the root of the crisis center area,
 * it works as a shell for the crisis management feature area.
 */

import { Component } from '@angular/core';

@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `
})
export class CrisisCenterComponent { }
