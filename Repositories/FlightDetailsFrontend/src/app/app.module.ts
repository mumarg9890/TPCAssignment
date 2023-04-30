import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/header/header.component';
import { AuthModule } from './Auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './Services/auth.service';
import { HomeComponent } from './Core/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule,MatIconModule} from '@angular/material';
import { CoreModule } from './Core/core.module';
import { FlightsModule } from './flights/flights.module';
import { FlightsService } from './Services/flights.service';
import { AuthInterceptor } from './Shared/auth.interceptor';
import { AuthGuard } from './Auth/auth-guard.service';
import { AuthManagerGuard } from './Auth/auth-guard-manager.service';
import { AuthAdminGuard } from './Auth/auth-guard-admin.service';


@NgModule({
  declarations: [
    AppComponent
        
  ],
  imports: [
    BrowserModule,FormsModule,AuthModule,CoreModule,HttpClientModule, BrowserAnimationsModule,
   FlightsModule
  ],
  providers: [AuthService,FlightsService, AuthGuard,AuthManagerGuard,AuthAdminGuard,
     {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
