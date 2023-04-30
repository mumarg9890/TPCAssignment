import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Injectable } from "@angular/core";
import { switchMap, take } from "rxjs/operators";
import { AuthService } from "../Services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

constructor(private authService:AuthService){}

    intercept(req :HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
        debugger;
        console.log('intercepted' ,req);
       
       const headerSettings: {[name: string]: string | string[]; } = {};
       let changedRequest = req;
       if (this.authService.token) {
        headerSettings['Authorization'] = 'Bearer ' + this.authService.token;
      }
      headerSettings['Content-Type'] = 'application/json';
      const newHeader = new HttpHeaders(headerSettings);
      changedRequest = req.clone({
        headers: newHeader});

        return next.handle(changedRequest);
             
    }
}