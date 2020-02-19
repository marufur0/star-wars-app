import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://swapi.co/api/' 

@Injectable({
  'providedIn': 'root'
})
export class StarWarsService {
  constructor(
    private HttpClient: HttpClient,
  ) {}

  getResource(resource: any): Promise<any> {
    return this.HttpClient.get(BASE_URL + resource + '/').toPromise();
  }
}
