import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'donut-chart',
  templateUrl: 'donutChart.component.html',
  providers : []
})


export class DonutChartComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    var self = this;
    if(this.donutData === null || this.donutData === undefined) return;
    window['morrisObj'] =
      new window['Morris'].Donut({
        element: 'morris-donut-chart',
        data: this.donutData.data,
        colors : this.donutData.colors,
        formatter: function (x) {
          return self.donutData.formatterFunction(x);
        },
        pointSize: 2,
        hideHover: 'auto',
        resize: true
      });
  }

  @Input() donutData : DonutChartData = null;
}



export class DonutChartData {
  public formatterFunction : Function;
  public colors : Array<string>;
  public data : Array<any>;
  constructor(){
    this.data = [];
  }
}
