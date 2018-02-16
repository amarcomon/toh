import { Http, Response  } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { HeroService } from '../../heroes/services/hero.service';
import { VillainService } from '../../villain/services/villain.service';
import { Hero } from '../../Classes/hero';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

  private fireUrl = 'https://heroes-121f8.firebaseio.com/';
  constructor(
    private http: Http,
    private authService: AuthService,
    private heroesService: HeroService,
    private villainsService: VillainService
  ) { }

  /** Almacena en la base de datos los heroes que recupera de heroesService*/
  storeHeroes() {
    const token = this.authService.getIdToken();
    const heroes = this.heroesService.getHeroesService();
    return this.http.put(this.fireUrl + 'heroes.json?auth=' + token, heroes);
  }

  /** Almacena en la base de datos los villanos que recupera de villainService*/
  storeVillains() {
    const token = this.authService.getIdToken();
    const villains = this.villainsService.getVillain();
    return this.http.put(this.fireUrl + 'villains.json?auth=' + token, villains);
  }

  getHeroes() {
    console.log('get heroes storage data');
    const token = this.authService.getToken();
    this.http.get(this.fireUrl + 'heroes.json?auth=' + token)
    .map((response: Response) => {
      const heroes: Hero[] = response.json();
      return heroes;

    }).subscribe((heroes: Hero[] ) => this.heroesService.setHeroes(heroes));
  }




}
