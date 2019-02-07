import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
//import { HEROES } from '../mock-heroes'; //Delete the HEROES import, because you won't need that anymore. Import the HeroService instead.
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  // Click event binding
  //selectedHero: Hero;
  heroes: Hero[];
  
  //heroes = HEROES; // here heroes is object name and HEROES is TS file that we have imported 

  // hero: Hero = { //here hero is object name and Hero is TS file that we have imported      
  //   id: 1,
  //   name: 'Windstorm'
  // }; 

 
  /*
  When Angular creates a HeroesComponent, the Dependency Injection system sets the 
  heroService parameter to the singleton instance of HeroService. 
  */ 
  constructor(private heroService: HeroService) { }
 
  /*call getHeroes() inside the ngOnInit lifecycle hook and let 
  Angular call ngOnInit at an appropriate time after constructing a HeroesComponent instance.*/
  ngOnInit() {
    this.getHeroes();
  }
  
    // onSelect(hero: Hero): void {
    //   this.selectedHero = hero;
    // }

    /*The new version waits for the Observable to emit the array of heroes— which could happen now or several minutes from
     now. Then subscribe passes the emitted array to the callback, which sets the component's heroes property.
     This asynchronous approach will work when the HeroService requests heroes from the server. */
    getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
    }
}
