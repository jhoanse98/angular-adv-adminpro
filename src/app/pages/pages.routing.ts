import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path:'dashboard', 
        component: PagesComponent,
        children: [
          {path:'', component: DashboardComponent}, //rutas secundarias
          {path:'grafica1', component: Grafica1Component}, //ruta secundaria
          {path:'progress', component: ProgressComponent}, //ruta secundaria
          {path:'promesas', component: PromesasComponent},
          {path:'rxjs', component: RxjsComponent},
          {path:'account-settings', component: AccountSettingsComponent}, //ruta secundaria
        ]
      },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
