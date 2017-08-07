import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterHomeComponent }  from './crisis-center-home.component';
import { CrisisCenterComponent }      from './crisis-center.component';
import { CrisisListComponent }        from './crisis-list/crisis-list.component';
import { CrisisDetailComponent }      from './crisis-detail/crisis-detail.component';

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [                               // <--- Define child routes within the parent route.
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {    // <--- to navigate HERE, for a crisis with id=2, the full URL is /crisis-center/2 (/crisis-center + '' + '/2').
            path: ':id',                      // <--- Since the 'Crisis Detail' component is a child of the Crisis List,
            component: CrisisDetailComponent  //      the component will be re-used as you select different crises.
          },
          {    // <--- to navigate HERE, the full URL is /crisis-center (/crisis-center + '' + '').
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule { }
