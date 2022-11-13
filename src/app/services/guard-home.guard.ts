import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardHomeGuard implements CanActivate {
  constructor(private auth: LoginService,private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("check secction")
    if (this.auth.getSession()) {
      return true;
    } else {
      this.router.navigate(['/','login']).finally(()=>alert("You don't have permission to view this page"))
      return false;
    }
  }
  
}
