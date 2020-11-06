import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricUsComponent } from "../app/components/historic-us/historic-us.component";
import { CurrentUsComponent } from "../app/components/current-us/current-us.component";
import { CurrentStatesComponent } from "../app/components/current-states/current-states.component";
import { HistoricStatesComponent } from './components/historic-states/historic-states.component';
import { HistoricDateUsComponent } from './components/historic-date-us/historic-date-us.component';
import { StateDateComponent } from './components/state-date/state-date.component';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path:"historicus", component: HistoricUsComponent },
  { path:"currentus", component:CurrentUsComponent },
  { path:"currentstate", component:CurrentStatesComponent},
  { path:"historicstate", component:HistoricStatesComponent},
  { path:"historicdateus", component:HistoricDateUsComponent},
  { path:"statedate", component:StateDateComponent},
  { path:"", component: HistoricUsComponent},
  { path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
