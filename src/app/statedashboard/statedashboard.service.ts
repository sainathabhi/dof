import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
@Injectable({
  providedIn: 'root'
})
export class StatedashboardService {

  constructor(public http: HttpClient) { }
getData() {
  // return this.http.get('/assets/finalsud25012022.json');
  return this.http.get('/assets/geo.json');
   }
   
getLhdcData() {
    //return this.http.get('http://103.70.139.131/nadcp.php');
    return this.http.get('/assets/nadcp.json');
}
getMvuData()
{
  return this.http.get('http://103.70.139.131/mvu.php');
}
}
