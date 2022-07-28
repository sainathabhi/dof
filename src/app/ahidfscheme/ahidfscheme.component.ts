import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { AhidfschemeService } from './ahidfscheme.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-ahidfscheme',
  templateUrl: './ahidfscheme.component.html',
  styleUrls: ['./ahidfscheme.component.scss']
})
export class AhidfschemeComponent implements OnInit {
  
  yearWiseEnroleMentChart:any;
  states_data = [['State','COVID-Confirmed Cases']];
  result:  any = new Array()
  response:  any = new Array()
  mapReady=false;
  statePercent=0
  constructor(public serv: AhidfschemeService) { }
  customOptions: OwlOptions = {
    loop: true,
    items: 2,
    dots: true,
    navSpeed: 600,
    
  }
  slides = [
    {id: '1'},
    {id: '2'},
    {id: '3'}
  ];
  ngOnInit(): void {
    this.showEnrolementGraph();

   


    this.serv.getData().subscribe((res)=>{
      console.log(res)
      this.result=res;
     
     // this.result.splice(0,1);

      for(let state of this.result){
        let temp = [state.state,Number(state.confirmed)];
        if( state.state=="Odisha"){
          temp = ['IN-OR',Number(state.confirmed)];
        }
        this.states_data.push(temp);
      }
      this.mapReady=true
    },
    (err)=>{
      console.log(err)
    }
  );

  }
  public geoChart: GoogleChartInterface = {
    chartType: 'GeoChart',
    dataTable: this.states_data,
    options: {
      domain:'IN',
      region: 'IN',
      colorAxis: {colors: ['#40e0d0','#40e0d0','#40e0d0','40e0d0','40e0d0']},
      resolution: 'provinces',
      zoom: 6,
     // defaultColor:{colors: ['#A5ECF5','#A5ECF5','#A5ECF5','#A5ECF5','#A5ECF5','#A5ECF5','#A5ECF5','#A5ECF5']},
  disableDefaultUI: true,
  //displayMode: 'text',
  defaultColor:'#40e0d0',
  backgroundColor: 'transparent',
  tooltip: { trigger: 'none'},
legend: 'none',
datalessRegionColor: 'transparent',
      //'height': 600,
      'width': 850,
     

      
    }
  };


  showEnrolementGraph()
  {
      
      this.yearWiseEnroleMentChart =  {
        title: {
               show: false,
               left: 'center',
               text: 'COURSE  ENROLMENT STATICS GRAPH  ',
             },
        tooltip: {
               trigger: 'axis'
             },
      
            axisLabel: {
              interval:0,
              rotate: 65,
          },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          axisLine:{                 //Coordinate axis
            show:true,             //Show Axis axis or not
            onZero:true,           //Whether the axis of X-axis or Y-axis is on the 0 scale of another axis is valid only when the other axis is a numerical axis and contains the 0 scale
        },
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            color:'#8dd9cc'
  
          //  color: '#8E24AA'
          }
        ]
      };
  
    }
    public select(event: ChartSelectEvent) {
      console.log(event.selectedRowValues[0])
      if(event.selectedRowValues[0]=='Rajasthan')
      {
        this.statePercent=40;
      }
      else if(event.selectedRowValues[0]=='Uttar Pradesh'){
        this.statePercent=70;
      }
      } 
    
}
