import {Component, OnInit} from '@angular/core';
import {LineChartService} from "../../shared/services/charts/lineChart.service";
import {LineChartData} from "../../shared/components/lineChart/lineChart.component";
import {DonutChartService} from "../../shared/services/charts/donutChart.service";
import {DonutChartData} from "../../shared/components/donutChart/donutChart.component";
import {BarChartData} from "../../shared/components/barChart/barChart.component";
import {AreaChartData} from "../../shared/components/areaChart/areaChart.component";
import {BarChartService} from "../../shared/services/charts/barChart.service";
@Component({
  moduleId: module.id,
  selector: 'morris',
  templateUrl: 'morris.componenet.html',
  providers: [LineChartService , DonutChartService, BarChartService]
})


export class MorrisComponent  implements OnInit{

  ngOnInit(): void {
    this.initLineChart();
    this.initDonutChart();
    this.initBarChart();
    this.initAreaChart();
  }

  lineChartData : LineChartData = new LineChartData();
  donutChartData : DonutChartData = new DonutChartData();
  barChartData : BarChartData = new BarChartData();
  areaChartData : AreaChartData = new AreaChartData();

  initLineChart() : void{
    this.lineChartData.data = LineChartService.getLineChartData();
    this.lineChartData.xkey = ['year'];
    this.lineChartData.ykey = ['Serie A', 'Serie B'];
    this.lineChartData.lables = ['Serie A', 'Serie B'];
    this.lineChartData.lineColors = ['rgb(32, 158, 145)', 'rgb(223, 184, 28)'];
  }

  initDonutChart() : void {
    this.donutChartData.data = DonutChartService.getDonutChartData();
    this.donutChartData.colors = ['rgb(223, 184, 28)', 'rgb(232, 86, 86)', 'rgb(32, 158, 145)'];
    this.donutChartData.formatterFunction = function (x : any) {
      return '$ ' + x.toFixed(2);
    }
  }

  initBarChart() : void {
    this.barChartData.data = BarChartService.getBarChartData();
    this.barChartData.xkey = ['year'];
    this.barChartData.ykey = ['Serie A', 'Serie B'];
    this.barChartData.lables = ['Serie A', 'Serie B'];
    this.barChartData.lineColors = ['rgb(32, 158, 145)', 'rgb(223, 184, 28)'];
  }

  initAreaChart() : void {
    this.areaChartData.data = LineChartService.getLineChartData();
    this.areaChartData.xkey = ['year'];
    this.areaChartData.ykey = ['Serie A', 'Serie B'];
    this.areaChartData.lables = ['Serie A', 'Serie B'];
    this.areaChartData.lineColors = ['rgb(32, 158, 145)', 'rgb(223, 184, 28)'];
  }
}
