import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ListVillain } from '../../Mocks/mock.villains';
import { Villain } from '../../Classes/villain';


@Injectable()
export class VillainService {

  constructor() { }

  getVillain(): Observable<Villain[]> {
    return of (ListVillain);
  }

}
