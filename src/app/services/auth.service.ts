import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  constructor(private afAuth: AngularFireAuth) {
    this.user = this.fetchUser();
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        this.user = null;
        localStorage.setItem('user', null);
      }
    });
  }
  async login() {
    try {
      await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (e) {
      alert('Error!' + e.message);
    }
  }
  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
  }
  get isLoggedIn(): boolean {
    return this.user !== null;
  }

  public fetchUser(): User {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user;
  }
}
