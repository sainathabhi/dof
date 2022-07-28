import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { StatewiseLhdcschemeService } from './statewise-lhdcscheme.service';
import { ActivatedRoute } from "@angular/router";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ChartSelectEvent } from 'ng2-google-charts';
@Component({
  selector: 'app-statewise-lhdcscheme',
  templateUrl: './statewise-lhdcscheme.component.html',
  styleUrls: ['./statewise-lhdcscheme.component.scss']
})

export class StatewiseLhdcschemeComponent implements OnInit {
  selectedCity12 :  any = new Array()
 // cities:  any = new Array()
  stateWiselhdcAllData:  any = new Array()
  totalLhdcSateWiseTypeVacinationDataCount:  any = new Array()
  totalStateTypeVacinationDataCount:  any = new Array()
  totalStateBuffeloVaccinatedArray:  any = new Array()
  totalStateCatleVaccinatedArray:  any = new Array()
  totalStateVaccinationDoneArray:  any = new Array()
  totalLhdcDistrictWiseTypeVacinationDataCount:  any = new Array()
  totalVaccinationDistrictWise:  any = new Array()
  topFiveDistrictVaccinatedArray:  any = new Array()
  totalDistrictTypeVacinationDataCount:  any = new Array()
  totalAggregateStateVaccinationData:  any = new Array()
  distrrictss:  any = new Array()
  districtsNames:  any = new Array()
  currentDateData:  any = new Array()
  valueInFormate:any
  yearWiseEnroleMentChart:any;
  states_data = [['State','Total Vaccinated']];
  result:  any = new Array()
  response:  any = new Array()
  mapReady=false;
  selectStateName: any;
  selectStateData: any;
  totalStateBuffeloVacinatedCount: any;
  totalVaccinationStateWise:any;
  totalStateBuffeloVaccinated: any;
  totalStateCatleVacinatedCount: any;
  totalStateCatleVaccinated: any;
  totalStatevaccinationDoneInBrucellosis: any;
  totalStatevaccinationDoneInFmd: any;
  totalStateAnimalCoverdInBrucellosis: any;
  totalStateAnimalCoverdInFmd: any;
  topFirstPerfomanceDistrict: any;
  topFirstPerformingDistrictVaccinationDone: any;
  topSecondPerfomanceDistrict: any;
  topSecondPerformingDistrictVaccinationDone: any;
  topThirdPerfomanceDistrict: any;
  topThirdPerformingDistrictVaccinationDone: any;
  topFourthPerfomanceDistrict: any;
  topFourthPerformingDistrictVaccinationDone: any;
  topFifthPerfomanceDistrict: any;
  topFifthPerformingDistrictVaccinationDone: any;
  typeOfVacinationChart: any;
  selectDistrict:any;
  selectState: any;
  defaultState: any;
  allMvuData: any;
  mvusOperational: any;
  mvusSanctioned: any;
  topFifthPerformingDistrictAnimalCoverd: any;
  topFourthPerformingDistrictAnimalCoverd: any;
  topThirdPerformingDistrictAnimalCoverd: any;
  topSecondPerformingDistrictAnimalCoverd: any;
  topFirstPerformingDistrictAnimalCoverd: any;
  constructor(public serv: StatewiseLhdcschemeService,private route: ActivatedRoute) { }
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
    this.route.queryParams.subscribe(params => {  
      this.selectStateName=params['State'];

    });
    //console.log(this.route.snapshot.queryParams.name); // book
    this.StateWiselhdcDashboardData();
    this.showEnrolementGraph();
    this.getMvuDashboardData();
  }

  StateWiselhdcDashboardData()
{
  this.stateWiselhdcAllData=[];
  this.serv.getLhdcData().subscribe((res)=>{
    this.stateWiselhdcAllData=res;
    console.log(this.stateWiselhdcAllData)


/////////////////////////////////////Group By On Date////////////////////////////////////

    var groupByDataDate = function(xs:any, key:any) {
      return xs.reduce(function(rv:any, x:any) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
     
    var totalCurrentDateData=groupByDataDate(this.stateWiselhdcAllData, 'DataDate')
    var totalCurrentDateDataCount = Object.entries(totalCurrentDateData)
    console.log("curent date wise data---")
    console.log(totalCurrentDateDataCount)
    this.currentDateData=[];
    this.currentDateData.push(totalCurrentDateDataCount[totalCurrentDateDataCount.length-1]['1']);
    console.log("curentdate")
    console.log(this.currentDateData)



 //////////////////////////////////////Group By State Data///////////////////////////////////////// 
   
    this.totalLhdcSateWiseTypeVacinationDataCount=[];
    var groupByTypeState = function(xs:any, key:any) {
      return xs.reduce(function(rv:any, x:any) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
var totalLhdcStateData=groupByTypeState(this.currentDateData[0], 'State_Name')
this.totalLhdcSateWiseTypeVacinationDataCount = Object.entries(totalLhdcStateData)
console.log(this.totalLhdcSateWiseTypeVacinationDataCount);

this.totalVaccinationStateWise=[];
this.totalLhdcSateWiseTypeVacinationDataCount.forEach((y:any) =>
{
if(y[0]==this.selectStateName)
{
 this.selectStateData=y[1];
}
const sumallStateVaccination = y[1].map((item:any) => Number(item['Total_no_of_Vaccination_done'])).reduce((prev:any, curr:any) => prev + curr, 0);
var finalObj1 = Object.assign({"State": y[0]}, {"VacinationDone": sumallStateVaccination});
this.totalVaccinationStateWise.push(finalObj1)
});
console.log("state confusion")
console.log(this.totalVaccinationStateWise);


/////////////////////////////////////Group By On Vaccination Type//////////////////////////////////////
this.totalStateTypeVacinationDataCount=[];
var groupByTotalVaccinatioTypeData = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalVaccinationTypeData=groupByTotalVaccinatioTypeData(this.selectStateData, 'Type_of_Vaccination')
this.totalStateTypeVacinationDataCount = Object.entries(totalVaccinationTypeData)
console.log("vacination  data--------------")
console.log(this.totalStateTypeVacinationDataCount)
//this.totalfarmerRegisterdArray=[];
this.totalStateBuffeloVaccinatedArray=[];
this.totalStateCatleVaccinatedArray=[];
this.totalStateVaccinationDoneArray=[];
this.totalStateTypeVacinationDataCount.forEach((y:any) =>
{
  console.log(y[0])
const sumallVaccination = y['1'].map((item:any) => Number(item['Total_no_of_Vaccination_done'])).reduce((prev:any, curr:any) => prev + curr, 0);
console.log("gujrat vaccination")
console.log(sumallVaccination)
//const sumallFarmersBenifitted = y[1].map((item:any) => Number(item['Total_no_of_Farmers_benefitted'])).reduce((prev:any, curr:any) => prev + curr, 0);
const sumallBuffeloVaccinated = y[1].map((item:any) => Number(item['Buffalo_Vaccinated'])).reduce((prev:any, curr:any) => prev + curr, 0);
const sumallCattleVaccinated = y[1].map((item:any) => Number(item['Cattle_Vaccinated'])).reduce((prev:any, curr:any) => prev + curr, 0);
const sumallAnimalVaccinated = y[1].map((item:any) => Number(item['No_of_Animals_Covered'])).reduce((prev:any, curr:any) => prev + curr, 0);
//this.totalfarmerRegisterdArray.push(sumallFarmersBenifitted);
this.totalStateBuffeloVaccinatedArray.push(sumallBuffeloVaccinated);
this.totalStateCatleVaccinatedArray.push(sumallCattleVaccinated);
var vaccinationData = Object.assign({"typeOfVaccination": y[0]}, {"totalNoOfVaccinationDone": this.numDifferentiation(sumallVaccination)}, {"totalNoOfAnimalCoverd": this.numDifferentiation(sumallAnimalVaccinated)});
this.totalStateVaccinationDoneArray.push(vaccinationData)
});
console.log("total no of vacination done")
console.log(this.totalStateVaccinationDoneArray);
//-----------------sum of all buffalo Vaccinated---------------------------------------------//
if(this.totalStateBuffeloVaccinatedArray.length>1)
{
this. totalStateBuffeloVacinatedCount = this.totalStateBuffeloVaccinatedArray.reduce((a:any, b:any) => {
  return a + b;
});
}
this.totalStateBuffeloVaccinated= this.numDifferentiation(this.totalStateBuffeloVacinatedCount)

//-----------------sum of all Catles Vaccinated---------------------------------------------//
if(this.totalStateCatleVaccinatedArray.length>1)
{
this. totalStateCatleVacinatedCount = this.totalStateCatleVaccinatedArray.reduce((a:any, b:any) => {
  return a + b;
});
}
if(this.totalStateVaccinationDoneArray.length==1)
{
  if(this.totalStateVaccinationDoneArray[0]['typeOfVaccination']=='FMD')
  {
    this.totalStatevaccinationDoneInFmd=  this.totalStateVaccinationDoneArray[0]['totalNoOfVaccinationDone'];
    this.totalStateAnimalCoverdInFmd=this.totalStateVaccinationDoneArray[0]['totalNoOfAnimalCoverd'];
    this.totalStatevaccinationDoneInBrucellosis=0;
    this.totalStateAnimalCoverdInBrucellosis=0;
  }
  if(this.totalStateVaccinationDoneArray[0]['typeOfVaccination']=='Brucellosis')
  {
    this.totalStatevaccinationDoneInFmd=0;
    this.totalStateAnimalCoverdInFmd=0;
    this.totalStatevaccinationDoneInBrucellosis=  this.totalStateVaccinationDoneArray[0]['totalNoOfVaccinationDone'];
    this.totalStateAnimalCoverdInBrucellosis=this.totalStateVaccinationDoneArray[0]['totalNoOfAnimalCoverd'];
  }
}
else{
this.totalStateCatleVaccinated= this.numDifferentiation(this.totalStateCatleVacinatedCount)
this.totalStatevaccinationDoneInBrucellosis=  this.totalStateVaccinationDoneArray[0]['totalNoOfVaccinationDone'];
this.totalStatevaccinationDoneInFmd=  this.totalStateVaccinationDoneArray[1]['totalNoOfVaccinationDone'];
this.totalStateAnimalCoverdInBrucellosis=this.totalStateVaccinationDoneArray[0]['totalNoOfAnimalCoverd'];
this.totalStateAnimalCoverdInFmd=this.totalStateVaccinationDoneArray[1]['totalNoOfAnimalCoverd'];
}
/////////////////////////////////////Group By On Districts//////////////////////////////////////
this.totalLhdcDistrictWiseTypeVacinationDataCount=[];
var groupByTypeDistrict = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalLhdcDistrictData=groupByTypeDistrict( this.selectStateData, 'District_Name')
this.totalLhdcDistrictWiseTypeVacinationDataCount = Object.entries(totalLhdcDistrictData)
 var keys = Object.keys(totalLhdcDistrictData);
 console.log("all keys")
 console.log(keys)
console.log(this.totalLhdcDistrictWiseTypeVacinationDataCount);
this.totalVaccinationDistrictWise=[];
this.topFiveDistrictVaccinatedArray=[];
this.distrrictss=[];
this.districtsNames=[];
this.totalLhdcDistrictWiseTypeVacinationDataCount.forEach((y:any) =>
{
const sumallDistrictVaccination = y[1].map((item:any) => Number(item['Total_no_of_Vaccination_done'])).reduce((prev:any, curr:any) => prev + curr, 0);
const sumallDistrictAnimalsCoverd =y[1].map((item:any) => Number(item['No_of_Animals_Covered'])).reduce((prev:any, curr:any) => prev + curr, 0);

var finalObj1 = Object.assign({"District": y[0]}, {"VacinationDone": sumallDistrictVaccination},{"AnimalCoverd": sumallDistrictAnimalsCoverd});
this.totalVaccinationDistrictWise.push(finalObj1)
var finalObj = Object.assign({"name": y[0]}, {"code":  y[0]});
this.distrrictss.push(finalObj)
this.districtsNames= this.distrrictss.sort(function(a:any,b:any){ return a.name.localeCompare(b.name); });
});
//------- variable use for defaul select------------------------------------------------------
//this.selectedCity1 = {name: 'ANAND',code: 'ANAND'};
console.log("district name")
console.log(this.districtsNames)
var topValues = this.totalVaccinationDistrictWise.sort((a:any,b:any) => b['VacinationDone']-a['VacinationDone']).slice(0,5);
console.log(this.totalVaccinationDistrictWise)
console.log(topValues);
topValues.forEach((y:any) =>
{
var finalObj1 = Object.assign({"District": y['District']}, {"VacinationDone": this.numDifferentiation(y['VacinationDone'])},{"AnimalCoverd": this.numDifferentiation(y['AnimalCoverd'])});
this.topFiveDistrictVaccinatedArray.push(finalObj1);
});
console.log("top five vacination District")
console.log(this.topFiveDistrictVaccinatedArray)
this.topFirstPerfomanceDistrict=this.topFiveDistrictVaccinatedArray[0]['District'];
this.topFirstPerformingDistrictVaccinationDone=this.topFiveDistrictVaccinatedArray[0]['VacinationDone'];
this.topFirstPerformingDistrictAnimalCoverd=this.topFiveDistrictVaccinatedArray[0]['AnimalCoverd'];

this.topSecondPerfomanceDistrict=this.topFiveDistrictVaccinatedArray[1]['District'];
this.topSecondPerformingDistrictVaccinationDone=this.topFiveDistrictVaccinatedArray[1]['VacinationDone'];
this.topSecondPerformingDistrictAnimalCoverd=this.topFiveDistrictVaccinatedArray[1]['AnimalCoverd'];

this.topThirdPerfomanceDistrict=this.topFiveDistrictVaccinatedArray[2]['District'];
this.topThirdPerformingDistrictVaccinationDone=this.topFiveDistrictVaccinatedArray[2]['VacinationDone'];
this.topThirdPerformingDistrictAnimalCoverd=this.topFiveDistrictVaccinatedArray[2]['AnimalCoverd'];

this.topFourthPerfomanceDistrict=this.topFiveDistrictVaccinatedArray[3]['District'];
this.topFourthPerformingDistrictVaccinationDone=this.topFiveDistrictVaccinatedArray[3]['VacinationDone'];
this.topFourthPerformingDistrictAnimalCoverd=this.topFiveDistrictVaccinatedArray[3]['AnimalCoverd'];

this.topFifthPerfomanceDistrict=this.topFiveDistrictVaccinatedArray[4]['District'];
this.topFifthPerformingDistrictVaccinationDone=this.topFiveDistrictVaccinatedArray[4]['VacinationDone'];
this.topFifthPerformingDistrictAnimalCoverd=this.topFiveDistrictVaccinatedArray[4]['VacinationDone'];

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
    this.allMvuData.forEach((y:any) =>
{
  if((y['States/Uts']==this.selectStateName))
  {
    console.log("mvu infoooooooo")
this.mvusOperational=y['MVUs_operational'];
this.mvusSanctioned=y['MVUs_sanctioned'];
} 
});
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
  else if (val >= 100) {
    this.valueInFormate    = val ;
  }
  return this.valueInFormate;
}

  public select(event: ChartSelectEvent) {
    console.log(event.selectedRowValues[0])
    this.totalLhdcSateWiseTypeVacinationDataCount.forEach((y:any) =>
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
      avoidLabelOverlap: false,
     
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
  //enableRegionInteractivity: true,
  //tooltip: { trigger: 'none'},
legend: 'none',
datalessRegionColor: 'transparent',
      'height': 3,
      //'width': 850,  
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
            color:'#5470c6'
  
          //  color: '#8E24AA'
          }
        ]
      };
  
    }
    OnChangeDistrict(event:any)
    {
      console.log(event.value.name)
      console.log(this.totalLhdcDistrictWiseTypeVacinationDataCount)
      this.totalLhdcDistrictWiseTypeVacinationDataCount.forEach((y:any) =>
      {
     if(y[0]==event.value.name)
     {
       this.selectDistrict=y[1]
     }
     
      });
      console.log(this.selectDistrict)
      this.totalDistrictTypeVacinationDataCount=[];
var groupByDistrictTotalVaccinatioTypeData = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalVaccinationTypeData=groupByDistrictTotalVaccinatioTypeData(this.selectDistrict, 'Type_of_Vaccination')
console.log(totalVaccinationTypeData)
this.totalDistrictTypeVacinationDataCount = Object.entries(totalVaccinationTypeData)
console.log(this.totalDistrictTypeVacinationDataCount)
this.totalStateBuffeloVaccinatedArray=[];
this.totalStateCatleVaccinatedArray=[];
this.totalStateVaccinationDoneArray=[];
this.totalDistrictTypeVacinationDataCount.forEach((y:any) =>
{
const sumallVaccination = y['1'].map((item:any) => Number(item['Total_no_of_Vaccination_done'])).reduce((prev:any, curr:any) => prev + curr, 0);
console.log(sumallVaccination)
//const sumallFarmersBenifitted = y[1].map((item:any) => Number(item['Total_no_of_Farmers_benefitted'])).reduce((prev:any, curr:any) => prev + curr, 0);
const sumallBuffeloVaccinated = y[1].map((item:any) => Number(item['Buffalo_Vaccinated'])).reduce((prev:any, curr:any) => prev + curr, 0);
const sumallCattleVaccinated = y[1].map((item:any) => Number(item['Cattle_Vaccinated'])).reduce((prev:any, curr:any) => prev + curr, 0);
const sumallAnimalVaccinated = y[1].map((item:any) => Number(item['No_of_Animals_Covered'])).reduce((prev:any, curr:any) => prev + curr, 0);
//this.totalfarmerRegisterdArray.push(sumallFarmersBenifitted);
this.totalStateBuffeloVaccinatedArray.push(sumallBuffeloVaccinated);
this.totalStateCatleVaccinatedArray.push(sumallCattleVaccinated);
var vaccinationData = Object.assign({"typeOfVaccination": y[0]}, {"totalNoOfVaccinationDone": this.numDifferentiation(sumallVaccination)}, {"totalNoOfAnimalCoverd": this.numDifferentiation(sumallAnimalVaccinated)});
this.totalStateVaccinationDoneArray.push(vaccinationData)
});

console.log(this.totalStateVaccinationDoneArray);
//-----------------sum of all buffalo Vaccinated---------------------------------------------//
if(this.totalStateBuffeloVaccinatedArray.length>1)
{
this. totalStateBuffeloVacinatedCount = this.totalStateBuffeloVaccinatedArray.reduce((a:any, b:any) => {
  return a + b;
});
}
this.totalStateBuffeloVaccinated= this.numDifferentiation(this.totalStateBuffeloVacinatedCount)

//-----------------sum of all Catles Vaccinated---------------------------------------------//
if(this.totalStateCatleVaccinatedArray.length>1)
{
this. totalStateCatleVacinatedCount = this.totalStateCatleVaccinatedArray.reduce((a:any, b:any) => {
  return a + b;
});
}
this.totalStateCatleVaccinated= this.numDifferentiation(this.totalStateCatleVacinatedCount)
this.totalStatevaccinationDoneInBrucellosis=  this.totalStateVaccinationDoneArray[0]['totalNoOfVaccinationDone'];
this.totalStatevaccinationDoneInFmd=  this.totalStateVaccinationDoneArray[1]['totalNoOfVaccinationDone'];
this.totalStateAnimalCoverdInBrucellosis=this.totalStateVaccinationDoneArray[0]['totalNoOfAnimalCoverd'];
this.totalStateAnimalCoverdInFmd=this.totalStateVaccinationDoneArray[1]['totalNoOfAnimalCoverd'];
    }
}
