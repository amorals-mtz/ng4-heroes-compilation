import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './heroes/hero/hero-detail.component';

// Configure routes HERE
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // <--- Default route when the app starts.
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },     // <--- Configures a parameterised route.
  { path: '**', redirectTo: '' }                              // <--- Configures a wildcard route to intercept any invalid URLs.
];

@NgModule({
  // Ensure there is a <base href="/"> element at the top of the <head> section
  // of 'index.html' file.
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
