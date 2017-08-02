import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './forms-fundamentals.component.html'
})
export class FormsFundamentalsComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  clicks = 1;

  constructor() { }

  ngOnInit() {
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  onClick(event: any) {
    const eventMsg = event ? ' Event target is ' + event.target.tagName  : '';
    console.log(`Click #${this.clicks++}. ${eventMsg}`);
  }
}
