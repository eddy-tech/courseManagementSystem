import { User } from './../../model/user.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  erreur = 0;
  user = new User();

  constructor(
    private route: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  onLoggedIn() {
    console.log(this.user);
    let isValidUser: boolean = this.authService.SignIn(this.user);
    if (isValidUser) this.route.navigateByUrl('/signup');
    else this.erreur = 1;
  }

  // onLoggedIn() {
  //   let host = environment.host;

  //   this.httpClient.get<any>(host + '/signup ').subscribe(
  //     (data) => {
  //       const user = data.find((a: any) => {
  //         return (
  //           a.email === this.loginFormGroup.value.email &&
  //           a.password === this.loginFormGroup.value.password &&
  //           a.roles === this.loginFormGroup.value.roles
  //         );
  //       });
  //       if (user) {
  //         alert('Login Success !');
  //         this.loginFormGroup.reset();
  //         this.route.navigateByUrl('/course');
  //       } else {
  //         alert('User not found !');
  //       }
  //     },
  //     (err) => {
  //       alert('Something went wrong !');
  //       this.erreur = -1;
  //       console.log(err);
  //     }
  //   );
  // }
}
