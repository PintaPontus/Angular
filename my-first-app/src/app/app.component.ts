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

    constructor(private firedb: Firestore, private authService: AuthenticationService) {

    }

    ngOnInit() {

    }
}
