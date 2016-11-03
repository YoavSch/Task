import { Route } from '@angular/router';
import {MorrisComponent} from "./morris/morris.componenet";

export const ChartsRoutes: Route[] = [
  {
    path: '',
    children: [
      { path: 'charts/morris', component: MorrisComponent},
    ]
  }
];
