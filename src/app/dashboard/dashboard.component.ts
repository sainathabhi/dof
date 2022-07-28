import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedSchemeValue: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  clickLhdcDiv()
  {
    this.selectedSchemeValue='LHDCP'
    localStorage.setItem('selectedSchemeValue',this.selectedSchemeValue)
    this.router.navigateByUrl("/"+this.selectedSchemeValue);
  }
  clickNlmDiv()
  {
    this.selectedSchemeValue='NLM'
    localStorage.setItem('selectedSchemeValue',this.selectedSchemeValue)
    this.router.navigateByUrl("/"+this.selectedSchemeValue);
  }
  clickAhidfDiv()
  {
    this.selectedSchemeValue='AHIDF'
    localStorage.setItem('selectedSchemeValue',this.selectedSchemeValue)
    this.router.navigateByUrl("/"+this.selectedSchemeValue);
  }
  clicknpddDiv()
  {
    this.selectedSchemeValue='NPDD'
    localStorage.setItem('selectedSchemeValue',this.selectedSchemeValue)
    this.router.navigateByUrl("/"+this.selectedSchemeValue);
  }
  clickrgmDiv()
  {
    this.selectedSchemeValue='RGM'
    localStorage.setItem('selectedSchemeValue',this.selectedSchemeValue)
    this.router.navigateByUrl("/"+this.selectedSchemeValue);
  }
  clicksdcfpoDiv()
  {
    this.selectedSchemeValue='SDCFPO'
    localStorage.setItem('selectedSchemeValue',this.selectedSchemeValue)
    this.router.navigateByUrl("/"+this.selectedSchemeValue);
  }
  clickdidfDiv()
  {
    this.selectedSchemeValue='DIDF'
    localStorage.setItem('selectedSchemeValue',this.selectedSchemeValue)
    this.router.navigateByUrl("/"+this.selectedSchemeValue);
  }
}
