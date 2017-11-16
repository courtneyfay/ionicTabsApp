import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	starships: any;

  constructor(public navCtrl: NavController, private http: Http) { 

  }

  callStarWarsAPI() {
  	console.log('the callStarWarsAPI function is being hit');

  	// choose a random starship to grab
  	let n = Math.floor(Math.random() * 17);
  	console.log(n);

  	this.http.get(`https://swapi.co/api/starships/${n}`)
  	// .toPromise()
  	.subscribe(response => {

  		console.log(response.json());
  		this.starships = response.json();
  	})
		

  	// https://github.com/den-materials/angular/blob/master/lectures/02-routing-apis/star_wars_api.md
  	/*
  	COMPONENT TS
		this.apiService.callGooglePlacesAPI(apiObject)
	    .subscribe(response => {
	    this.restaurant = response.json();
	 	});

	 	API SERVICE
	 	  callGooglePlacesAPI(body) {
	    // console.log('at the googlecallplaces function on api service');
	    // console.log(body);
	   	return this.http.post(`${this.baseUrl}/api/places`, body); 
	  }
  	*/
  }

}
