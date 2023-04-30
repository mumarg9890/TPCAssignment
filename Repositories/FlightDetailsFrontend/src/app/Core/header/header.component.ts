import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { FlightsService } from 'src/app/Services/flights.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }
  
  ngOnInit() {
    
  }
  onLogOut(){
    this.authService.onLogOut();
  }
}
