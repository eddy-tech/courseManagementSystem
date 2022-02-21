import { User } from './../model/user.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  users: User[] = [
    {
      username: 'Lafont',
      password: '1234',
      roles: ['INSTRUCTOR'],
    },
    {
      username: 'albert',
      password: '1234',
      roles: ['STUDENT'],
    },
    {
      username: 'Mangala',
      password: 'azerty123',
      roles: ['STUDENT'],
    },
  ];

  public loggedUser?: string = ''; // PERMETTRE DE STOCKER LE USER CONNECTE
  public isloggedIn: boolean = false; // SI USER CONNECTE = true ELSE = FALSE
  public roles?: string[]; // TABLEAU QUI VA STOCKER LES ROLES DE USER QUI EST CONNECTE

  constructor(private route: Router) {}

  SignIn(user: User): boolean {
    let validUser: boolean = false;
    this.users.forEach((curUser) => {
      if (
        user.username === curUser.username &&
        user.password === curUser.password
      ) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', String(this.loggedUser));
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }

  isAdmin(): boolean {
    if (!this.roles) return false;
    return this.roles.indexOf('INSTRUCTOR') > -1;
  }
  isUser(): boolean {
    if (!this.roles) return false;
    return this.roles.indexOf('STUDENT') > -1;
  }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.route.navigateByUrl('/login');
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.geUserRoles(login);
  }
  geUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }
}
