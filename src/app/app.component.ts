import { Component }  from '@angular/core';

@Component({
  selector: 'root-app',

  // Multi-line template using ES2015's template literals.
  template: `
    <h1>{{title}}</h1>
    <!-- The <nav> tags don't do anything yet, but they're helpful for styling the links. -->
    <nav>
      <!-- The 'routerLink' directive is bound to a string that tells the router where to navigate when the user clicks the link. -->
      <!-- The 'routerLinkActive' directive adds a class to the HTML navigation element whose route matches the active route. -->
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/fundamentals" routerLinkActive="active">Basics</a>
    </nav>
    <!-- The router will display the components immediately below the <router-outlet> as users navigate through the app. -->
    <router-outlet></router-outlet>
  `,
  // The 'templateUrl' property replace the 'template' metadata and point to a new template file.
  // templateUrl: './app.component.html'
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
