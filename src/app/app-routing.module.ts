import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DashboardComponent }      from './dashboard/dashboard.component';
import { HeroListComponent }       from './heroes/hero-list.component';
import { CrisisListComponent }     from './crisis-center/crisis-list.component';
import { FormsFundamentalsComponent }       from './heroes/fundamentals/forms-fundamentals.component';
import { HeroDetailFormTemplateComponent }  from './heroes/hero/hero-detail-form-template.component';
import { HeroDetailFormReactiveComponent }  from './heroes/hero/hero-detail-form-reactive.component';

import { PageNotFoundComponent }   from './shared/not-found.component';

// Configure routes to navigate HERE
const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }                            // <--- Store arbitrary data associated with the specific route.
  },
  {
    path: 'detail/:id',                                       // <--- Configures a parameterised route.
    children: [
      { path: '', component: HeroDetailFormTemplateComponent },
      { path: 'reactive', component: HeroDetailFormReactiveComponent },
    ]
  },
  { path: 'fundamentals', component: FormsFundamentalsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // <--- Default route when the app starts.
  { path: '**', component: PageNotFoundComponent }            // <--- Configures a wildcard route to intercept any invalid URLs.
  /*{ path: '**', redirectTo: '' }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
