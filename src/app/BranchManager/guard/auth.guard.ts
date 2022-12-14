import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/Services/admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard1 implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.auth.isLoggedIn()){
      return true;
    }
    else{
      window.alert("Restricted to Manager");
      return false;
    }
    
  }
  constructor(private auth:AdminService) {} 
}
