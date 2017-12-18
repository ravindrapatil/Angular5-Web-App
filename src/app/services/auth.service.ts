import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isUserLoggedIn: boolean;

  constructor(private router: Router) {
    this.isUserLoggedIn = false;
  }

  isLoggedIn(): boolean {
    if (sessionStorage.getItem('userLogged') === 'logged') {
      return this.isUserLoggedIn = true;
    } else {
      return this.isUserLoggedIn = false;
    }
  }

  authenticateUser(userObj) {
    console.log(userObj);
    if (userObj.email === 'ravindra.spatil@gmail.com' && userObj.password === 'admin') {
      return 'logged';
    } else {
      return 'login';
    }
  }
}
