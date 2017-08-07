import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CrisisService }        from './shared/crisis.service';

// layouts
import { CrisisCenterHomeComponent }  from './crisis-center-home.component';
import { CrisisCenterComponent }      from './crisis-center.component';
import { CrisisListComponent }        from './crisis-list/crisis-list.component';
import { CrisisDetailComponent }      from './crisis-detail/crisis-detail.component';

import { CrisisCenterRoutingModule }  from './crisis-center-routing.module';

// other imports
// ...

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule,
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisListComponent,
    CrisisDetailComponent,
  ],
  providers: [
    CrisisService
  ]
})
export class CrisisCenterModule { }
