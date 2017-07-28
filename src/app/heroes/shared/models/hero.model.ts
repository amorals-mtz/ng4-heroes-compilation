/**
 * Properties of a Hero object.
 */
export class Hero {
  id: number;
  name: string;         // required with minimum 5 chracters
  power: string;        // required
  alterEgo?: string;    // optional
  // address?: {
  //   street?: string;    // required
  //   postcode?: string;
  // };

  constructor(
    id: number,
    name: string,
    power: string,
    alterEgo?: string
  ) { }
}
