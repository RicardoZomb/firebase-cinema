import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone) {
      this.validateUserLoggedIn();
    }

    validateUserLoggedIn() {
      this.afAuth.authState.subscribe(user => {
        this.user = user;
      })
    }

  async oAuthProvider(provider: any) {
    return this.afAuth.auth.signInWithPopup(provider).then((information) => {
      console.log('Information', information);
      this.ngZone.run(() => {
        this.router.navigate(['billboard']);
      });
    }).catch(error => {
      console.log(error);
    });
  }
  
  async signInWithGoogle() {
    return this.oAuthProvider(new firebase.auth.GoogleAuthProvider()).then((authentication) => {
      console.log('Logged In');
    }).catch(error => {
      console.error(error);
    });
  }
  ​
}
