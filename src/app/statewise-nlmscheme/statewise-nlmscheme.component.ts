import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-statewise-nlmscheme',
  templateUrl: './statewise-nlmscheme.component.html',
  styleUrls: ['./statewise-nlmscheme.component.scss']
})

export class StatewiseNlmschemeComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    dots: true,
    navSpeed: 600,
    
  }
  slides = [
    {id: '1'},
    {id: '2'},
    {id: '3'}
  ];
  ngOnInit(): void {
  
    //console.log(this.route.snapshot.queryParams.name); // book
  
  }

 
 
}
