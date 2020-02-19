import {
  Component,
  OnInit
} from '@angular/core';


import { StarWarsService } from './services/star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public people: any;
  public planets: any;
  public films: any;
  public species: any;
  public vehicles: any;
  public starships: any;

  public isLoading: boolean;
  public isError: boolean;

  constructor(
    private StarWarsService: StarWarsService,
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.isError = false;

    let promises: Promise<any>[] = [];
    promises.push(this.StarWarsService.getResource('people'));
    promises.push(this.StarWarsService.getResource('planets'));
    promises.push(this.StarWarsService.getResource('films'));
    promises.push(this.StarWarsService.getResource('species'));
    promises.push(this.StarWarsService.getResource('vehicles'));
    promises.push(this.StarWarsService.getResource('starships'));

    Promise.all(promises)
    .then((response: any) => {
      this.people = response[0].results;
      this.planets = response[1].results;
      this.films = response[2].results;
      this.species = response[3].results;
      this.vehicles = response[4].results;
      this.starships = response[5].results;
    })
    .catch(() => {
      this.isError = true;
    })
    .finally(() => {
      this.isLoading = false;
    });
  }
}
