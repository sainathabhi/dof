import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { StatedashboardService } from './statedashboard.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as _ from 'lodash';
@Component({
  selector: 'app-statedashboard',
  templateUrl: './statedashboard.component.html',
  styleUrls: ['./statedashboard.component.scss']
})
export class StatedashboardComponent implements OnInit {
  
  yearWiseEnroleMentChart:any;
  typeOfVacinationChart:any
  states_data = [['State','Total Vaccinated']];
  result:  any = new Array()
  lhdcAllData:  any = new Array()
  response:  any = new Array()
  totalStateDataCount:  any = new Array()
  totalfarmerRegisterdArray:  any = new Array()
  totalVaccinationStateWise:  any = new Array()
  topFiveVaccinatedArray:  any = new Array()
  totalBuffeloVaccinatedArray:  any = new Array()
  totalCatleVaccinatedArray:  any = new Array()
  totalSateWiseTypeVacinationDataCount:  any = new Array()
  totalDateWiseFMDDataCount:  any = new Array()
  totalDateWiseBrucellosisDataCount:  any = new Array()
  totalTypeVacinationDataCount:  any = new Array()
  totalAggregateStateVaccinationData:  any = new Array()
  totalDateWiseFmdVaccinationDoneArray:  any = new Array()
  totalDateWiseBrucellosisVaccinationDoneArray:  any = new Array()
  fmdVaccinationDate:  any = new Array()
  totalNoOfFmdVaccinationDoneArray:  any = new Array()
  BrucellosisVaccinationDate:  any = new Array()
  totalNoOfBrucellosisVaccinationDoneArray:  any = new Array()
  totalfarmerRegisterd:any;
  currentDateData:  any = new Array()
  valueInFormate:any
  totalFarmerRegisterdCount:any
  totalBuffeloVacinatedCount:any
  totalBuffeloVaccinated:any
  totalCatleVacinatedCount:any
  totalCatleVaccinated:any
  totalvaccinationDoneInBrucellosis:any
  showBrucellosisEnrolementChart:any;
  totalvaccinationDoneInFmd:any;
  totalAnimalCoverdInBrucellosis:any;
  totalAnimalCoverdInFmd:any;
  vaccinationTypeFMDData: any;
  vaccinationTypeBrucellosisData:any;
  totalVaccinationDoneArray:  any = new Array()
  statePercent=0
  mapReady=false;
  showChartBrucellosischart=false;
  showChartFmdchart=true;
  myCSSclass=true;
  myCSSclass1=false;
  selectState: any;
  topFirstPerfomanceState: any;
  topFirstPerformingVaccinationDone: any;
  topSecondPerfomanceState: any;
  topSecondPerformingVaccinationDone: any;
  topThirdPerfomanceState: any;
  topThirdPerformingVaccinationDone: any;
  topFourthPerfomanceState: any;
  topFourthPerformingVaccinationDone: any;
  topFifthPerfomanceState: any;
  topFifthPerformingVaccinationDone: any;
  allMvuData: any;
  allMvuOperationalData: any;
  sumallMvuSanctioned: any;
  topFirstPerformingAnimalCoverd: any;
  topSecondPerformingAnimalCoverd: any;
  topThirdPerformingAnimalCoverd: any;
  topFourthPerformingAnimalCoverd: any;
  topFifthPerformingAnimalCoverd: any;

  constructor(public serv: StatedashboardService) { }
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
  //  this.showEnrolementGraph();
this.lhdcDashboardData();
this.getMvuDashboardData();
  }


lhdcDashboardData()
{
  this.serv.getLhdcData().subscribe((res)=>{
    this.lhdcAllData=res;
    console.log(this.lhdcAllData)
    
    var groupByDataDate = function(xs:any, key:any) {
      return xs.reduce(function(rv:any, x:any) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };


/////////////////////////////////////Group By On Date////////////////////////////////////
var totalCurrentDateData=groupByDataDate(this.lhdcAllData, 'DataDate')
var totalCurrentDateDataCount = Object.entries(totalCurrentDateData)
console.log(totalCurrentDateDataCount)
this.currentDateData=[];
this.currentDateData.push(totalCurrentDateDataCount[totalCurrentDateDataCount.length-1]['1']);
console.log("curentdate")
console.log(this.currentDateData)
 /////////////////////////////////////Group By On Last Date OF Vaccination Type////////////////////////////////////
var groupByTypeVacination = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};


var totalTypeVacinationData=groupByTypeVacination(this.currentDateData['0'], 'Type_of_Vaccination')
var totalTypeOfVaccinationDataCount = Object.entries(totalTypeVacinationData)
console.log(totalTypeOfVaccinationDataCount)

this.totalfarmerRegisterdArray=[];
this.totalBuffeloVaccinatedArray=[];
this.totalCatleVaccinatedArray=[];
this.totalVaccinationDoneArray=[];

totalTypeOfVaccinationDataCount.forEach((y:any) =>
{
const sumallVaccination = y['1'].map((item:any) => Number(item['Total_no_of_Vaccination_done'])).reduce((prev:any, curr:any) => prev + curr, 0);
console.log(sumallVaccination)
const sumallFarmersBenifitted = y[1].map((item:any) => Number(item['Total_no_of_Farmers_benefitted'])).reduce((prev:any, curr:any) => prev + curr, 0);
const sumallBuffeloVaccinated = y[1].map((item:any) => Number(item['Buffalo_Vaccinated'])).reduce((prev:any, curr:any) => prev + curr, 0);
const sumallCattleVaccinated = y[1].map((item:any) => Number(item['Cattle_Vaccinated'])).reduce((prev:any, curr:any) => prev + curr, 0);
const sumallAnimalVaccinated = y[1].map((item:any) => Number(item['No_of_Animals_Covered'])).reduce((prev:any, curr:any) => prev + curr, 0);
this.totalfarmerRegisterdArray.push(sumallFarmersBenifitted);
this.totalBuffeloVaccinatedArray.push(sumallBuffeloVaccinated);
this.totalCatleVaccinatedArray.push(sumallCattleVaccinated);
var vaccinationData = Object.assign({"typeOfVaccination": y[0]}, {"totalNoOfVaccinationDone": this.numDifferentiation(sumallVaccination)}, {"totalNoOfAnimalCoverd": this.numDifferentiation(sumallAnimalVaccinated)});
this.totalVaccinationDoneArray.push(vaccinationData)
});

console.log(this.totalVaccinationDoneArray)
//---------------- sum of all former registerd----------------------------------------------//
if(this.totalfarmerRegisterdArray.length>1)
{
this. totalFarmerRegisterdCount = this.totalfarmerRegisterdArray.reduce((a:any, b:any) => {
  return a + b;
});
}
this.totalfarmerRegisterd= this.numDifferentiation(this.totalFarmerRegisterdCount)

//-----------------sum of all buffalo Vaccinated---------------------------------------------//
console.log("buffelo")
console.log(this.totalBuffeloVaccinatedArray)
if(this.totalBuffeloVaccinatedArray.length>1)
{
this. totalBuffeloVacinatedCount = this.totalBuffeloVaccinatedArray.reduce((a:any, b:any) => {
  return a + b;
});
}
this.totalBuffeloVaccinated= this.numDifferentiation(this.totalBuffeloVacinatedCount)

//-----------------sum of all Catles Vaccinated---------------------------------------------//
console.log("Catles")
console.log(this.totalCatleVaccinatedArray)
if(this.totalCatleVaccinatedArray.length>1)
{
this. totalCatleVacinatedCount = this.totalCatleVaccinatedArray.reduce((a:any, b:any) => {
  return a + b;
});
}
this.totalCatleVaccinated= this.numDifferentiation(this.totalCatleVacinatedCount)

console.log(this.totalVaccinationDoneArray)
this.totalvaccinationDoneInBrucellosis=  this.totalVaccinationDoneArray[0]['totalNoOfVaccinationDone'];
this.totalvaccinationDoneInFmd=  this.totalVaccinationDoneArray[1]['totalNoOfVaccinationDone'];
this.totalAnimalCoverdInBrucellosis=this.totalVaccinationDoneArray[0]['totalNoOfAnimalCoverd'];
this.totalAnimalCoverdInFmd=this.totalVaccinationDoneArray[1]['totalNoOfAnimalCoverd'];


/////////////////////////////////////Group By On Vaccination Type////////////////////////////////////
this.totalTypeVacinationDataCount=[];
this.totalDateWiseFMDDataCount=[];
this.totalDateWiseBrucellosisDataCount=[];
var groupByTotalVaccinatioTypeData = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalVaccinationTypeData=groupByTotalVaccinatioTypeData(this.lhdcAllData, 'Type_of_Vaccination')
this.totalTypeVacinationDataCount = Object.entries(totalVaccinationTypeData)
console.log(this.totalTypeVacinationDataCount)
this.totalDateWiseFmdVaccinationDoneArray=[];
this.totalDateWiseBrucellosisVaccinationDoneArray=[];
this.totalTypeVacinationDataCount.forEach((y:any) =>
{
if(y[0]=="FMD")
{
  console.log('fmd data')
  console.log(y[1])
 this.vaccinationTypeFMDData=y[1];

 var groupByDateWiseFMDData = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalDateWiseFMDData=groupByDateWiseFMDData(this.vaccinationTypeFMDData, 'DataDate')
this.totalDateWiseFMDDataCount = Object.entries(totalDateWiseFMDData)
console.log("date Wise Data ")
console.log(this.totalDateWiseFMDDataCount)
this.totalDateWiseFMDDataCount.forEach((y:any) =>
{
const sumallDateWiseVaccination = y['1'].map((item:any) => Number(item['Total_no_of_Vaccination_done'])).reduce((prev:any, curr:any) => prev + curr, 0);
console.log(sumallDateWiseVaccination)

var vaccinationData = Object.assign({"date": y[0]}, {"totalNoOfFmdVaccinationDone": sumallDateWiseVaccination});
this.totalDateWiseFmdVaccinationDoneArray.push(vaccinationData)
});
console.log("fmd data datewise")

this.fmdVaccinationDate=[];
this.totalNoOfFmdVaccinationDoneArray=[];
this.totalDateWiseFmdVaccinationDoneArray.forEach((y:any) =>
  {
this.fmdVaccinationDate.push(y['date']);
this.totalNoOfFmdVaccinationDoneArray.push(y['totalNoOfFmdVaccinationDone']);
  });
  this.showEnrolementGraph();
  console.log(this.fmdVaccinationDate)
  console.log(this.totalNoOfFmdVaccinationDoneArray)
  console.log(this.totalDateWiseFmdVaccinationDoneArray)
}
if(y[0]=="Brucellosis")
{
  console.log('Brucellosis data')
  console.log(y[1])
 this.vaccinationTypeBrucellosisData=y[1];

 var groupByDateWiseBrucellosisData = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalDateWiseBrucellosisData=groupByDateWiseBrucellosisData(this.vaccinationTypeBrucellosisData, 'DataDate')
this.totalDateWiseBrucellosisDataCount = Object.entries(totalDateWiseBrucellosisData)
this.totalDateWiseBrucellosisDataCount.forEach((y:any) =>
{
const sumallDateWiseVaccination = y['1'].map((item:any) => Number(item['Total_no_of_Vaccination_done'])).reduce((prev:any, curr:any) => prev + curr, 0);
console.log(sumallDateWiseVaccination)

var vaccinationData = Object.assign({"date": y[0]}, {"totalNoOfBrucellosisVaccinationDone": sumallDateWiseVaccination});
this.totalDateWiseBrucellosisVaccinationDoneArray.push(vaccinationData)
});
console.log("brucelise data datewise")
console.log(this.totalDateWiseBrucellosisVaccinationDoneArray)
this.BrucellosisVaccinationDate=[];
this.totalNoOfBrucellosisVaccinationDoneArray=[];
this.totalDateWiseBrucellosisVaccinationDoneArray.forEach((y:any) =>
  {
this.BrucellosisVaccinationDate.push(y['date']);
this.totalNoOfBrucellosisVaccinationDoneArray.push(y['totalNoOfBrucellosisVaccinationDone']);
  });
}
});



//////////////////////////////////////Group By State Data/////////////////////////////////////////
this.totalSateWiseTypeVacinationDataCount=[];
var groupByTypeState = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalStateData=groupByTypeState(this.currentDateData[0], 'State_Name')
this.totalSateWiseTypeVacinationDataCount = Object.entries(totalStateData)
console.log("current date all data----")
console.log(this.totalSateWiseTypeVacinationDataCount);
this.totalVaccinationStateWise=[];
this.totalSateWiseTypeVacinationDataCount.forEach((y:any) =>
{
const sumallStateVaccination = y[1].map((item:any) => Number(item['Total_no_of_Vaccination_done'])).reduce((prev:any, curr:any) => prev + curr, 0);
const sumallStateAnimalCoverd = y[1].map((item:any) => Number(item['No_of_Animals_Covered'])).reduce((prev:any, curr:any) => prev + curr, 0);
var finalObj1 = Object.assign({"State": y[0]}, {"VacinationDone": sumallStateVaccination},{"AnimalCoverd": sumallStateAnimalCoverd});
this.totalVaccinationStateWise.push(finalObj1)
});

var topValues = this.totalVaccinationStateWise.sort((a:any,b:any) => b['VacinationDone']-a['VacinationDone']).slice(0,5);
console.log("top states")
console.log(topValues)
console.log(this.totalVaccinationStateWise)
this.topFiveVaccinatedArray=[];

topValues.forEach((y:any) =>
{
var finalObj1 = Object.assign({"State": y['State']}, {"VacinationDone": this.numDifferentiation(y['VacinationDone'])},{"AnimalCoverd": this.numDifferentiation(y['AnimalCoverd'])});
this.topFiveVaccinatedArray.push(finalObj1);
});
console.log("top five vacination state")
console.log(this.topFiveVaccinatedArray)
this.topFirstPerfomanceState=this.topFiveVaccinatedArray[0]['State'];
this.topFirstPerformingVaccinationDone=this.topFiveVaccinatedArray[0]['VacinationDone'];
this.topFirstPerformingAnimalCoverd=this.topFiveVaccinatedArray[0]['AnimalCoverd'];

this.topSecondPerfomanceState=this.topFiveVaccinatedArray[1]['State'];
this.topSecondPerformingVaccinationDone=this.topFiveVaccinatedArray[1]['VacinationDone'];
this.topSecondPerformingAnimalCoverd=this.topFiveVaccinatedArray[1]['AnimalCoverd'];

this.topThirdPerfomanceState=this.topFiveVaccinatedArray[2]['State'];
this.topThirdPerformingVaccinationDone=this.topFiveVaccinatedArray[2]['VacinationDone'];
this.topThirdPerformingAnimalCoverd=this.topFiveVaccinatedArray[2]['AnimalCoverd'];

this.topFourthPerfomanceState=this.topFiveVaccinatedArray[3]['State'];
this.topFourthPerformingVaccinationDone=this.topFiveVaccinatedArray[3]['VacinationDone'];
this.topFourthPerformingAnimalCoverd=this.topFiveVaccinatedArray[3]['AnimalCoverd'];

this.topFifthPerfomanceState=this.topFiveVaccinatedArray[4]['State'];
this.topFifthPerformingVaccinationDone=this.topFiveVaccinatedArray[4]['VacinationDone'];
this.topFifthPerformingAnimalCoverd=this.topFiveVaccinatedArray[4]['AnimalCoverd'];

for(let state of this.totalVaccinationStateWise){
  let temp = [state.State,Number(state.VacinationDone)];
  if( state.State=="ANDAMAN & NICOBAR ISLANDS"){
    temp = ['IN-AN',Number(state.VacinationDone)];
  }
  else if( state.State=="LAKSHADWEEP"){
    temp = ['IN-LD',Number(state.VacinationDone)];
  }
  else if( state.State=="ODISHA"){
    temp = ['IN-OR',Number(state.VacinationDone)];
  }
  else if( state.State=="LADAKH"){
    temp = ['Ladakh',Number(state.VacinationDone)];
  }
  else if( state.State=="UTTARANCHAL"){
    temp = ['IN-UT',Number(state.VacinationDone)];
  }
  else if( state.State=="JAMMU & KASHMIR"){
    temp = ['Jammu and Kashmir',Number(state.VacinationDone)];
  }
  this.states_data.push(temp);
}
console.log("states data------------")
console.log(this.states_data)
 this.mapReady=true

  },
  (err)=>{
    console.log(err)
  }
); 

}

getMvuDashboardData()
{
  this.serv.getMvuData().subscribe((res)=>{
    console.log("mvu Data Result");
    console.log(res);
    this.allMvuData=res;
const sumallMvuOperational = this.allMvuData.map((item:any) => Number(item['MVUs_operational'])).reduce((prev:any, curr:any) => prev + curr, 0);
const sumallMvuSanctioned = this.allMvuData.map((item:any) => Number(item['MVUs_sanctioned'])).reduce((prev:any, curr:any) => prev + curr, 0);
console.log("Mvu and Operational data")
console.log(sumallMvuOperational);
console.log(sumallMvuSanctioned);
this.allMvuOperationalData=this.numDifferentiation(sumallMvuOperational);
this.sumallMvuSanctioned=this.numDifferentiation(sumallMvuSanctioned);
},
(err)=>{
  console.log(err)
}
); 
}
 numDifferentiation(value:any) {

  var val = Math.abs(value)
  if (val >= 10000000) {
    this.valueInFormate = (val / 10000000).toFixed(2) + ' Cr';
  } else if (val >= 100000) {
    this.valueInFormate    = (val / 100000).toFixed(2) + ' L';
  } else if (val >= 1000) {
    this.valueInFormate    = (val / 1000).toFixed(2) + ' K';
  }
  else if (val >= 0) {
    this.valueInFormate    = (val / 100000).toFixed(2) + ' ';
  }
  return this.valueInFormate;
}

chartButtonClick()
{
  console.log("hello")
  this.showChartBrucellosischart=true;
  this.showChartFmdchart=false;
  this.myCSSclass1=true
  this.myCSSclass=false
  console.log(this.BrucellosisVaccinationDate)
  console.log(this.totalNoOfBrucellosisVaccinationDoneArray)
  this.showBrucellosisEnrolementChart=
  {
        title: {
               show: false,
               left: 'center',
               text: 'COURSE  ENROLMENT STATICS GRAPH  ',
             },
        tooltip: {
               trigger: 'axis'
             },
             grid: { containLabel: true },
            axisLabel: {
              interval:0,
              rotate: 65,
          },
          
        xAxis: {
          type: 'category',
        
          data: this.BrucellosisVaccinationDate,
         
        },
        yAxis: {
          type: 'value',
          axisLine:{                 //Coordinate axis
            show:true,             //Show Axis axis or not
            onZero:false,           //Whether the axis of X-axis or Y-axis is on the 0 scale of another axis is valid only when the other axis is a numerical axis and contains the 0 scale
        },
        },
        height: 130,
        series: [
          {
            data:this.totalNoOfBrucellosisVaccinationDoneArray,
            type: 'bar',
            color:'#8dd9cc'
  
          //  color: '#8E24AA'
          }
        ]
      };
}
  showEnrolementGraph()
  {
    this.showChartFmdchart=true
    this.showChartBrucellosischart=false
    this.myCSSclass=true
    this.myCSSclass1=false
      this.yearWiseEnroleMentChart =  {
        tooltip: {
               trigger: 'axis'
             },
      
             radius: [70, 180], 
         grid: { containLabel: true },
        xAxis: {
          type: 'category',
          data: this.fmdVaccinationDate,
         
        },
        yAxis: {
          type: 'value',
          axisLine:{                 //Coordinate axis
            show:true, 
                      //Show Axis axis or not        //Whether the axis of X-axis or Y-axis is on the 0 scale of another axis is valid only when the other axis is a numerical axis and contains the 0 scale
        },
       
       // nameGap: 50,
        showGrid: false,
        },
        height: 130,
        series: [
          {
            data:this.totalNoOfFmdVaccinationDoneArray,
            type: 'bar',
           // radius: ['40%', '70%'],
            color:'#8dd9cc',
           // showBackground: true,
            
            
          //  color: '#8E24AA'
          }
        ]
      
        
      };
    }


    public select(event: ChartSelectEvent) {
      console.log(event.selectedRowValues[0])
      console.log(this.totalSateWiseTypeVacinationDataCount)

      this.totalSateWiseTypeVacinationDataCount.forEach((y:any) =>
      {
     if(y[0]==event.selectedRowValues[0])
     {
       this.selectState=y[1]
     }
     
      });
      var groupByTypeVacination = function(xs:any, key:any) {
        return xs.reduce(function(rv:any, x:any) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
  var totalTypeVacinationStateData=groupByTypeVacination(this.selectState, 'Type_of_Vaccination')
  var totalTypeVacinationStateDataCount = Object.entries(totalTypeVacinationStateData)
  console.log(totalTypeVacinationStateDataCount)
  this.totalAggregateStateVaccinationData=[];
  totalTypeVacinationStateDataCount.forEach((y:any) =>
  {
      var totalVaccination =  y[1].map((item:any) => Number(item['Total_no_of_Vaccination_done'])).reduce((prev:any, curr:any) => prev + curr, 0);

      var finalObj = Object.assign({"name": y[0]}, {"value": totalVaccination});
      this.totalAggregateStateVaccinationData.push(finalObj)

  });
console.log(this.totalAggregateStateVaccinationData)


      this.typeOfVacinationChart = {
        title: {
          show:true,
          text: event.selectedRowValues[0],
          textStyle: {fontSize: 10},
          left: 'center'
         
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'right'
        },
        series: [
          {
           // name: 'Access From',
            type: 'pie',
            radius: '53%',
          //  radius: ['40%', '70%'],
            avoidLabelOverlap: true,
            labelLine: {
              show: true
          },
            label: {
              formatter: '{b|{b}：}{c}  ',
              backgroundColor: '#F6F8FC',
              borderColor: '#8C8D8E',
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: '#796e70',
                  lineHeight: 22,
                  align: 'center'
                },
                hr: {
                  borderColor: '#796e70',
                  width: '100%',
                  borderWidth: 1,
                  height: 0
                },
                b: {
                  color: '#796e70',
                  fontSize: 14,
                  fontWeight: 'bold',
                  lineHeight: 33
                },
                per: {
                  color: '#796e70',
                  backgroundColor: 'black',
                  padding: [3, 4],
                  borderRadius: 4
                }
              }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '15',
                fontWeight: 'bold'
              }
            },
           
            data: this.totalAggregateStateVaccinationData
          }
        ]
      };



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
     
      legend: 'none',
      datalessRegionColor: 'transparent',
          //'height': 600,
          'width': 850,
        }
      };
}
