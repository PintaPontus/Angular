import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
    selector: 'pinta-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    logoUrl: string = `https://firebasestorage.googleapis.com/v0/b/angulartest-55eea.appspot.com/o/B%202.0.png?alt=media&token=2de7422e-d220-45b3-81da-602a35624614`;
    username: string | null | undefined;

    constructor(private authService: AuthenticationService) {
    }


    ngOnInit(): void {
        this.username = this.authService.userCredential?.user.email;
    }

}
