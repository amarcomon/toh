import { Component, OnInit } from '@angular/core';
import { HeroesMessageService } from './services/heroes-message.service';

@Component({
  selector: 'app-heroes-msg',
  templateUrl: './heroes-msg.component.html',
  styleUrls: ['./heroes-msg.component.css']
})
export class HeroesMsgComponent implements OnInit {

  constructor(public messageService: HeroesMessageService) { }

  ngOnInit() {
  }

}
