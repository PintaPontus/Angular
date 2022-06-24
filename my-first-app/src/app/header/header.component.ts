import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'pinta-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoUrl: string = `https://firebasestorage.googleapis.com/v0/b/angulartest-55eea.appspot.com/o/B%202.0.png?alt=media&token=2de7422e-d220-45b3-81da-602a35624614`;
  username: string | null | undefined;
  isLoggingIn: boolean = false;

  constructor(private authService: AuthenticationService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.username = this.authService.getUser()?.displayName;
      this.route.url.subscribe(url => {
          const urlBase = url.pop();
          this.isLoggingIn = urlBase?.path === 'login';
      });
  }

  isLoggedIn() {
      return this.authService.isLoggedIn();
  }

  getUsername() {
    return this.authService.getUser()?.displayName;
  }
}
