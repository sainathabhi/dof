import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatewiseLhdcschemeService {

  constructor(public http: HttpClient) { }
getLhdcData() 
{
    // return this.http.get('/assets/finalsud25012022.json');
    //return this.http.get('http://103.70.139.131/nadcp.php');
    return this.http.get('/assets/nadcp.json');
}
getMvuData()
{
  return this.http.get('http://103.70.139.131/mvu.php');
}
}
