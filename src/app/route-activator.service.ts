import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class RouteActivatorService implements CanActivate{

  constructor(private apiService: ApiService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.apiService.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
    return isLoggedIn;
  }
}
