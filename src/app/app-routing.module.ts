import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DashImageComponent } from './dash/dash-image/dash-image.component';
const routes: Routes = [
  { path: 'signup' , component: SignupComponent },
  { path: 'signin' , component: SigninComponent  },
  {path: 'dashboard', component: DashImageComponent},
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
