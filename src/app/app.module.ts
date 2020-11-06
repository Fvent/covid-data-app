import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HistoricUSService } from "../app/services/historic-us.service";
import { CurrentUSService } from "../app/services/current-us.service";
import { HistoricUsComponent } from './components/historic-us/historic-us.component';
import { CurrentUsComponent } from './components/current-us/current-us.component';
import { HistoricDateUsComponent } from './components/historic-date-us/historic-date-us.component';
import { HistoricStatesComponent } from './components/historic-states/historic-states.component';
import { CurrentStatesComponent } from './components/current-states/current-states.component';
import { CurrentStateService } from "../app/services/current-state.service";
import { HistoricStateService } from "../app/services/historic-state.service";
import { StateDateService } from "../app/services/state-date.service";
import { DateUsValuesService } from "../app/services/date-us-values.service";
import { DateFormatPipe } from './pipes/date-format.pipe';
import { StateDateComponent } from './components/state-date/state-date.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HistoricUsComponent,
    CurrentUsComponent,
    HistoricDateUsComponent,
    HistoricStatesComponent,
    CurrentStatesComponent,
    DateFormatPipe,
    StateDateComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HistoricUSService, 
    CurrentUSService, 
    CurrentStateService, 
    HistoricStateService,
    DateUsValuesService,
    StateDateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
