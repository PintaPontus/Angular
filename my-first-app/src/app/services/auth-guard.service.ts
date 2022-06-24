import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate() {
    let logged = this.authService.isLoggedIn();
    if (!logged) {
      this.router.navigate(['/login']);
    }
    return logged;
  }

}
