// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarWarsServiceProvider } from '../../providers/star-wars-service/star-wars-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ StarWarsServiceProvider ]
})
export class HomePage {

	starshipRoulette: any;
  starships = [];

  constructor(public navCtrl: NavController, private starWarsServiceProvider: StarWarsServiceProvider) { 

  }

  callStarWarsRoulette() {
  	console.log('the callStarWarsAPI function is being hit');
  	this.starWarsServiceProvider.callStarWarsRoulette()
  	.subscribe(data => {
  		console.log('back to the callStarWarsAPI function!');
  		this.starshipRoulette = data.json();
  		console.log(this.starshipRoulette);
  	});
  }

  findStarship(name) {
    console.log('looking for a starship: ' + name);
    this.starWarsServiceProvider.callStarWarsSearch(name)
    .subscribe(data => {
      this.starships = data.json().results;
      console.log(this.starships);
    })
    
  }

}
