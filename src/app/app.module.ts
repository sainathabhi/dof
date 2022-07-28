import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatedashboardComponent } from './statedashboard/statedashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';

import { HttpClientModule } from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NlmschemeComponent } from './nlmscheme/nlmscheme.component';
import { AhidfschemeComponent } from './ahidfscheme/ahidfscheme.component';
import { NpddschemeComponent } from './npddscheme/npddscheme.component';
import { RgmschemeComponent } from './rgmscheme/rgmscheme.component';
import { SdcfposchemeComponent } from './sdcfposcheme/sdcfposcheme.component';
import { HeaderComponent } from './header/header.component';
import { DidfschemeComponent } from './didfscheme/didfscheme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { StatewiseLhdcschemeComponent } from './statewise-lhdcscheme/statewise-lhdcscheme.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LogoutComponent } from './logout/logout.component';
import { AuthguradServiceService } from './authgurad-service.service';
import { StatewiseNlmschemeComponent } from './statewise-nlmscheme/statewise-nlmscheme.component';
import { StatewiseRgmschemeComponent } from './statewise-rgmscheme/statewise-rgmscheme.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    DashboardComponent,
    StatedashboardComponent,
    NlmschemeComponent,
    AhidfschemeComponent,
    NpddschemeComponent,
    RgmschemeComponent,
    SdcfposchemeComponent,
    HeaderComponent,
    DidfschemeComponent,
    StatewiseLhdcschemeComponent,
    LogoutComponent,
    StatewiseNlmschemeComponent,
    StatewiseRgmschemeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2GoogleChartsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    DropdownModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10
    }),

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [
    AuthguradServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
