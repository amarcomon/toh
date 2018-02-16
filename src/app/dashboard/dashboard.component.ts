import { Component, OnInit } from '@angular/core';
import { Hero } from '../Classes/hero';
import { HeroService } from '../heroes/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  hero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  isSelected(hero: Hero) {
   return this.hero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesService().subscribe(heroes => this.heroes = heroes);
  }

}
