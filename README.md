# ng4-heroes-compilation

Angular Tour-of-Heroes — Compilation of exercises and best practices.

> Helping you to learn and understand Angular 4.x+

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

## Features!

`ng4-heroes-compilation` is a web application designed to cover the core fundamentals and [Best Practices](https://angular.io/guide/styleguide) of Angular, consolidating most of the exercises based on the *['Tour-de-Heroes' tutorial](https://angular.io/tutorial)* and [Official Angular Fundamentals](https://angular.io/guide/architecture).

This project has included the following features:
  + Project structure is based on [Angular CLI](https://github.com/angular/angular-cli).
  + Following the best practices for the application’s structure.
  + Included a **multi-line template** strings using ES2015's template literals to make the template readable (`src\app\app.component.ts`).
  + Added a **Two-Way data binding** to the `<input>` element using the built-in `ngModel` directive.
  + Using **built-in directive `ngFor`** to bind an array in the component to the template, iterate over them, and display data individually (`src\app\dashboard\dashboard.component.html` and `src\app\heroes\hero-list.component.html`).
  + Binds component methods to user input events, like keystrokes and clicks, and uses **`ngIf` directive** to hide/show HTML content into/from the DOM. (`src\app\heroes\hero-list.component.html`).
  + Included a basic example of `[class]` binding to add or remove CSS class based on an expression (`src\app\heroes\hero-list.component.html`).
    > [class.selected]="hero === selectedHero"

  + Using Interpolations (`{{expression}}`) as **One-Way data binding** to display read-only data of selected items (`src\app\heroes\hero-list.component.html`).
  + ...
  + Created a reusable `Component` to add editable fields to update a model with **two-way data binding** (`src\app\heroes\hero\hero-detail.component`).
  + Changed the component to receive objects as an *input* property preceding the `@Input` decorator (`src\app\heroes\hero\hero-detail.component.ts`).
  + Bind a parent component (`src\app\heroes\hero-list.component`) to a child component (`src\app\heroes\hero\hero-detail.component`).
  + Created and shared a **data service** to get a mock data source using `Promises` (`src\app\heroes\shared\hero-mock.service.ts`).
  + Used the **`ngOnInit` lifecycle hook** to get the data when the `Component` activates (`src\app\heroes\hero-list.component.ts`).
  + Added a **server latency simulation** for mock data source (`src\app\heroes\shared\hero-mock.service.ts`).
  + Included an **Angular router configuration** to enable navigation among different views and their components (`src\app\app.module.ts` => `src\app\app-routing.module.ts`).
  + Using the **`RouterLink` directive** to bind a set of strings that tells the router where to navigate when the user clicks a specific link (`src\app\app.component.ts`).
  + Configured a **Parameterized route** to navigate to an specific element details (`src\app\app.module.ts` => `src\app\app-routing.module.ts`).
  + Changed the way data is received from the parent component property binding. Now, uses the `paramMap` Observable in the `ActivatedRoute` service to take the `id` parameter and fetch data (`src\app\heroes\hero\hero-detail.component`).
  + Included the `Location` service to **navigate backward one step in the browser's history stack** (`src\app\heroes\hero\hero-detail.component`).
  + Refactor the routing configuration into a **Routing Module** (`src\app\app-routing.module.ts`).
  + Included the **uppercase pipe (`| uppercase`)** to format data in capital letters (`src\app\heroes\hero-list.component.html`).
  + Using the [`InMemoryWebApiModule`](https://github.com/angular/in-memory-web-api) to simulate communication with a remote server (`src\app\app.module.ts` and `src\app\in-memory-data.service.ts`).
  + Included an `HTTP Promise` implementation of the service (`src\app\heroes\shared\hero-http-promised.service.ts`);
    > .toPromise()

    * Extracting data with the *`then`* callback.
      > .then(response => response.json().data as Hero[])

    * Handling errors with the *`catch`* callback.
      > .catch(this.handleError);

  + Extended `HTTP Service` to support `post()`, `put()`, and `delete()` methods (`src\app\heroes\shared\hero-http-promised.service.ts`).
  + Added a *search* feature through an `HTTP Observable` service (`src\app\heroes\shared\hero-search.service.ts`).
  + Using the `async` pipe (`AsyncPipe`) to subscribe to an Observable and produce the array of items (`src\app\heroes\hero-search\hero-search.component.html`).
  + Initializing and using a `Subject` as producer of an *observable* event stream, and binding the stream result to a component's property (`src\app\heroes\hero-search\hero-search.component.ts`).
  + ...
  + ... and many more!
  + ...
  + TODO: Include the *boostrap-v4.0.0-alpha.6* library.
  + TODO: *Ahead-of-Time* compilation support.
  + TODO: Official Angular *i18n* support.
  + TODO: Production and development builds.
  + TODO: Tree-Shaking production builds.
  + TODO: Include Sample unit tests with Jasmine and Karma including code coverage via *istanbul*.
  + TODO: *End-to-end tests* with Protractor.
  + TODO: Use *autoprefixer* and *css-lint* support.


## Demo

A fully functional demo is available at <a href="http://demo.io?ref=github">Demo</a>

## How to start

You will need to clone the source code of `ng4-heroes-compilation` GitHub repository.

`git clone https://github.com/amorals-mtz/ng4-heroes-compilation.git`

After the repository is cloned, go inside of the repository directory, install dependencies and start development server:

```
> cd ng4-heroes-compilation
> npm install
> ng serve
```

Navigate to: [http://localhost:4200/](http://localhost:4200/)
