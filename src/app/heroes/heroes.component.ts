import { Component, OnInit } from '@angular/core';
import { ListHeroes } from '../Mocks/mock.heroes';
import { Response } from '@angular/http';
import {Hero} from '../Classes/hero';
import { HeroService } from './services/hero.service';
import { DataStorageService } from '../shared/services/data-storage-service.service';
import { AuthService } from '../auth/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  hero: Hero = new Hero;
  constructor(private heroService: HeroService, private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
    this.getHeroes();
  }
  /*Recupera el listado de heroes mockeados*/
  getHeroes(): void {

    this.heroService.getHeroesService().subscribe( heroes => this.heroes = heroes);
  }
  /*TODO: Recuperar los datos de heroes de la base de datos*/
  getHeroesStoraged() {
    console.log('getted data!');
    console.log(this.dataStorageService.getHeroes());
  }
  /*Almacena los datos en la base de datos */
  onSaveData() {
    this.dataStorageService.storeHeroes().subscribe( (response: Response) => console.log('saved data!', response));
  }
  /* Añade un nuevo heroe al listado actual */
  addHeroe(form: NgForm) {
    // const hero = new Hero;
    const id: number = form.value.id;
    const name: string = form.value.name;
    this.hero.id = id;
    this.hero.name = name;
    this.heroes.push(this.hero);
  }
}
