import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logOut();
  }
  logOut()
  {
    debugger
    localStorage.removeItem('localsetEmail');
    localStorage.removeItem('selectedSchemeValue')
    localStorage.removeItem('selectedStateValue')
    sessionStorage.clear();
    this.router.navigateByUrl("");
  }
}
