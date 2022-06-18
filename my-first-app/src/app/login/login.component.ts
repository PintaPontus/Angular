import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Firestore} from "@angular/fire/firestore";
import {AuthenticationService} from "../authentication.service";

@Component({
    selector: 'pinta-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    @ViewChild('inputCredentials') inputCredentials!: NgForm;

    constructor(private firedb: Firestore, private authService: AuthenticationService) {
    }

    ngOnInit(): void {
    }

    signup() {
        let emailInput = this.inputCredentials.value.mail;
        let passwordInput = this.inputCredentials.value.password;
        this.authService.signup(emailInput, passwordInput);
    }

    login() {
        let emailInput = this.inputCredentials.value.mail;
        let passwordInput = this.inputCredentials.value.password;
        this.authService.login(emailInput, passwordInput);
    }

    logout() {
        this.authService.logout();
    }

}
