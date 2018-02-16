import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HeroesMessageService } from '../../messages/heroes-msg/services/heroes-message.service';
import { Hero } from '../../Classes/hero';
import { ListHeroes } from '../../Mocks/mock.heroes';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeroService {

  heroes: Hero[];
  public heroesChanged = new Subject<Hero[]>();
  constructor( private heroesMessageService: HeroesMessageService) { }

  getHeroesService(): Observable<Hero[]> {
    this.heroesMessageService.add('The list of heroes is fetched');
    return  of (ListHeroes);
  }

  getHeroById(id): Observable<Hero> {
    return of(ListHeroes.find(hero => hero.id === id));
  }

  insertHero(hero: Hero) {
    ListHeroes.push(hero);
    this.emitChanges();
  }

  setHeroes( heroes: Hero[]): void {
    this.heroes = heroes;
  }


  private emitChanges() {
    this.heroesChanged.next(ListHeroes.slice());
  }
}
