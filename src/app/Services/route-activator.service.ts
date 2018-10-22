import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class RouteActivatorService implements CanActivate{

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
    return isLoggedIn;
  }
}
