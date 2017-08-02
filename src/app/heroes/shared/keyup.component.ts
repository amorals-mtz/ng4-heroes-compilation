import { Component } from '@angular/core';

/**
 * This example gets the user input after each keystroke.
 */
@Component({
  selector: 'key-up-v1',
  template: `
    <!-- Listen to the (keyup) event of an input box to get the user's input. -->
    <input (keyup)="onKey($event)">
    <p>{{ values }}</p>
    <p>{{ keys }}</p>
  `
})
export class KeyUpv1Component {
  values = '';
  keys = '';

  /* onKey(event: any) {             // without type info
    // appends the contents of the input box value
    this.values += event.target.value + ' | ';

    // accumulate the individual keys
    // this.keys += event.key + ' | ';
  } */

  onKey(event: KeyboardEvent) {   // with type info
    // Not all elements have a value property so it casts target to an input element.
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}

//////////////////////////////////////////

/**
 * This example uses a template reference variable to implement a keystroke loopback
 * in a simple template.
 */
@Component({
  selector: 'loop-back',
  template: `
    <!-- Declare a template reference variable using an identifier with a hash (or pound) character (#). -->
    <!-- These variables provide direct access to an element from within the template. -->
    <input #box
      (keyup)="0">
    <!-- You can reference #box template variable from any sibling or child of the <input> element. -->
    <p>{{ box.value }}</p>
  `
})
export class LoopbackComponent { }

//////////////////////////////////////////

/**
 * This example uses a template reference variable (#) to get the user's input.
 */
@Component({
  selector: 'key-up-v2',
  template: `
    <input #box
      (keyup)="onKey(box.value)">
    <p>{{ values }}</p>
  `
})
export class KeyUpv2Component {
  values = '';

  onKey(value: string) {
    this.values += value + ' | ';
  }
}

//////////////////////////////////////////

@Component({
  selector: 'key-up-v3',
  template: `
    <!-- The (keyup) event handler hears every keystroke. -->
    <!-- An easier way to reduce the noise of examine every $event.keyCode and take action
    only when the key is Enter. It's binding to Angular's keyup.enter pseudo-event. -->
    <input #box
      (keyup.enter)="onEnter(box.value)">
    <p>{{ value }}</p>
  `
})
export class KeyUpv3Component {
  value = '';

  onEnter(value: string) {
    this.value = value;
  }
}

//////////////////////////////////////////

@Component({
  selector: 'key-up-v4',
  template: `
    <!-- Listen to both the Enter key and the blur event. -->
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">
    <p>{{ value }}</p>
  `
})
export class KeyUpv4Component {
  value = '';

  update(value: string) {
    this.value = value;
  }
}
