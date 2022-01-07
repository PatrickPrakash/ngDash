import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardV2Component } from './components/dashboard-v2/dashboard-v2.component';
import { DashboardV2Routing } from './dashboard-v2-routing.module';
import { NetworkOperatorComponent } from './components/network-operator/network-operator.component';
import { TariffUploadComponent } from './components/tariff-upload/tariff-upload.component';
import { TariffDisplayUpdateComponent } from './components/tariff-display-update/tariff-display-update.component';

@NgModule({
  declarations: [DashboardV2Component, NetworkOperatorComponent, TariffUploadComponent, TariffDisplayUpdateComponent],
  imports: [CommonModule, DashboardV2Routing],
})
export class DashboardV2Module {}
