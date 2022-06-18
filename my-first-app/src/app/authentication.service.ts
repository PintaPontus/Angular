import {Injectable} from '@angular/core';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    UserCredential
} from "firebase/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    userCredential: UserCredential | undefined;

    constructor() {
    }

    signup(email: string, password: string) {
        console.log('CREATE USER');
        console.log('email' + email);
        console.log('password' + password);
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((userCredential) => {
                // Signed in
                //console.log(userCredential);
                this.userCredential = userCredential;
                //console.log(getAuth());
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    login(email: string, password: string) {
        console.log('LOGIN USER');
        console.log('email' + email);
        console.log('password' + password);
        signInWithEmailAndPassword(getAuth(), email, password)
            .then((userCredential) => {
                // Signed in
                //console.log(userCredential);
                this.userCredential = userCredential;
                //console.log(getAuth());
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    logout() {
        signOut(getAuth())
            .then(() => {
                this.userCredential = undefined;
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }
}


