import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/Shared/Confirm.Validator';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-inn',
  templateUrl: './sign-inn.component.html',
  styleUrls: ['./sign-inn.component.css']
})
export class SignInnComponent implements OnInit {

  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
 
  constructor(  private formBuilder: FormBuilder, private authService:AuthService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      Password:[null,[Validators.required]]
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
   this.authService.signinUser(this.loginForm.get('email').value,this.loginForm.get('Password').value);
  }
}
