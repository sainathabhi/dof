import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
@Injectable({
  providedIn: 'root'
})
export class NpddschemeService {
  constructor(public http: HttpClient) { }
  getData() {
    // return this.http.get('/assets/finalsud25012022.json');
    return this.http.get('/assets/geo.json');
     }
}
