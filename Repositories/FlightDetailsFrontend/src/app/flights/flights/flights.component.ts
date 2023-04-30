import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/Services/flights.service';
import { Flight } from 'src/app/Models/Flight.model';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private flightsService:FlightsService,private authAervice:AuthService) { }
  public flights : Flight[];

  ngOnInit() {
    this.flightsService.getAllFlights();
     this.flightsService.flightChanges.subscribe((result:Flight[])=>{
      this.flights=result;
        console.log(this.flights);
     });
  }
  
  DeleteFlight(flight:Flight){
    debugger;
    if (this.authAervice.authenticated && this.authAervice.type==1) {
      this.flightsService.deleteFlight(flight.id);
    }
    else  
    {
      alert('Not authorized to perform this action');
    }
    console.log(flight);
  }
}
