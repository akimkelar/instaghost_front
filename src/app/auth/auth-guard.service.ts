import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate() {
    return this.auth.isAuthenticated().pipe(map((auth) => {
      if (auth) {
        console.log('authenticated');
        return true;
      }
      console.log('not authenticated');
      this.router.navigate(['login']);
      return false;
    }));
  }
}
