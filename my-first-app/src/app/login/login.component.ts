import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Firestore} from "@angular/fire/firestore";
import {AuthenticationService} from "../authentication.service";
import {observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'pinta-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    @ViewChild('inputCredentials') inputCredentials!: NgForm;

    public loginError: boolean = false;

    constructor(private authService: AuthenticationService, private router: Router) {
    }

    ngOnInit(): void {
    }

    signup() {
        let emailInput = this.inputCredentials.value.mail;
        let passwordInput = this.inputCredentials.value.password;
        this.authService.signup(emailInput, passwordInput).subscribe((success) => {
            this.loginError = !success;
            if (success) {
                this.router.navigate(['']);
            }
        });
    }


    login() {
        let emailInput = this.inputCredentials.value.mail;
        let passwordInput = this.inputCredentials.value.password;
        this.authService.login(emailInput, passwordInput).subscribe((success) => {
            this.loginError = !success;
            if (success) {
                this.router.navigate(['']);
            }
        });
    }

    logout() {
        this.authService.logout();
    }

}
