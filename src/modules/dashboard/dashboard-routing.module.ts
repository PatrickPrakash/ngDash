import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const dashRoutes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(dashRoutes)],
  exports: [RouterModule],
})
export class DashboardRouting {}
