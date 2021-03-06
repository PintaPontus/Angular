import {Injectable} from '@angular/core';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    UserCredential
} from "firebase/auth";
import {Subject} from "rxjs";
import {updateProfile} from "@angular/fire/auth";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor() {
    }

    signup(email: string, password: string): Subject<boolean> {
        const success = new Subject<boolean>();
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((userCredential) => {
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
                success.next(true);
            })
            .catch((error) => {
                console.log(error);
                success.next(false);
            });
        console.log(getAuth())
        return success;
    }

    logout() {
        signOut(getAuth())
            .then(() => {
                console.log('logout success');
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    isLoggedIn() {
        return getAuth().currentUser !== null;
    }

    getUser(){
        return getAuth().currentUser;
    }

    updateProfile(param: { displayName: string, photoURL: string }) {
        updateProfile(getAuth().currentUser!, param)
            .then(() => {
                console.log('updateProfile success');
            }).catch((error) => {
                console.log(error);
            });
    }
}


