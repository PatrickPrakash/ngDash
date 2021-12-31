import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { ToastService } from '../services/toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.isLoggedIn()) {
      console.warn('Logged in with stored token');

      return true;
    }
    console.warn("Can't logged in");
    this.toastService.openSnackBar('Token Expired - Login Again');
    this.router.navigateByUrl('/signin');
    return true;
  }
}
