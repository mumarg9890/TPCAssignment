import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/Shared/Confirm.Validator';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
 passwordRegx=/^(?=.*[!@#$&*])(?=.*[0-9]).{8,30}$/;
  constructor(  private formBuilder: FormBuilder, private authService:AuthService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      UserType:[null,Validators.required],
      Password:[null,[Validators.required, Validators.pattern(this.passwordRegx)]],
      ConfirmPassword:[null,Validators.required,]
    },{ 
      validator: ConfirmedValidator('Password', 'ConfirmPassword')
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    debugger;
    this.authService.signupUser(this.loginForm.get('email').value,this.loginForm.get('Password').value,this.loginForm.get('UserType').value);
    console.log(this.loginForm.value);
  }

}
