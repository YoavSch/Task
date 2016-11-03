import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { SharedModule } from './shared/shared.module';
import {Ng2BootstrapModule} from 'ng2-bootstrap';
import {ChartsModule} from "./charts/charts.module";

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), ChartsModule, SharedModule.forRoot(), Ng2BootstrapModule],
  declarations: [AppComponent],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide : APP_BASE_HREF , useValue: '<%= APP_BASE %>'},
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
