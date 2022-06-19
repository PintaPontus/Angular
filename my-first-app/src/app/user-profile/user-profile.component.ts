import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'pinta-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

    @ViewChild('inputUserInfo') inputUserInfo!: NgForm;

    constructor(private authService: AuthenticationService) { }

    ngOnInit(): void {
    }

    updateProfile() {
      console.log(this.inputUserInfo.value.username);
      this.authService.updateProfile({
        displayName: this.inputUserInfo.value.username,
        photoURL: ''
      });
    }

    getUser() {
        return this.authService.getUser();
    }
}
