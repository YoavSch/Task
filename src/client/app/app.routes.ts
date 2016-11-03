import { Routes } from '@angular/router';
import {ChartsRoutes} from "./charts/charts.routes";

export const routes: Routes = [
  ...ChartsRoutes,
  {path: '**', redirectTo: 'charts/morris'}
];
