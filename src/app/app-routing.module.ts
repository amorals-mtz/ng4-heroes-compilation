import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailFormTemplateComponent }  from './heroes/hero/hero-detail-form-template.component';
import { HeroDetailFormReactiveComponent }  from './heroes/hero/hero-detail-form-reactive.component';

// Configure routes HERE
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },           // <--- Default route when the app starts.
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailFormTemplateComponent },  // <--- Configures a parameterised route.
  { path: 'reactive/:id', component: HeroDetailFormReactiveComponent },
  { path: '**', redirectTo: '' }                                       // <--- Configures a wildcard route to intercept any invalid URLs.
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
