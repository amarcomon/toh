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

  villains: Villain[];
  selectedVillain: Villain;
  constructor( private villainService: VillainService) { }

  ngOnInit() {
    this.getListVillains();
  }

  onSelectedVillain(villain: Villain): void {
    this.selectedVillain = villain;

  }

  getListVillains(): void {
    console.log('villain');
    this.villainService.getVillain().subscribe(villains => this.villains = villains);
  }

}
