import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest, HttpParams }  from '@angular/common/http';
import { URLS } from '../Shared/URLS';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
@Injectable()
export class AuthService {

    constructor(private router:Router,private httpClient:HttpClient){}
    token: string = null;
    type:number=null;
    authenticated:boolean=false;

  
    signupUser(email: string, password: string,type:string) {
       
            let userObj={email:email,password:password,type:type};
            const req= new HttpRequest('Post',URLS.baseUrl + "/users/signUp",userObj);
             this.httpClient.request(req).pipe(catchError(this.handleError)).subscribe((res:any)=>{
                 debugger;
               if (res.status==201) {
                 this.token=res.body.token;
                 this.type=res.body.type;
                 this.authenticated=true;
                 this.router.navigate(['/Flights']);
               }
                           
           console.log(res)
       });
     
    }

    signinUser(email: string, password: string) {
        
        let userObj={email:email,password:password};
        const req= new HttpRequest('Post',URLS.baseUrl + "/users/login",userObj);
         this.httpClient.request(req).pipe(catchError(this.handleError)).subscribe((res:any)=>{
             debugger;
             if (res.type==0) {
                 return;
             }
           if (res.status==200) {
             this.token=res.body.token;
             this.type=res.body.type;
             this.authenticated=true;
             this.router.navigate(['/Flights']);
            }
          
        });
     }

    onLogOut(){
        this.token=null;
        this.authenticated=false;
        this.type=null;
        this.router.navigate(['/']);
            
    }


    handleError(error) {
        debugger;
        debugger;
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        errorMessage = 'Some error occoured';
        window.alert(error.error.Message);
        return throwError(errorMessage);
    }

} 