import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { AddflightComponent } from './addflight/addflight.component';
import { AuthGuard } from '../Auth/auth-guard.service';
import { AuthManagerGuard } from '../Auth/auth-guard-manager.service';

const routes: Routes = [
  {path:'Flights', component:FlightsComponent},
  {path:'AddFlight',component:AddflightComponent,canActivate:[AuthGuard , AuthManagerGuard]},
  { path: 'UpdateFlight/:id',component:AddflightComponent,canActivate:[AuthGuard , AuthManagerGuard] },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
