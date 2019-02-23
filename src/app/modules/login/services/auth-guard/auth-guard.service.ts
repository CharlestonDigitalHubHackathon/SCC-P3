import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor() { }

  canActivate(next, state) {
    return localStorage.getItem('id') != null;
  }
}
