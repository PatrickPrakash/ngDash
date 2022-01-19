import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardV2Component } from './components/dashboard-v2/dashboard-v2.component';
import { DashboardV2Routing } from './dashboard-v2-routing.module';
import { NetworkOperatorComponent } from './components/network-operator/network-operator.component';
import { TariffUploadComponent } from './components/tariff-upload/tariff-upload.component';
import { TariffDisplayUpdateComponent } from './components/tariff-display-update/tariff-display-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TariffAsyncValidator } from '../shared/formValidators/tariffAsyncValidator';
import { CoreModule } from '../core/core.module';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { TariffConfirmDialogComponent } from './components/tariff-confirm-dialog/tariff-confirm-dialog.component';
import { MaterialModule } from '../shared/modules/material/material.module';

@NgModule({
  declarations: [
    DashboardV2Component,
    NetworkOperatorComponent,
    TariffUploadComponent,
    TariffDisplayUpdateComponent,
    TariffConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardV2Routing,
    CoreModule,
    RxReactiveFormsModule,
  ],
  providers: [TariffAsyncValidator],
})
export class DashboardV2Module {}
