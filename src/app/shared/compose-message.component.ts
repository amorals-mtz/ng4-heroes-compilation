/**
 * Popup that stays open, even when switching between pages in the application,
 * until the user closes it by sending the message or canceling.
 */

import { Component, HostBinding } from '@angular/core';
import { Router }                 from '@angular/router';

import { slideInDownAnimation }   from '../animations';

@Component({
  moduleId: module.id,
  templateUrl: './compose-message.component.html',
  styles: [ ':host { position: relative; bottom: 10%; }' ],
  animations: [ slideInDownAnimation ]
})
export class ComposeMessageComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  details: string;
  sending = false;

  constructor(private router: Router) { }

  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {    // Simulates latency by waiting a second before "sending" the message and closing the popup.
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  /**
   * Close the Popup.
   */
  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet.
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}
