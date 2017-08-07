import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DashboardComponent }          from './dashboard/dashboard.component';
import { FormsFundamentalsComponent }  from './fundamentals/forms-fundamentals.component';
import { ComposeMessageComponent }     from './shared/compose-message.component';
import { PageNotFoundComponent }       from './shared/not-found.component';

// Configure routes to navigate HERE
const appRoutes: Routes = [
  {                                                        // <--- Configures a secondary route.
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fundamentals', component: FormsFundamentalsComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },  // <--- Default route when the app launches with an empty path.
  { path: '**', component: PageNotFoundComponent }         // <--- Configures a wildcard route to intercept any invalid URLs.
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
