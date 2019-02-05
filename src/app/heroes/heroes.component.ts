import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES; // here heroes is object name and HEROES is TS file that we have imported 

  // hero: Hero = { //here hero is object name and Hero is TS file that we have imported      
  //   id: 1,
  //   name: 'Windstorm'
  // }; 

  // Click event binding
  selectedHero: Hero;
  
  constructor() { }

  ngOnInit() {
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    }
}
