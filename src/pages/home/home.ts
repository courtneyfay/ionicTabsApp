import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarWarsServiceProvider } from '../../providers/star-wars-service/star-wars-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ StarWarsServiceProvider ]
})
export class HomePage {

	starship: any;

  constructor(public navCtrl: NavController, private starWarsServiceProvider: StarWarsServiceProvider) { 

  }

  callStarWarsRoulette() {
  	console.log('the callStarWarsAPI function is being hit');
  	this.starWarsServiceProvider.callStarWarsRoulette()
  	.subscribe(data => {
  		console.log('back to the callStarWarsAPI function!');
  		this.starship = data.json();
  		console.log(this.starship);
  	})
  	
  }

}
