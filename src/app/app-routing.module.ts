import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhidfschemeComponent } from './ahidfscheme/ahidfscheme.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DidfschemeComponent } from './didfscheme/didfscheme.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NlmschemeComponent } from './nlmscheme/nlmscheme.component';
import { NpddschemeComponent } from './npddscheme/npddscheme.component';
import { RgmschemeComponent } from './rgmscheme/rgmscheme.component';
import { SdcfposchemeComponent } from './sdcfposcheme/sdcfposcheme.component';
import { StatedashboardComponent } from './statedashboard/statedashboard.component';
import { StatewiseLhdcschemeComponent } from './statewise-lhdcscheme/statewise-lhdcscheme.component';
import { AuthenticationGuard } from './authentication.guard';
import { LogoutComponent } from './logout/logout.component';
import { StatewiseNlmschemeComponent } from './statewise-nlmscheme/statewise-nlmscheme.component';
import { StatewiseRgmschemeComponent } from './statewise-rgmscheme/statewise-rgmscheme.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  // canActivate: [PublicauthGuard]
},
{
  path: 'mainpage',
  component: MainpageComponent,canActivate:[AuthenticationGuard]
},
{
  path: 'dashboard',
  component: DashboardComponent,canActivate:[AuthenticationGuard]
},
{
  path: 'NLM',
  component: NlmschemeComponent,canActivate:[AuthenticationGuard]
},
// {
//   path: 'statewise-NLM',
//   component: StatewiseNlmschemeComponent,canActivate:[AuthenticationGuard]
// },
{
  path: 'AHIDF',
  component: AhidfschemeComponent,canActivate:[AuthenticationGuard]
},
{
  path: 'NPDD',
  component: NpddschemeComponent,canActivate:[AuthenticationGuard]
},
{
  path: 'DIDF',
  component: DidfschemeComponent,canActivate:[AuthenticationGuard]
},
{
  path: 'SDCFPO',
  component: SdcfposchemeComponent,canActivate:[AuthenticationGuard]
},
{
  path: 'RGM',
  component: RgmschemeComponent,canActivate:[AuthenticationGuard]
},
{
  path: 'statewise-RGM',
  component: StatewiseRgmschemeComponent,canActivate:[AuthenticationGuard]
},
{
  path: 'statewise-LHDCP',
  component: StatewiseLhdcschemeComponent,canActivate:[AuthenticationGuard]
},
{
  path: 'LHDCP',
  component: StatedashboardComponent,canActivate:[AuthenticationGuard]
},
{
  path: 'logout',
  component: LogoutComponent,
  // canActivate: [PublicauthGuard]
},
{ path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
