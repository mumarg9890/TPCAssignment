import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { FlightsService } from 'src/app/Services/flights.service';
import { d } from '@angular/core/src/render3';
import { ActivatedRoute, Params } from '@angular/router';
import { Flight } from 'src/app/Models/Flight.model';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor(  private formBuilder: FormBuilder, private authService:AuthService,private flightService:FlightsService,
    private activateRote:ActivatedRoute ) { }

  flightForm: FormGroup;
  flightId:string=null;
  editMode:boolean=false;
    ngOnInit() {

    
      this.activateRote.params.subscribe((params:Params) =>{
        debugger;
         this.flightId= params['id'];
         this.editMode= params['id'] !=null;
         console.log(this.editMode);
         this.initForm();
      });

      
    }

    private initForm(){
      let airLine='';
      let plane='';
      let origin='';
      let destinaiton='';
      let flightHOurs='';
      let flight:Flight=null;
      if (this.editMode && this.flightService.flights) {
        flight= this.flightService.flights.find(x=> x.id== this.flightId);
      }
      this.flightForm = this.formBuilder.group({
        airLine: [flight ? flight.airLine:'', [Validators.required]],
        plane:[flight ? flight.plane:'',[Validators.required]],
        origin:[flight ? flight.origin:'',[Validators.required]],
        destinaiton:[flight ? flight.destinaiton:'',[Validators.required]],
        flightHOurs:[flight ? flight.flightHOurs:'',[Validators.required]]
      });
    }

    submit() {
      if (!this.flightForm.valid) {
        return;
      }
      debugger;
      if (!this.editMode) {
        this.flightService.addFlight(this.flightForm.value);
      }
      else  {
        this.flightService.updateFlight(this.flightForm.value,this.flightId);
      }
       // update existing one
    
    }

}
