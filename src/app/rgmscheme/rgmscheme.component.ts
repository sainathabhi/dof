import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { RgmschemeService } from './rgmscheme.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-rgmscheme',
  templateUrl: './rgmscheme.component.html',
  styleUrls: ['./rgmscheme.component.scss']
})
export class RgmschemeComponent implements OnInit {
  
  yearWiseEnroleMentChart:any;
  states_data = [['State','Total AI Done']];
  NaipAllData:  any = new Array()
  valueInFormate:any
  totalAllSchemeDoneArray:  any = new Array()
  SchemeCountArray:  any = new Array()
  farmersBenifitedCountArray:  any = new Array()
  clavesBornArray:  any = new Array()
  totalSateWiseTypeNaipDataCount:  any = new Array()
  totalNaipStateWise:  any = new Array()
  topFiveNaipStateArray:  any = new Array()
  totalAggregateStateNaipData:  any = new Array()
  totalDateWiseNaipIIIAiDoneArray:  any = new Array()
  naipIIIAiDate:  any = new Array()
  totalNoOfNaipIIIAiDoneArray:  any = new Array()
  NaipIIAiDate:  any = new Array()
  totalNoOfNaipIIAiDoneArray:  any = new Array()
  totalDateWiseNaipIIAiDoneArray:  any = new Array()
  result:  any = new Array()
  response:  any = new Array()
  currentDateData:  any = new Array()
  totalAllNaipIISchemeDoneArray:  any = new Array()
  totalAllNaipISchemeDoneArray:  any = new Array()
  mapReady=false;
  myCSSclass=true;
  myCSSclass1=false;
  showChartNaipIIchart=false;
  showChartNaipIchart=true;
  totalNoOfAiDoneCount: any;
  totalNoOfAiAllSchemeDone: any;
  totalNoOffarmersBenifited: any;
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
  totalDateWiseNaipIIIataCount:any;
  clavesBornArrayCount: any;
  totalNoOfClavisBornDone: any;
  topFirstPerfomanceState: any;
  topFirstPerformingNaipDone: any;
  topSecondPerfomanceState: any;
  topSecondPerformingNaipDone: any;
  topThirdPerfomanceState: any;
  topThirdPerformingNaipDone: any;
  topFourthPerfomanceState: any;
  topFourthPerformingNaipDone: any;
  topFifthPerfomanceState: any;
  topFifthPerformingNaipDone: any;
  typeOfVacinationChart:any;
  selectState: any;
  schemeTypeNaipIIIData: any;
  showNaipIIEnrolementChart:any;
  naipIITypeAiData: any;
  totalDateWiseNaipIIAiDataCount: any;
  currentNaipIIData: any;
  currentNaipIData: any;
  constructor(public serv: RgmschemeService) { }
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
    this.RgmDashboardData();
    this.showEnrolementGraph();
  }


  RgmDashboardData()
  {
    this.serv.getNaipData().subscribe((res)=>{
      this.NaipAllData=res;
 console.log(this.NaipAllData)
 var groupByScheme = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var totalAllNaipSchemeData=groupByScheme(this.NaipAllData, 'Scheme')
var totalAllNaipSchemeDataCount = Object.entries(totalAllNaipSchemeData)


/////////////////////////////////////Group By On Date////////////////////////////////////
 var groupByDataDate = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var totalCurrentDateData=groupByDataDate(this.NaipAllData, 'DataDate')
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

 /////////////////////////////////////Group By On  NAIPIII DATA Scheme////////////////////////////////////
 var groupByScheme = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var totalSchemeData=groupByScheme(this.currentDateData[0], 'Scheme')
var totalSchemeDataCount = Object.entries(totalSchemeData)
console.log("groupb y total schemess")
console.log(totalSchemeDataCount)
this.totalAllSchemeDoneArray=[];
this.clavesBornArray=[];
this.farmersBenifitedCountArray=[];
this.SchemeCountArray=[];
totalSchemeDataCount.forEach((y:any) =>
{
var  sumallAiDone = y['1'].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);
var  sumallAnimalsCoverd = y['1'].map((item:any) => Number(item['No. of Animal Covered'])).reduce((prev:any, curr:any) => prev + curr, 0);
var  sumallClavesBornDone = y['1'].map((item:any) => Number(item['Total calves born'])).reduce((prev:any, curr:any) => prev + curr, 0);
var  sumallFarmersBenifitted = y['1'].map((item:any) => Number(item["Total no. of farmer's benefitted"])).reduce((prev:any, curr:any) => prev + curr, 0);
this.SchemeCountArray.push(sumallAiDone)
this.farmersBenifitedCountArray.push(sumallFarmersBenifitted)
this.clavesBornArray.push(sumallClavesBornDone)
var allSchemeData = Object.assign({"schemeName": y[0]}, {"totalNoOfAiDone": this.numDifferentiation(sumallAiDone)},{"totalNoOfAnimalCoverd": this.numDifferentiation(sumallAnimalsCoverd)}, {"totalNoOfFarmersBenefitted": this.numDifferentiation(this.farmersBenifitedCountArray)});
this.totalAllSchemeDoneArray.push(allSchemeData);
});
console.log("all scheme current data")
console.log(this.clavesBornArray);
console.log(this.totalAllSchemeDoneArray)
this.totalNoOfAiDoneCount = this.SchemeCountArray.reduce(function(a:any,b:any) {
  return (+a)+(+b);
});
this.totalNoOffarmersBenifited = this.farmersBenifitedCountArray.reduce(function(a:any,b:any) {
  return (+a)+(+b);
});

this.totalNoOfClavisBornDone=this.numDifferentiation(this.clavesBornArray);

this.totalNoOfAiAllSchemeDone=this.numDifferentiation(this.totalNoOfAiDoneCount);
this.totalFarmersBenifitedAllSchemeDone=this.numDifferentiation(this.totalNoOfAiDoneCount);
console.log("total all schemeeeeeeeee")
console.log(this.totalNoOfClavisBornDone)
console.log(this.totalAllSchemeDoneArray)

this.totalNoOfAiDoneInNaipIII=  this.totalAllSchemeDoneArray[0]['totalNoOfAiDone'];
this.totalNoOfAnimalCoverdDoneInNaipIII =  this.totalAllSchemeDoneArray[0]['totalNoOfAnimalCoverd'];
this.totalNoOfFarmersBenefittedInNaipIII=this.totalAllSchemeDoneArray[0]['totalNoOfFarmersBenefitted'];

/////////////////////////////////////Group By On  NAIPII DATA Scheme////////////////////////////////////


//this.SchemeNaipIICountArray=[];
console.log('NAIPII DATTTTTTTTTTTTTTTTTTTTT')
console.log(this.currentNaipIIData)
var groupByScheme = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var totalSchemeNaipIIData=groupByScheme(this.currentNaipIIData, 'Scheme')
var totalNaipSchemeDataCount = Object.entries(totalSchemeNaipIIData)
this.totalAllNaipIISchemeDoneArray=[];
totalNaipSchemeDataCount.forEach((y:any) =>
{
var  sumallAiDone = y['1'].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);
var  sumallAnimalsCoverd = y['1'].map((item:any) => Number(item['No. of Animal Covered'])).reduce((prev:any, curr:any) => prev + curr, 0);
var  sumallFarmersBenifitted = y['1'].map((item:any) => Number(item["Total no. of farmer's benefitted"])).reduce((prev:any, curr:any) => prev + curr, 0);

var allSchemeData = Object.assign({"schemeName": y[0]}, {"totalNoOfAiDone": this.numDifferentiation(sumallAiDone)},{"totalNoOfAnimalCoverd": this.numDifferentiation(sumallAnimalsCoverd)}, {"totalNoOfFarmersBenefitted": this.numDifferentiation(sumallFarmersBenifitted)});
this.totalAllNaipIISchemeDoneArray.push(allSchemeData);
});

this.totalNoOfAiDoneInNaipII=  this.totalAllNaipIISchemeDoneArray[0]['totalNoOfAiDone'];
this.totalNoOfAnimalCoverdDoneInNaipII =  this.totalAllNaipIISchemeDoneArray[0]['totalNoOfAnimalCoverd'];
this.totalNoOfFarmersBenefittedInNaipII=this.totalAllNaipIISchemeDoneArray[0]['totalNoOfFarmersBenefitted'];



/////////////////////////////////////Group By On  NAIPI DATA Scheme////////////////////////////////////


//this.SchemeNaipIICountArray=[];
console.log('NAIPII DATTTTTTTTTTTTTTTTTTTTT')
console.log(this.currentNaipIData)
var groupByScheme = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var totalSchemeNaipIData=groupByScheme(this.currentNaipIData, 'Scheme')
var totalNaipISchemeDataCount = Object.entries(totalSchemeNaipIData)
this.totalAllNaipISchemeDoneArray=[];
totalNaipISchemeDataCount.forEach((y:any) =>
{
var  sumallAiDone = y['1'].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);
var  sumallAnimalsCoverd = y['1'].map((item:any) => Number(item['No. of Animal Covered'])).reduce((prev:any, curr:any) => prev + curr, 0);
var  sumallFarmersBenifitted = y['1'].map((item:any) => Number(item["Total no. of farmer's benefitted"])).reduce((prev:any, curr:any) => prev + curr, 0);

var allSchemeData = Object.assign({"schemeName": y[0]}, {"totalNoOfAiDone": this.numDifferentiation(sumallAiDone)},{"totalNoOfAnimalCoverd": this.numDifferentiation(sumallAnimalsCoverd)}, {"totalNoOfFarmersBenefitted": this.numDifferentiation(sumallFarmersBenifitted)});
this.totalAllNaipISchemeDoneArray.push(allSchemeData);
});

this.totalNoOfAiDoneInNaipI=  this.totalAllNaipISchemeDoneArray[0]['totalNoOfAiDone'];
this.totalNoOfAnimalCoverdDoneInNaipI =  this.totalAllNaipISchemeDoneArray[0]['totalNoOfAnimalCoverd'];
this.totalNoOfFarmersBenefittedInNaipI=this.totalAllNaipISchemeDoneArray[0]['totalNoOfFarmersBenefitted'];

totalAllNaipSchemeDataCount.forEach((y:any) =>
{
if(y[0]=="NAIP III")
{
  console.log('fmd data')
  console.log(y[1])
 this.schemeTypeNaipIIIData=y[1];

 var groupByDateWiseFMDData = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalDateWiseFMDData=groupByDateWiseFMDData(this.schemeTypeNaipIIIData, 'DataDate')
this.totalDateWiseNaipIIIataCount = Object.entries(totalDateWiseFMDData)
console.log("date Wise Data ")
console.log(this.totalDateWiseNaipIIIataCount)
this.totalDateWiseNaipIIIataCount.forEach((y:any) =>
{
const sumallTotalAiDone = y['1'].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);
var allNaipIIIData = Object.assign({"date": y[0]}, {"totalNoOfNaipIIIAiDone": sumallTotalAiDone});
this.totalDateWiseNaipIIIAiDoneArray.push(allNaipIIIData)
});
console.log("NaipIII data datewise")

console.log(this.totalDateWiseNaipIIIAiDoneArray)
this.naipIIIAiDate=[];
this.totalNoOfNaipIIIAiDoneArray=[];
this.totalDateWiseNaipIIIAiDoneArray.forEach((y:any) =>
  {
this.naipIIIAiDate.push(y['date']);
this.totalNoOfNaipIIIAiDoneArray.push(y['totalNoOfNaipIIIAiDone']);
  });
  this.showEnrolementGraph();
}
console.log("NaipIII Data")
console.log(this.naipIIIAiDate)
console.log(this.totalNoOfNaipIIIAiDoneArray)
if(y[0]=="NAIP II")
{
  console.log(y[1])
 this.naipIITypeAiData=y[1];

 var groupByDateWiseBrucellosisData = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalDateWiseAiData=groupByDateWiseBrucellosisData(this.naipIITypeAiData, 'DataDate')
this.totalDateWiseNaipIIAiDataCount = Object.entries(totalDateWiseAiData)
this.totalDateWiseNaipIIAiDoneArray=[];
this.totalDateWiseNaipIIAiDataCount.forEach((y:any) =>
{
const sumallDateWiseVaccination = y['1'].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);
console.log(sumallDateWiseVaccination)

var vaccinationData = Object.assign({"date": y[0]}, {"totalNoOfNaipIIAiDone": sumallDateWiseVaccination});
this.totalDateWiseNaipIIAiDoneArray.push(vaccinationData)
});
this.NaipIIAiDate=[];
this.totalNoOfNaipIIAiDoneArray=[];
this.totalDateWiseNaipIIAiDoneArray.forEach((y:any) =>
  {
this.NaipIIAiDate.push(y['date']);
this.totalNoOfNaipIIAiDoneArray.push(y['totalNoOfNaipIIAiDone']);
  });
}
});
console.log("NaipII Data")
console.log(this.NaipIIAiDate)
console.log(this.totalNoOfNaipIIAiDoneArray)
//////////////////////////////////////Group By State Data/////////////////////////////////////////
this.totalSateWiseTypeNaipDataCount=[];
var groupByTypeState = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var totalStateData=groupByTypeState(this.currentDateData[0], 'State Name')
this.totalSateWiseTypeNaipDataCount = Object.entries(totalStateData)
console.log(this.totalSateWiseTypeNaipDataCount);
this.totalNaipStateWise=[];
this.totalSateWiseTypeNaipDataCount.forEach((y:any) =>
{
const sumallStateNaip = y[1].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);
var finalObj1 = Object.assign({"State": y[0]}, {"totalNoOfNaipStateWise": sumallStateNaip});
this.totalNaipStateWise.push(finalObj1)
});

var topValues = this.totalNaipStateWise.sort((a:any,b:any) => b['totalNoOfNaipStateWise']-a['totalNoOfNaipStateWise']).slice(0,5);
console.log("top states")
console.log(this.totalNaipStateWise)
this.topFiveNaipStateArray=[];

topValues.forEach((y:any) =>
{
//this.numDifferentiation(y['VacinationDone']);
var finalObj1 = Object.assign({"State": y['State']}, {"totalNoOfNaipStateWise": this.numDifferentiation(y['totalNoOfNaipStateWise'])});
this.topFiveNaipStateArray.push(finalObj1);
});
console.log("top five vacination state")
console.log(this.topFiveNaipStateArray)
this.topFirstPerfomanceState=this.topFiveNaipStateArray[0]['State'];
this.topFirstPerformingNaipDone=this.topFiveNaipStateArray[0]['totalNoOfNaipStateWise'];

this.topSecondPerfomanceState=this.topFiveNaipStateArray[1]['State'];
this.topSecondPerformingNaipDone=this.topFiveNaipStateArray[1]['totalNoOfNaipStateWise'];

this.topThirdPerfomanceState=this.topFiveNaipStateArray[2]['State'];
this.topThirdPerformingNaipDone=this.topFiveNaipStateArray[2]['totalNoOfNaipStateWise'];

this.topFourthPerfomanceState=this.topFiveNaipStateArray[3]['State'];
this.topFourthPerformingNaipDone=this.topFiveNaipStateArray[3]['totalNoOfNaipStateWise'];

this.topFifthPerfomanceState=this.topFiveNaipStateArray[4]['State'];
this.topFifthPerformingNaipDone=this.topFiveNaipStateArray[4]['totalNoOfNaipStateWise'];

for(let state of this.totalNaipStateWise){
  let temp = [state.State,Number(state.totalNoOfNaipStateWise)];
  if( state.State=="ANDAMAN & NICOBAR ISLANDS"){
    temp = ['IN-AN',Number(state.totalNoOfNaipStateWise)];
  }
  else if( state.State=="LAKSHADWEEP"){
    temp = ['IN-LD',Number(state.totalNoOfNaipStateWise)];
  }
  else if( state.State=="ODISHA"){
    temp = ['IN-OR',Number(state.totalNoOfNaipStateWise)];
  }
  else if( state.State=="LADAKH"){
    temp = ['Ladakh',Number(state.totalNoOfNaipStateWise)];
  }
  else if( state.State=="UTTARANCHAL"){
    temp = ['IN-UT',Number(state.totalNoOfNaipStateWise)];
  }
  else if( state.State=="JAMMU & KASHMIR"){
    temp = ['Jammu and Kashmir',Number(state.totalNoOfNaipStateWise)];
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
    this.showChartNaipIchart=false;
    this.showChartNaipIIchart=true;
    this.myCSSclass1=true
    this.myCSSclass=false
    this.showNaipIIEnrolementChart=
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
          
            data: this.NaipIIAiDate,
           
          },
          yAxis: {
            type: 'value',
            axisLine:{                 //Coordinate axis
              show:false,             //Show Axis axis or not
             // onZero:false,           //Whether the axis of X-axis or Y-axis is on the 0 scale of another axis is valid only when the other axis is a numerical axis and contains the 0 scale
          },
          },
          height: 150,
          series: [
            {
              data:this.totalNoOfNaipIIAiDoneArray,
              type: 'bar',
              color:'#8dd9cc'
    
            //  color: '#8E24AA'
            }
          ]
        };
  }
  public select(event: ChartSelectEvent) {
    console.log(event.selectedRowValues[0])
    console.log(this.totalSateWiseTypeNaipDataCount)

    this.totalSateWiseTypeNaipDataCount.forEach((y:any) =>
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
console.log(totalTypeVacinationStateDataCount)
this.totalAggregateStateNaipData=[];
totalTypeVacinationStateDataCount.forEach((y:any) =>
{
    var totalVaccination =  y[1].map((item:any) => Number(item['Total no. of AI Done'])).reduce((prev:any, curr:any) => prev + curr, 0);

    var finalObj = Object.assign({"name": y[0]}, {"value": totalVaccination});
    this.totalAggregateStateNaipData.push(finalObj)

});
console.log(this.totalAggregateStateNaipData)


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
         // radius: ['40%', '70%'],
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
         
          data: this.totalAggregateStateNaipData
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


  showEnrolementGraph()
  {
    this.showChartNaipIchart=true
    this.showChartNaipIIchart=false
    this.myCSSclass=true
    this.myCSSclass1=false
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
          data:this.naipIIIAiDate
        },
        yAxis: {
          type: 'value',
          axisLine:{                 //Coordinate axis
            show:true,             //Show Axis axis or not
            onZero:true,           //Whether the axis of X-axis or Y-axis is on the 0 scale of another axis is valid only when the other axis is a numerical axis and contains the 0 scale
        },
        },
        height: 110,
        series: [
          {
            data: this.totalNoOfNaipIIIAiDoneArray,
            type: 'bar',
            color:'#8dd9cc'
  
          //  color: '#8E24AA'
          }
        ]
      };
  
    }
    
}
