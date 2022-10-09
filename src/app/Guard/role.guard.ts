import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  currentrole: any;
  respdata: any;
  constructor(private service: LoginService, private route: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.IsLogged()) {
      this.currentrole = 'admin';//we can make it dynamic using Api
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }

}
