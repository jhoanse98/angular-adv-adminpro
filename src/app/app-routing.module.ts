import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

//modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthModule } from './auth/auth.module';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';



//declaramos las rutas 
const routes:Routes = [

  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component: NopagefoundComponent}, //ruta secundaria
]





@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes), //forRoot por ser las rutas principales
    PagesRoutingModule, //rutas hijas
    AuthRoutingModule
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//debemos importarlo en el app module