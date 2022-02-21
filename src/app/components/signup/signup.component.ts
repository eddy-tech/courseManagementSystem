import { SignupService } from './../../services/signup.service';
import { User } from './../../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.signupFormGroup = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      nickname: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  onSignUp() {
    this.signupService.signup(this.signupFormGroup.value).subscribe(
      (data) => {
        alert('Signup Successful');
        this.signupFormGroup.reset();
        this.route.navigateByUrl('/course');
      },
      (err) => {
        alert('Something went wrong');
        console.log(err);
      }
    );
  }
}
