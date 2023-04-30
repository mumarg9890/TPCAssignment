import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { map, take } from "rxjs/operators";
import { AuthService } from "../Services/auth.service";

@Injectable()
export class AuthManagerGuard implements CanActivate {


    constructor(private authService: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         return this.authService.authenticated && this.authService.type==2;
        
    }
}