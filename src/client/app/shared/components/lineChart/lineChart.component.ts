import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'line-chart',
  templateUrl: 'lineChart.component.html',
  providers : []
})


export class LineChartComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    if(this.lineData === null || this.lineData === undefined) return;
    window['morrisObj'] =
      new window['Morris'].Line({
        element: 'morris-line-chart',
        data: this.lineData.data,
        xkey: this.lineData.xkey,
        ykeys: this.lineData.ykey,
        labels: this.lineData.lables,
        lineColors : this.lineData.lineColors,
        pointSize: 2,
        hideHover: 'auto',
        resize: true
      });
  }

  @Input() lineData : LineChartData = null;
}



export class LineChartData {
  public xkey : Array<string>;
  public ykey : Array<string>;
  public lables : Array<string>;
  public lineColors : Array<string>;
  public data : Array<any>;
  constructor(){
    this.data = [];
  }
}
