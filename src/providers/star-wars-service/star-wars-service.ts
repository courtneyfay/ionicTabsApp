import { HttpModule, Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StarWarsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StarWarsServiceProvider {

	data: any;

  constructor(public http: Http) { // HttpClient
     console.log('Hello StarWarsServiceProvider Provider');
  }

  callStarWarsRoulette() {
  	console.log('the callStarWarsApi function is being hit');
  	// choose a random starship to grab
  	let n = Math.floor(Math.random() * 17);
  	console.log(n);

    return this.http.get(`https://swapi.co/api/starships/${n}`);
  }
}

