import { Component, OnInit } from '@angular/core';
import { Villain } from '../Classes/villain';
import { VillainService } from './services/villain.service';
import { ListVillain } from '../Mocks/mock.villains';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {

   villain: Villain[];
  villains = this.villain = ListVillain;
  constructor( private villainService: VillainService) { }

  ngOnInit() {
  }

  getListVillains() {
    console.log('villain');
    this.villainService.getVillain().subscribe(villain => this.villain = villain);
  }

}
