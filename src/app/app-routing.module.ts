import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';

//declaramos las rutas 
const routes:Routes = [
  {
    path:'', 
    component: PagesComponent,
    children: [
      {path:'dashboard', component: DashboardComponent}, //rutas secundarias
      {path:'grafica1', component: Grafica1Component}, //ruta secundaria
      {path:'progress', component: ProgressComponent}, //ruta secundaria
      {path: '', redirectTo:'/dashboard', pathMatch:'full'}
    ]
  },
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'**', component: NopagefoundComponent}, //ruta secundaria
]





@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) //forRoot por ser las rutas principales
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//debemos importarlo en el app module