import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardV2Component } from './components/dashboard-v2/dashboard-v2.component';

const dashRoutes: Routes = [
  {
    path: 'dashboardv2',
    component: DashboardV2Component,
    //children: [{}],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashRoutes)],
  exports: [RouterModule],
})

export class DashboardV2Routing {}
