import { Injectable } from '@angular/core';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  signup(email: string, password: string){
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
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
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
      // Signed in
      console.log(userCredential);
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
    signOut(getAuth()).then(console.log).catch(console.log)
  }
}


