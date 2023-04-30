import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule , AppRoutingModule,
  ],
  declarations: [HeaderComponent,HomeComponent],
  exports:[
      AppRoutingModule,HeaderComponent
    ],
    providers:[ ]
})
export class CoreModule { }
