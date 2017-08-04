import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [    // set an animation trigger named 'routeAnimation'
    state('*',                   // wildcard state that matches any animation state
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [       // transitions that ease in the component from the left of the screen as it enters the app view.
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [       // transitions to animate the component down as it leaves the app view.
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);
