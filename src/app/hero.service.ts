//HeroService which uses the service to send a message.
//Services are a great way to share information among classes
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'; // for making asyncronous request

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  //Angular will inject the singleton MessageService into that property when it creates the HeroService.
  constructor(private messageService: MessageService) { }

  
  //Modify the getHeroes method to send a message when the heroes are fetched.
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  }
 // for Hero Detail Component
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
