import {Injectable} from "@angular/core";
@Injectable()

export class DonutChartService {
  public static getDonutChartData(){
    return [
      {value: 12, label: 'Download Sales'},
      {value: 20, label: 'Mail-Order Sales'},
      {value: 30, label: 'In-Store Sales'}

    ];
  }
}
