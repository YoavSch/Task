import {Injectable} from "@angular/core";
@Injectable()

export class BarChartService {
  public static getBarChartData(){
    return  [{
      year: '2006',
      'Serie A': 100,
      'Serie B': 80,
    },{
      year: '2007',
      'Serie A': 75,
      'Serie B': 65,
    },{
      year: '2008',
      'Serie A': 50,
      'Serie B': 40,
    },{
      year: '2009',
      'Serie A': 75,
      'Serie B': 65,
    },{
      year: '2010',
      'Serie A': 50,
      'Serie B': 40,
    },{
      year: '2011',
      'Serie A': 75,
      'Serie B': 65,
    },{
      year: '2012',
      'Serie A': 100,
      'Serie B': 90,
    }];
  }
}
