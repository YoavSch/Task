import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {Ng2BootstrapModule} from "ng2-bootstrap";
import {MorrisComponent} from "./morris/morris.componenet";

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, Ng2BootstrapModule],
  declarations: [MorrisComponent],
  exports: [MorrisComponent]
})

export class ChartsModule { }
