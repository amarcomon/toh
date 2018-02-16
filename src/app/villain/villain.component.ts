import { Component, OnInit } from '@angular/core';
import { Villain } from '../Classes/villain';
import { VillainService } from './services/villain.service';
import { ListVillain } from '../Mocks/mock.villains';
import { DataStorageService } from '../shared/services/data-storage-service.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {

  villains: Villain[];
  selectedVillain: Villain;
  constructor( private villainService: VillainService, private dataStorageService: DataStorageService) { }

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

  onSaveVillains() {

    return this.dataStorageService.storeVillains().subscribe((response: Response) => console.log('Saved data!', response));
  }
}
