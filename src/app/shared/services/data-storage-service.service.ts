import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class DataStorageServiceService {

  private fireUrl = 'https://heroes-121f8.firebaseio.com/';

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }



}
