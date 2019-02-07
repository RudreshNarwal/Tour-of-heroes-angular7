import { Component, OnInit, Input  } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

//The hero property must be an Input property, annotated with the @Input() decorator,
// because the external HeroesComponent will bind to it like this.
//<app-hero-detail [hero]="selectedHero"></app-hero-detail>
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //Add a hero property, preceded by the @Input() decorator.
  @Input() hero: Hero;
  
  constructor(
    private route: ActivatedRoute, //  ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. 
    private heroService: HeroService, // HeroService gets hero data from the remote server
    private location: Location // location is an Angular service for interacting with the browser.
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  // route.snapshot is a static image of the route information shortly after the component was created.
  // paramMap is a dictionary of route parameter values extracted from the URL
  /* Route parameters are always strings. The JavaScript (+) operator converts the string to a number,
   which is what a hero id should be.*/
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  } 

  goBack(): void {
    this.location.back();
  }

}
