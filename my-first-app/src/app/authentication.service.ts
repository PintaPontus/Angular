import {Injectable} from '@angular/core';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    UserCredential
} from "firebase/auth";
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    userCredential: UserCredential | undefined;

    constructor() {
    }

    signup(email: string, password: string): Subject<boolean> {
        const success = new Subject<boolean>();
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((userCredential) => {
                this.userCredential = userCredential;
                success.next(true);
            })
            .catch((error) => {
                console.log(error);
                success.next(false);
            });
        return success;
    }

    login(email: string, password: string): Subject<boolean> {
        const success = new Subject<boolean>();
        signInWithEmailAndPassword(getAuth(), email, password)
            .then((userCredential) => {
                this.userCredential = userCredential;
                success.next(true);
            })
            .catch((error) => {
                console.log(error);
                success.next(false);
            });
        return success;
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


