import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInnComponent } from './sign-inn/sign-inn.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { FlightsModule } from '../flights/flights.module';
import { CoreModule } from '../Core/core.module';

@NgModule({
  imports: [
    CommonModule,AuthenticationRoutingModule, MatFormFieldModule,MatInputModule,MatInputModule,MatButtonModule,ReactiveFormsModule,
    MatSelectModule,
    CoreModule
  ],
  declarations: [SignInnComponent,
    SignUpComponent]
})
export class AuthModule { }
