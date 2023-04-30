import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './flights/flights.component';
import { AddflightComponent } from './addflight/addflight.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlightsRoutingModule,MatCardModule, MatFormFieldModule,MatInputModule,MatInputModule,MatButtonModule,ReactiveFormsModule,
  ],
  declarations: [FlightsComponent, AddflightComponent]
})
export class FlightsModule { }
