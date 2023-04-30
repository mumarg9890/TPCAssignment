import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInnComponent } from './sign-inn/sign-inn.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'signup', component:SignUpComponent},
  {path:'signin', component:SignInnComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
