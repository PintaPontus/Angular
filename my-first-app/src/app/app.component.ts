import {Component, ViewChild} from '@angular/core';
import {Firestore, collectionData, collection, addDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {DocumentData} from "@angular/fire/compat/firestore";
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "./authentication.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'my-first-app';

    @ViewChild('inputCredentials') inputCredentials!: NgForm;

    constructor(private firedb: Firestore, private authService: AuthenticationService) {

    }

    ngOnInit() {

    }

    signup() {
        let emailInput = this.inputCredentials.value.nome;
        let passwordInput = this.inputCredentials.value.cognome;
        this.authService.signup(emailInput, passwordInput);
    }

    login() {
        let emailInput = this.inputCredentials.value.nome;
        let passwordInput = this.inputCredentials.value.cognome;
        this.authService.login(emailInput, passwordInput);
    }

    logout() {
        this.authService.logout();
    }
}
