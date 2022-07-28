import { Component, OnInit } from '@angular/core';
import { RgmschemeService } from '../rgmscheme/rgmscheme.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { ChartSelectEvent, GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-statewise-rgmscheme',
  templateUrl: './statewise-rgmscheme.component.html',
  styleUrls: ['./statewise-rgmscheme.component.scss']
})

export class StatewiseRgmschemeComponent implements OnInit {
  selectedCity1 :  any = new Array()
  states_data = [['State','Total AI Done']];
  stateWiseRgmAllData: any = new Array()
  totalRgmSateWiseTypeNaipDataCount: any = new Array()
  totalNaipAiDoneStateWise: any = new Array()
  totalAllSchemeDoneArray: any = new Array()
  totalStateTypeAiDataCount: any = new Array()
  farmersBenifitedCountArray: any = new Array()
  totalAllAiSchemeDoneArray: any = new Array()
  topFiveNaipStateArray: any = new Array()
  totalRgmDistrictWiseTypeNaipDataCount: any = new Array()
  totalNaipDistrictWise: any = new Array()
  topFiveDistrictNaipArray: any = new Array()
  totalAllNaipIISchemeDoneArray: any = new Array()
  totalAllNaipISchemeDoneArray: any = new Array()
  distrricts: any = new Array()
  districtsName: any = new Array()
  totalAggregateStateAiData: any = new Array()
  totalDistrictTypeAiDataCount: any = new Array()
  farmersDistrictBenifitedCountArray: any = new Array()
  totalDistrictWiseAiSchemeDoneArray: any = new Array()
  currentDateData: any = new Array()
  SchemeCountArray: any = new Array()
  selectStateName: any;
  selectStateData: any;
  mapReady=false;
  valueInFormate: any;
  totalNoOfAiDoneCount: any;
  totalNoOffarmersBenifited: any;
  totalNoOfAiAllSchemeDone: any;
  totalFarmersBenifitedAllSchemeDone: any;
  totalNoOfAiDoneInNaipI: any;
  totalNoOfAnimalCoverdDoneInNaipI: any;
  totalNoOfFarmersBenefittedInNaipI: any;
  totalNoOfAiDoneInNaipII: any;
  totalNoOfAnimalCoverdDoneInNaipII: any;
  totalNoOfFarmersBenefittedInNaipII: any;
  totalNoOfAiDoneInNaipIII: any;
  totalNoOfAnimalCoverdDoneInNaipIII: any;
  totalNoOfFarmersBenefittedInNaipIII: any;
  topFirstPerfomanceDistrict: any;
  topFirstPerformingDistrictAiDone: any;
  topSecondPerfomanceDistrict: any;
  topSecondPerformingDistrictAiDone: any;
  topThirdPerfomanceDistrict: any;
  topThirdPerformingDistrictAiDone: any;
  topFourthPerfomanceDistrict: any;
  topFourthPerformingDistrictAiDone: any;
  topFifthPerfomanceDistrict: any;
  topFifthPerformingDistrictAiDone: any;
  typeOfVacinationChart:any;
  selectState: any;
  selectDistrict: any;
  currentNaipIIData: any;
  currentNaipIData: any;
  constructor(public serv: RgmschemeService,private route: ActivatedRoute) { }
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
  this.StateWiseRgmDashboardData();
    //console.log(this.route.snapshot.queryParams.name); // book
  
  }
  StateWiseRgmDashboardData()
  {
    this.stateWiseRgmAllData=[];
    this.serv.getNaipData().subscribe((res)=>{
      this.stateWiseRgmAllData=res;
      console.log(this.stateWiseRgmAllData)
   //////////////////////////////////////Group By State Data/////////////////////////////////////////   
      this.totalRgmSateWiseTypeNaipDataCount=[];
      var groupByTypeState = function(xs:any, key:any) {
        return xs.reduce(function(rv:any, x:any) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
  var totalLhdcStateData=groupByTypeState(this.stateWiseRgmAllData, 'State Name')
  this.totalRgmSateWiseTypeNaipDataCount = Object.entries(totalLhdcStateData)
  this.totalNaipAiDoneStateWise=[];
  this.totalAllSchemeDoneArray=[];
  this.totalRgmSateWiseTypeNaipDataCount.forEach((y:any) =>
  {
  if(y[0]==this.selectStateName)
  {
   this.selectStateData=y[1]
  }
  var  sumallAiDone = y['1'].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);

var allSchemeData = Object.assign({"statName": y[0]}, {"totalNoOfAiDone": sumallAiDone});
this.totalNaipAiDoneStateWise.push(allSchemeData);
  });
  console.log(this.totalNaipAiDoneStateWise);

  var topValues = this.totalNaipAiDoneStateWise.sort((a:any,b:any) => b['totalNoOfAiDone']-a['totalNoOfAiDone']).slice(0,5);
console.log("top states")
console.log(topValues)
this.topFiveNaipStateArray=[];

topValues.forEach((y:any) =>
{
//this.numDifferentiation(y['VacinationDone']);
var finalObj1 = Object.assign({"State": y['statName']}, {"totalNoOfAiDone": this.numDifferentiation(y['totalNoOfAiDone'])});
this.topFiveNaipStateArray.push(finalObj1);
});
console.log(this.topFiveNaipStateArray)






/////////////////////////////////////Group By On Date////////////////////////////////////
var groupByDataDate = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var totalCurrentDateData=groupByDataDate(this.selectStateData, 'DataDate')
var totalCurrentDateDataCount = Object.entries(totalCurrentDateData)
console.log("current date data")
console.log(totalCurrentDateDataCount)
this.currentDateData=[];
this.currentDateData.push(totalCurrentDateDataCount[totalCurrentDateDataCount.length-1]['1']);
totalCurrentDateDataCount.forEach((y:any) =>
{
if(y[0]=='01/08/2021')
{
  this.currentNaipIIData=y[1];
}
if(y[0]=='01/06/2020')
{
  this.currentNaipIData=y[1];
}
});
console.log("curentdate")
console.log(this.currentDateData[0])

/////////////////////////////////////Group By On Naip IIIDone Type//////////////////////////////////////
this.totalStateTypeAiDataCount=[];
var groupByTotalAiTypeData = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalAiTypeData=groupByTotalAiTypeData(this.currentDateData[0], 'Scheme')
this.totalStateTypeAiDataCount = Object.entries(totalAiTypeData)
console.log("currrent data for naipIIIIIIIIIIIIIIIII")
console.log(this.totalStateTypeAiDataCount)
this.totalAllAiSchemeDoneArray=[];
this.totalStateTypeAiDataCount.forEach((y:any) =>
{
  var  sumallAiDone = y['1'].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);
  var  sumallAnimalsCoverd = y['1'].map((item:any) => Number(item['No. of Animal Covered'])).reduce((prev:any, curr:any) => prev + curr, 0);
  var  sumallFarmersBenifitted = y['1'].map((item:any) => Number(item["Total no. of farmer's benefitted"])).reduce((prev:any, curr:any) => prev + curr, 0);
  //this.farmersBenifitedCountArray.push(sumallFarmersBenifitted)
 // this.SchemeCountArray.push(sumallAiDone)
  var allSchemeData = Object.assign({"schemeName": y[0]}, {"totalNoOfAiDone": this.numDifferentiation(sumallAiDone)},{"totalNoOfAnimalCoverd": this.numDifferentiation(sumallAnimalsCoverd)}, {"totalNoOfFarmersBenefitted": this.numDifferentiation(sumallFarmersBenifitted)});
  this.totalAllAiSchemeDoneArray.push(allSchemeData);
});
// this.totalNoOfAiDoneCount = this.SchemeCountArray.reduce(function(a:any,b:any) {
//   return (+a)+(+b);
// });
// this.totalNoOffarmersBenifited = this.farmersBenifitedCountArray.reduce(function(a:any,b:any) {
//   return (+a)+(+b);
// });
this.totalNoOfAiAllSchemeDone=this.numDifferentiation(this.totalNoOfAiDoneCount);
this.totalFarmersBenifitedAllSchemeDone=this.numDifferentiation(this.totalNoOffarmersBenifited);

// this.totalNoOfAiDoneInNaipI=  this.totalAllAiSchemeDoneArray[2]['totalNoOfAiDone'];
// this.totalNoOfAnimalCoverdDoneInNaipI =  this.totalAllAiSchemeDoneArray[2]['totalNoOfAnimalCoverd'];
// this.totalNoOfFarmersBenefittedInNaipI=this.totalAllAiSchemeDoneArray[2]['totalNoOfFarmersBenefitted'];

// this.totalNoOfAiDoneInNaipII=  this.totalAllAiSchemeDoneArray[1]['totalNoOfAiDone'];
// this.totalNoOfAnimalCoverdDoneInNaipII =  this.totalAllAiSchemeDoneArray[1]['totalNoOfAnimalCoverd'];
// this.totalNoOfFarmersBenefittedInNaipII=this.totalAllAiSchemeDoneArray[1]['totalNoOfFarmersBenefitted'];

this.totalNoOfAiDoneInNaipIII=  this.totalAllAiSchemeDoneArray[0]['totalNoOfAiDone'];
this.totalNoOfAnimalCoverdDoneInNaipIII =  this.totalAllAiSchemeDoneArray[0]['totalNoOfAnimalCoverd'];
this.totalNoOfFarmersBenefittedInNaipIII=this.totalAllAiSchemeDoneArray[0]['totalNoOfFarmersBenefitted'];
console.log(this.totalAllAiSchemeDoneArray)



/////////////////////////////////////Group By On Naip IIDone Type//////////////////////////////////////
this.totalStateTypeAiDataCount=[];
var groupByTotalAiTypeData = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalAiTypeData=groupByTotalAiTypeData(this.currentNaipIIData, 'Scheme')
this.totalStateTypeAiDataCount = Object.entries(totalAiTypeData)
console.log("NAI II DAttttttttttttttttttt")
console.log(this.totalStateTypeAiDataCount)
this.totalAllNaipIISchemeDoneArray=[];
this.SchemeCountArray=[];
this.totalStateTypeAiDataCount.forEach((y:any) =>
{
  var  sumallAiDone = y['1'].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);
  var  sumallAnimalsCoverd = y['1'].map((item:any) => Number(item['No. of Animal Covered'])).reduce((prev:any, curr:any) => prev + curr, 0);
  var  sumallFarmersBenifitted = y['1'].map((item:any) => Number(item["Total no. of farmer's benefitted"])).reduce((prev:any, curr:any) => prev + curr, 0);
  //this.farmersBenifitedCountArray.push(sumallFarmersBenifitted)
 // this.SchemeCountArray.push(sumallAiDone)
  var allSchemeData = Object.assign({"schemeName": y[0]}, {"totalNoOfAiDone": this.numDifferentiation(sumallAiDone)},{"totalNoOfAnimalCoverd": this.numDifferentiation(sumallAnimalsCoverd)}, {"totalNoOfFarmersBenefitted": this.numDifferentiation(sumallFarmersBenifitted)});
  this.totalAllNaipIISchemeDoneArray.push(allSchemeData);
});
// this.totalNoOfAiDoneCount = this.SchemeCountArray.reduce(function(a:any,b:any) {
//   return (+a)+(+b);
// });
// this.totalNoOffarmersBenifited = this.farmersBenifitedCountArray.reduce(function(a:any,b:any) {
//   return (+a)+(+b);
// });
this.totalNoOfAiAllSchemeDone=this.numDifferentiation(this.totalNoOfAiDoneCount);
this.totalFarmersBenifitedAllSchemeDone=this.numDifferentiation(this.totalNoOffarmersBenifited);

// this.totalNoOfAiDoneInNaipI=  this.totalAllAiSchemeDoneArray[2]['totalNoOfAiDone'];
// this.totalNoOfAnimalCoverdDoneInNaipI =  this.totalAllAiSchemeDoneArray[2]['totalNoOfAnimalCoverd'];
// this.totalNoOfFarmersBenefittedInNaipI=this.totalAllAiSchemeDoneArray[2]['totalNoOfFarmersBenefitted'];

this.totalNoOfAiDoneInNaipII=  this.totalAllNaipIISchemeDoneArray[0]['totalNoOfAiDone'];
this.totalNoOfAnimalCoverdDoneInNaipII =  this.totalAllNaipIISchemeDoneArray[0]['totalNoOfAnimalCoverd'];
this.totalNoOfFarmersBenefittedInNaipII=this.totalAllNaipIISchemeDoneArray[0]['totalNoOfFarmersBenefitted'];

// this.totalNoOfAiDoneInNaipIII=  this.totalAllAiSchemeDoneArray[0]['totalNoOfAiDone'];
// this.totalNoOfAnimalCoverdDoneInNaipIII =  this.totalAllAiSchemeDoneArray[0]['totalNoOfAnimalCoverd'];
// this.totalNoOfFarmersBenefittedInNaipIII=this.totalAllAiSchemeDoneArray[0]['totalNoOfFarmersBenefitted'];



/////////////////////////////////////Group By On Naip IDone Type//////////////////////////////////////
this.totalStateTypeAiDataCount=[];
var groupByTotalAiTypeData = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalAiTypeData=groupByTotalAiTypeData(this.currentNaipIData, 'Scheme')
this.totalStateTypeAiDataCount = Object.entries(totalAiTypeData)
this.totalAllNaipISchemeDoneArray=[];
//this.SchemeCountArray=[];
this.totalStateTypeAiDataCount.forEach((y:any) =>
{
  var  sumallAiDone = y['1'].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);
  var  sumallAnimalsCoverd = y['1'].map((item:any) => Number(item['No. of Animal Covered'])).reduce((prev:any, curr:any) => prev + curr, 0);
  var  sumallFarmersBenifitted = y['1'].map((item:any) => Number(item["Total no. of farmer's benefitted"])).reduce((prev:any, curr:any) => prev + curr, 0);
  //this.farmersBenifitedCountArray.push(sumallFarmersBenifitted)
 // this.SchemeCountArray.push(sumallAiDone)
  var allSchemeData = Object.assign({"schemeName": y[0]}, {"totalNoOfAiDone": this.numDifferentiation(sumallAiDone)},{"totalNoOfAnimalCoverd": this.numDifferentiation(sumallAnimalsCoverd)}, {"totalNoOfFarmersBenefitted": this.numDifferentiation(sumallFarmersBenifitted)});
  this.totalAllNaipISchemeDoneArray.push(allSchemeData);
});
// this.totalNoOfAiDoneCount = this.SchemeCountArray.reduce(function(a:any,b:any) {
//   return (+a)+(+b);
// });
// this.totalNoOffarmersBenifited = this.farmersBenifitedCountArray.reduce(function(a:any,b:any) {
//   return (+a)+(+b);
// });
this.totalNoOfAiAllSchemeDone=this.numDifferentiation(this.totalNoOfAiDoneCount);
this.totalFarmersBenifitedAllSchemeDone=this.numDifferentiation(this.totalNoOffarmersBenifited);

this.totalNoOfAiDoneInNaipI=  this.totalAllNaipISchemeDoneArray[0]['totalNoOfAiDone'];
this.totalNoOfAnimalCoverdDoneInNaipI =  this.totalAllNaipISchemeDoneArray[0]['totalNoOfAnimalCoverd'];
this.totalNoOfFarmersBenefittedInNaipI=this.totalAllNaipISchemeDoneArray[0]['totalNoOfFarmersBenefitted'];

// this.totalNoOfAiDoneInNaipII=  this.totalAllAiSchemeDoneArray[0]['totalNoOfAiDone'];
// this.totalNoOfAnimalCoverdDoneInNaipII =  this.totalAllAiSchemeDoneArray[0]['totalNoOfAnimalCoverd'];
// this.totalNoOfFarmersBenefittedInNaipII=this.totalAllAiSchemeDoneArray[0]['totalNoOfFarmersBenefitted'];

// this.totalNoOfAiDoneInNaipIII=  this.totalAllAiSchemeDoneArray[0]['totalNoOfAiDone'];
// this.totalNoOfAnimalCoverdDoneInNaipIII =  this.totalAllAiSchemeDoneArray[0]['totalNoOfAnimalCoverd'];
// this.totalNoOfFarmersBenefittedInNaipIII=this.totalAllAiSchemeDoneArray[0]['totalNoOfFarmersBenefitted'];




  /////////////////////////////////////Group By On Districts//////////////////////////////////////
this.totalRgmDistrictWiseTypeNaipDataCount=[];
var groupByTypeDistrict = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalRgmcDistrictData=groupByTypeDistrict(this.currentDateData[0], 'District Name')
this.totalRgmDistrictWiseTypeNaipDataCount = Object.entries(totalRgmcDistrictData)
console.log("dididididiid")
console.log(this.totalRgmDistrictWiseTypeNaipDataCount)
 var keys = Object.keys(totalRgmcDistrictData);
 console.log("all keys")
 console.log(keys)
console.log(this.totalRgmDistrictWiseTypeNaipDataCount);
this.totalNaipDistrictWise=[];
this.topFiveDistrictNaipArray=[];
this.distrricts=[];
this.districtsName=[];
this.totalRgmDistrictWiseTypeNaipDataCount.forEach((y:any) =>
{
const sumallDistrictAiDone = y[1].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);
var finalObj1 = Object.assign({"District": y[0]}, {"naipaiDone": sumallDistrictAiDone});
this.totalNaipDistrictWise.push(finalObj1)
var finalObj = Object.assign({"name": y[0]}, {"code":  y[0]});
this.distrricts.push(finalObj)
this.districtsName= this.distrricts.sort(function(a:any,b:any){ return a.name.localeCompare(b.name); });
});
//------- variable use for defaul select------------------------------------------------------
//this.selectedCity1 = {name: 'ANAND',code: 'ANAND'};
console.log("district name")
console.log(this.districtsName)
var topValues = this.totalNaipDistrictWise.sort((a:any,b:any) => b['naipaiDone']-a['naipaiDone']).slice(0,5);
console.log(this.totalNaipDistrictWise)
console.log(topValues);
topValues.forEach((y:any) =>
{
var finalObj1 = Object.assign({"District": y['District']}, {"naipaiDone": this.numDifferentiation(y['naipaiDone'])});
this.topFiveDistrictNaipArray.push(finalObj1);
});
console.log("top five vacination District")
console.log(this.topFiveDistrictNaipArray)
this.topFirstPerfomanceDistrict=this.topFiveDistrictNaipArray[0]['District'];
this.topFirstPerformingDistrictAiDone=this.topFiveDistrictNaipArray[0]['naipaiDone'];

this.topSecondPerfomanceDistrict=this.topFiveDistrictNaipArray[1]['District'];
this.topSecondPerformingDistrictAiDone=this.topFiveDistrictNaipArray[1]['naipaiDone'];

this.topThirdPerfomanceDistrict=this.topFiveDistrictNaipArray[2]['District'];
this.topThirdPerformingDistrictAiDone=this.topFiveDistrictNaipArray[2]['naipaiDone'];

this.topFourthPerfomanceDistrict=this.topFiveDistrictNaipArray[3]['District'];
this.topFourthPerformingDistrictAiDone=this.topFiveDistrictNaipArray[3]['naipaiDone'];

this.topFifthPerfomanceDistrict=this.topFiveDistrictNaipArray[4]['District'];
this.topFifthPerformingDistrictAiDone=this.topFiveDistrictNaipArray[4]['naipaiDone'];
for(let state of this.totalNaipAiDoneStateWise){
  let temp = [state.statName,Number(state.totalNoOfAiDone)];
  if( state.statName=="ANDAMAN & NICOBAR ISLANDS"){
    temp = ['IN-AN',Number(state.totalNoOfAiDone)];
  }
  else if( state.statName=="LAKSHADWEEP"){
    temp = ['IN-LD',Number(state.totalNoOfAiDone)];
  }
  else if( state.statName=="ODISHA"){
    temp = ['IN-OR',Number(state.totalNoOfAiDone)];
  }
  else if( state.statName=="LADAKH"){
    temp = ['Ladakh',Number(state.totalNoOfAiDone)];
  }
  else if( state.statName=="UTTARANCHAL"){
    temp = ['IN-UT',Number(state.totalNoOfAiDone)];
  }
  else if( state.statName=="JAMMU & KASHMIR"){
    temp = ['Jammu and Kashmir',Number(state.totalNoOfAiDone)];
  }
  this.states_data.push(temp);
}
console.log("sdsdsdsds")
console.log(this.states_data)
   this.mapReady=true
  
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
    this.totalRgmSateWiseTypeNaipDataCount.forEach((y:any) =>
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
var totalTypeVacinationStateData=groupByTypeVacination(this.selectState, 'Scheme')
var totalTypeVacinationStateDataCount = Object.entries(totalTypeVacinationStateData)
this.totalAggregateStateAiData=[];
  totalTypeVacinationStateDataCount.forEach((y:any) =>
  {
      var totalVaccination =  y[1].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);

      var finalObj = Object.assign({"name": y[0]}, {"value": totalVaccination});
      this.totalAggregateStateAiData.push(finalObj)

  });
console.log(this.totalAggregateStateAiData)
this.typeOfVacinationChart = {
  title: {
    show:true,
    text: event.selectedRowValues[0],
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
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '15',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: this.totalAggregateStateAiData
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
enableRegionInteractivity: true,
//tooltip: { trigger: 'none'},
legend: 'none',
datalessRegionColor: 'transparent',
    'height': 3,
    //'width': 850,
   

    
  }
  
};
  OnChangeDistrict(event:any)
  {
    console.log(event.value.name)
    console.log(this.totalRgmDistrictWiseTypeNaipDataCount)
    this.totalRgmDistrictWiseTypeNaipDataCount.forEach((y:any) =>
    {
   if(y[0]==event.value.name)
   {
     this.selectDistrict=y[1]
   }
   
    });
    console.log(this.selectDistrict)
    this.totalDistrictTypeAiDataCount=[];
var groupByDistrictTotalVaccinatioTypeData = function(xs:any, key:any) {
return xs.reduce(function(rv:any, x:any) {
  (rv[x[key]] = rv[x[key]] || []).push(x);
  return rv;
}, {});
};
var totalVaccinationTypeData=groupByDistrictTotalVaccinatioTypeData(this.selectDistrict, 'Scheme')
console.log(totalVaccinationTypeData)
this.totalDistrictTypeAiDataCount = Object.entries(totalVaccinationTypeData)
console.log(this.totalDistrictTypeAiDataCount)
this.farmersDistrictBenifitedCountArray=[];
this.totalDistrictWiseAiSchemeDoneArray=[];
this.totalDistrictTypeAiDataCount.forEach((y:any) =>
{
  var  sumallAiDone = y['1'].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);
  var  sumallAnimalsCoverd = y['1'].map((item:any) => Number(item['No. of Animal Covered'])).reduce((prev:any, curr:any) => prev + curr, 0);
  var  sumallFarmersBenifitted = y['1'].map((item:any) => Number(item["Total no. of farmer's benefitted"])).reduce((prev:any, curr:any) => prev + curr, 0);
  this.farmersDistrictBenifitedCountArray.push(sumallFarmersBenifitted)
 // this.SchemeCountArray.push(sumallAiDone)
  var allSchemeData = Object.assign({"schemeName": y[0]}, {"totalNoOfAiDone": this.numDifferentiation(sumallAiDone)},{"totalNoOfAnimalCoverd": this.numDifferentiation(sumallAnimalsCoverd)}, {"totalNoOfFarmersBenefitted": this.numDifferentiation(sumallFarmersBenifitted)});
  this.totalDistrictWiseAiSchemeDoneArray.push(allSchemeData);
});
console.log("district wise dataaa")
console.log(this.totalDistrictWiseAiSchemeDoneArray)
// if(this.totalDistrictWiseAiSchemeDoneArray[2]['totalNoOfAiDone']){
//   this.totalNoOfAiDoneInNaipI=  this.totalDistrictWiseAiSchemeDoneArray[2]['totalNoOfAiDone'];
// }
// else{
//   this.totalNoOfAiDoneInNaipI='NA';
// }
this.totalNoOfAiDoneInNaipI=  this.totalDistrictWiseAiSchemeDoneArray[2]['totalNoOfAiDone'];
this.totalNoOfAnimalCoverdDoneInNaipI =  this.totalDistrictWiseAiSchemeDoneArray[2]['totalNoOfAnimalCoverd'];
this.totalNoOfFarmersBenefittedInNaipI=this.totalDistrictWiseAiSchemeDoneArray[2]['totalNoOfFarmersBenefitted'];

this.totalNoOfAiDoneInNaipII=  this.totalDistrictWiseAiSchemeDoneArray[1]['totalNoOfAiDone'];
this.totalNoOfAnimalCoverdDoneInNaipII =  this.totalDistrictWiseAiSchemeDoneArray[1]['totalNoOfAnimalCoverd'];
this.totalNoOfFarmersBenefittedInNaipII=this.totalDistrictWiseAiSchemeDoneArray[1]['totalNoOfFarmersBenefitted'];

this.totalNoOfAiDoneInNaipIII=  this.totalDistrictWiseAiSchemeDoneArray[0]['totalNoOfAiDone'];
this.totalNoOfAnimalCoverdDoneInNaipIII =  this.totalDistrictWiseAiSchemeDoneArray[0]['totalNoOfAnimalCoverd'];
this.totalNoOfFarmersBenefittedInNaipIII=this.totalDistrictWiseAiSchemeDoneArray[0]['totalNoOfFarmersBenefitted'];

  }                     
  
}
