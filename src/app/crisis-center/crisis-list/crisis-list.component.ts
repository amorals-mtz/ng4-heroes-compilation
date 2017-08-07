import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// rxjs-imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Crisis, CrisisService }  from '../shared/crisis.service';

@Component({
  templateUrl: './crisis-list.component.html',
  styleUrls: [ './crisis-list.component.scss' ]
})
export class CrisisListComponent implements OnInit {

  crises: Observable<Crisis[]>;
  selectedId: number = null;

  /**
   * Constructor.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
    // Check if any optional route parameters are included.
    this.crises = this.route.paramMap
        .switchMap((params: ParamMap) => {
            // (+) before `params.get()` turns the string into a number
            this.selectedId = +params.get('id');
            return this.service.getCrises();
        });
  }

  isSelected(crisis: Crisis) {
    return crisis.id === this.selectedId;
  }

  onSelect(crisis: Crisis) {
    this.selectedId = crisis.id;

    // Navigate with relative link,
    // you only need to add the id to the existing path (/crisis-center).
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }
}
