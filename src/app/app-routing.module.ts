import { NgModule } from '@angular/core';

import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/modules/core/guards/auth.guard';
import { ToastService } from 'src/modules/core/services/toast.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('src/modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, ToastService],
})
export class AppRoutingModule {}
