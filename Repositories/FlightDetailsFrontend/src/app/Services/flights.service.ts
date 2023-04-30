import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest }  from '@angular/common/http';
import { Flight } from '../Models/Flight.model';
import { URLS } from '../Shared/URLS';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable()
export class FlightsService {

    constructor(private router:Router,private httpClient:HttpClient){}
   
    public flights : Flight[];
  
    flightChanges = new Subject<Flight[]>();

    setFlights(flights: Flight[]) {
        this.flights = flights;
        this.flightChanges.next(this.flights);
      }


    getAllFlights() {
       this.httpClient.get<any>(URLS.baseUrl +"/flights")
       .subscribe((reuslt)=>{
           debugger;
        this.setFlights(reuslt.Flight);
       });

    }

    deleteFlight(id:string) {
        const req= new HttpRequest('DELETE',URLS.baseUrl + "/flights/" + id);
        this.httpClient.request(req).pipe(catchError(this.handleError)).subscribe((res:any)=>{
            debugger;
            if (res.status==200) {
               this.getAllFlights();
               alert (res.body.Message);
               }
    });
}

    addFlight(flight:Flight) {
        debugger;
    const req= new HttpRequest('POST',URLS.baseUrl + "/flights/Add",flight);
    this.httpClient.request(req).pipe(catchError(this.handleError)).subscribe((res:any)=>{
        debugger;
        if (res.status==201) {
           this.getAllFlights();
           alert (res.body.Message);
           this.router.navigate(['/Flights']);
           }
});
}

   
    updateFlight(flight:Flight, id:string){

        const updateObject =[];
        Object.keys(flight).forEach((e) => {
            let pName =`${e}`;
            //updateObject.push({pName: `${flight[e]}`})
            updateObject.push({"propName" :pName, "value":`${flight[e]}`},)
         });

        const req= new HttpRequest('PATCH',URLS.baseUrl + "/flights/" + id,updateObject);
        this.httpClient.request(req).pipe(catchError(this.handleError)).subscribe((res:any)=>{
            debugger;
            if (res.status==200) {
               this.getAllFlights();
               alert (res.body.Message);
               this.router.navigate(['/Flights']);
               }
    });
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