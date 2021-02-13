import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule} from "@angular/router";



import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';





@NgModule({
  declarations: [
    PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
  ],
  exports:[
    PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
