import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import {TooltipModule, ModalModule} from 'ng2-bootstrap';
import {BrowserModule} from "@angular/platform-browser";
import {LineChartService} from "./services/charts/lineChart.service";
import {LineChartComponent} from "./components/lineChart/lineChart.component";
import {DonutChartComponent} from "./components/donutChart/donutChart.component";
import {DonutChartService} from "./services/charts/donutChart.service";
import {BarChartComponent} from "./components/barChart/barChart.component";
import {BarChartService} from "./services/charts/barChart.service";
import {AreaChartComponent} from "./components/areaChart/areaChart.component";

@NgModule({
  imports: [BrowserModule,CommonModule, RouterModule, FormsModule, ReactiveFormsModule, TooltipModule, ModalModule],
  declarations: [LineChartComponent, DonutChartComponent, BarChartComponent, AreaChartComponent],
  exports: [BrowserModule,CommonModule, FormsModule, RouterModule, LineChartComponent, DonutChartComponent, BarChartComponent, AreaChartComponent],
  providers : [Location, LineChartService, DonutChartService, BarChartService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [LineChartService, DonutChartService, BarChartService]
    };
  }
}
