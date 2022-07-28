import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
@Injectable({
  providedIn: 'root'
})
export class RgmschemeService {

  constructor(public http: HttpClient) { }
  getNaipData() {
    // return this.http.get('/assets/finalsud25012022.json');
    //return this.http.get('http://103.70.139.131/naip.php');
    return this.http.get('/assets/naip.json');
     }
}
