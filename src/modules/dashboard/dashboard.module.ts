import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from '../shared/modules/material/material.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRouting, MaterialModule],
})
export class DashboardModule {}
