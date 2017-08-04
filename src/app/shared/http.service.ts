import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class Model {
  constructor(
    public id: number = 0,
    public name: string = '',
  ) {}
}

@Injectable()
export class HttpService {

  private url = '';   // Service address

  constructor(private http: Http) { }

  // Send GET request to the server
  public get(): Observable<Model[]> {
    return this.http.get(this.url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public getById(id: string): Observable<Model> {
    return this.http.get(`${this.url}/${id}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // Send POST request to the server, add a new element to the database.
  public add(body: Model): Observable<Model[]> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    /** headers.append('Content-Type', 'application/json; charset=utf-8'); */
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, body, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // Send PUT request and update the element in the database.
  public update(body: Model): Observable<Model[]> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.url}/${body['id']}`, body, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // Send DELETE request and remove the element from the database.
  public remove(id: string): Observable<Model[]> {
    return this.http.delete(`${this.url}/${id}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any, cought: Observable<any>): any {
    let message = '';

    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`;
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }
}
