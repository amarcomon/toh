import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HeroesMessageService } from '../../messages/heroes-msg/services/heroes-message.service';
import { Hero } from '../../Classes/hero';
import { ListHeroes } from '../../Mocks/mock.heroes';

@Injectable()
export class HeroService {

  constructor( private heroesMessageService: HeroesMessageService) { }

  getHeroesService(): Observable<Hero[]> {
    this.heroesMessageService.add('The list of heroes is fetched');
    return  of (ListHeroes);
  }


}
