import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailFormTemplateComponent }  from './hero/hero-detail-form-template.component';
import { HeroDetailFormReactiveComponent }  from './hero/hero-detail-form-reactive.component';

const heroesRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }  // <--- Store arbitrary data associated with the specific route.
  },
  {
    path: 'hero/:id',               // <--- Configures a parameterised route.
    children: [
      { path: '', component: HeroDetailFormTemplateComponent },
      { path: 'reactive', component: HeroDetailFormReactiveComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }
