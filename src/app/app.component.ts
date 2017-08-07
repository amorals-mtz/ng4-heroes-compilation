import { Component }  from '@angular/core';

@Component({
  selector: 'root-app',

  /* Typical link
    <a [routerLink]="['/heroes']">Heroes</a>
  */
  /* Crisis Center link when CC lacks a default
    <a [routerLink]="['/crisis-center/']">Crisis Center</a>
  */
  /* Crisis Center Detail link
    <a [routerLink]="['/crisis-center', 1]">Dragon Crisis</a>
  */
  /* Crisis Center link with optional query params
    <a [routerLink]="['/crisis-center', { foo: 'foo' }]">Crisis Center</a>
  */
   // Multi-line template using ES2015's template literals.
  template: `
    <h1>{{title}}</h1>
    <!-- The <nav> tags don't do anything yet, but they're helpful for styling the links. -->
    <nav>
      <!-- The 'RouterLink' directive is bound to a string that tells the router
      where to navigate when the user clicks the link. -->
      <!-- The 'RouterLinkActive' directive adds the 'active' CSS class
      to the HTML navigation element whose route matches the active route. -->
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/crisis-center']" routerLinkActive="active">Crisis Center</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
      <!-- Specify the named outlet in the link parameters array and bind it to the 'RouterLink'
      with a property binding. -->
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
    </nav>
    <!-- The router will display the components immediately below the 'RouterOutlet' as users navigate through the app. -->
    <router-outlet></router-outlet>
    <!-- Because the router only supports one primary unnamed outlet per template. Include a named outlet.
    Note: A template can also have any number of named outlets.-->
    <router-outlet name="popup"></router-outlet>
  `,
  // The 'templateUrl' property replace the 'template' metadata and point to a new template file.
  // templateUrl: './app.component.html'
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
