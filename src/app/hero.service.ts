import { Injectable } from '@angular/core';
import { Hero } from './Classes/hero';
import { ListHeroes } from './Mocks/mock.heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HeroesMessageService } from './heroes-message.service';

@Injectable()
export class HeroService {

  constructor( private heroesMessageService: HeroesMessageService) { }

  getHeroesService(): Observable<Hero[]> {
    this.heroesMessageService.add('The list of heroes is fetched');
    return  of (ListHeroes);
  }

}
