import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from "./Core/home/home.component";


const appRoutes : Routes=[
    {path:'', component:HomeComponent}
      
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}