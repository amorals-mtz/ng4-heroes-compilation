import { Component, OnInit, HostBinding }   from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// rxjs-imports
import 'rxjs/add/operator/switchMap';

import { slideInDownAnimation }   from '../../animations';
import { Crisis, CrisisService }  from '../shared/crisis.service';
import { DialogService }          from '../../shared/dialog.service';

@Component ({
  templateUrl: './crisis-detail.component.html',
  styleUrls: [ './crisis-detail.component.scss' ],
  animations: [ slideInDownAnimation ]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  crisis: Crisis;
  editName: string;

  /**
   * Constructor.
   *
   * @param {CrisisService} service - Injects a data service to get and save real data.
   * @param {DialogService} dialogService - .
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    console.log('* Init <crisis-detail>');

    // Use the 'paramMap' Observable to extract the 'id' parameter value from the ActivatedRoute.
    // DO NOT USE 'params' or 'queryParams', they may be deprecated in a future Angular version.
    // USE 'paramMap' or 'queryParamMap' instead.
    this.route.params
          // If a user re-navigates to this component while a getHero request is still processing,
          // switchMap cancels the old request and then calls HeroService.getHero() again.
          //
          // The item id is a number. Route parameters are always strings. So the route parameter value
          // is converted to a number with the JavaScript (+) operator.
          .switchMap( (params: ParamMap) => this.service.getCrisis(params['id']) )
          .subscribe( (crisis: Crisis) => {
            if (crisis) {
              this.editName = crisis.name;
              this.crisis = crisis;
            } else { // id not found
              this.gotoCrises();
            }
          });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }

    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  /**
   * Return to the crises list from this detail view sending the viewed 'crisis.id'.
   * This is a nice-to-have feature to show the viewed hero as preselected in the list.
   */
  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }
}
