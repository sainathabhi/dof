import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedCity :  any = new Array()
  public sessionStorage = sessionStorage;
  selectedCity2 :  any = new Array()
  stateName:  any = new Array()
  schemeName:  any = new Array()
  selectedSchemeValue:any;
  selectedStateValue: any;
  SchemeValue: any;
  url: any;
  //selectedId: string;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.selectedSchemeValue= localStorage.getItem('selectedSchemeValue')
    this.selectedStateValue= localStorage.getItem('selectedStateValue')
console.log(this.selectedSchemeValue)
if(this.selectedSchemeValue==null)
{
  this.selectedSchemeValue='SCHEME';

}
if(this.selectedStateValue==null)
{
  this.selectedStateValue='STATE';

}
   // sessionStorage.setItem('selectedSchemeValue', 'SCHEME');
    this.stateName = [
      {name: 'MAHARASHTRA', code: 'MAHARASHTRA'},
      {name: 'MADHYA PRADESH', code: 'MADHYA PRADESH'},
      {name: 'GUJARAT', code: 'GUJARAT'},
      {name: 'ANDHRA PRADESH', code: 'ANDHRA PRADESH'},
      {name: 'TAMIL NADU', code: 'TAMIL NADU'},
      {name: 'TELANGANA', code: 'TELANGANA'},
      {name: 'ODISHA', code: 'ODISHA'},
      {name: 'HARYANA', code: 'HARYANA'},
      {name: 'PUNJAB', code: 'PUNJAB'},
      {name: 'CHHATTISGARH', code: 'CHHATTISGARH'},
      {name: 'RAJASTHAN', code: 'RAJASTHAN'},
      {name: 'BIHAR', code: 'BIHAR'},
      {name: 'JAMMU & KASHMIR', code: 'JAMMU & KASHMIR'},
      {name: 'WEST BENGAL', code: 'WEST BENGAL'},
      {name: 'HIMACHAL PRADESH', code: 'HIMACHAL PRADESH'},
      {name: 'KERALA', code: 'KERALA'},
      {name: 'UTTARANCHAL', code: 'UTTARANCHAL'},
      {name: 'UTTAR PRADESH', code: 'UTTAR PRADESH'},
      {name: 'KARNATAKA', code: 'UTTAR'}
  ];
this.schemeName=[
  {name: 'LH&DC', code: 'LH&DC'},
  {name: 'NLM', code: 'NLM'},
  {name: 'AHIDF', code: 'AHIDF'},
  {name: 'RGM', code: 'RGM'},
  {name: 'SDCFPO', code: 'SDCFPO'},
  {name: 'DIDF', code: 'DIDF'},
  {name: 'NPDD', code: 'NPDD'},
]
  }
  selectSchemeValue(value:any) {
    this.selectedSchemeValue=value;
    localStorage.setItem('selectedSchemeValue',this.selectedSchemeValue)
    if(this.selectedStateValue=='ALLSTATE' || this.selectedStateValue=='STATE')
    {
      this.router.navigateByUrl("/"+this.selectedSchemeValue);
    }
    if(this.selectedStateValue==undefined)
    {
      this.router.navigateByUrl("/"+this.selectedSchemeValue);
    }
    if(this.selectedStateValue!='ALLSTATE' && this.selectedStateValue!='STATE'  && this.selectedStateValue!=undefined)
    {
      this.schemeName=this.selectedSchemeValue;
      this.url="/statewise-"+this.schemeName;
      this.router.navigate([this.url], { queryParams: { State: this.selectedStateValue } });
    }
  
 }
 selectStateValue(value:any)
 {
   this.selectedStateValue=value;
   localStorage.setItem('selectedStateValue',this.selectedStateValue)
   if(this.selectedStateValue!='ALLSTATE' && this.selectedStateValue!=undefined)
    {
      this.schemeName=this.selectedSchemeValue;
      this.url="/statewise-"+this.schemeName;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([this.url], { queryParams: { State: this.selectedStateValue } });
    });
    }
    if(this.selectedStateValue=='ALLSTATE' && this.selectedSchemeValue!=undefined)
    {
      this.router.navigateByUrl("/"+this.selectedSchemeValue);
    }
 
 }
}
